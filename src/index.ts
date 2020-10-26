import messages from '../pb/runtime_pb';
import services from '../pb/runtime_grpc_pb';
import grpc, { Call } from 'grpc'

/**
 * Implements the Invoke RPC method.
 */
async function invoke(call, callback) {
  const handler = require('/root/extension/dist/index.js')
  const buf = call.request.getEvent()
  try {
    // Since event buffer is buffer of bytes that represents json
    // structure passed by caller, convert bytes to json.
    const event: any = JSON.parse(Buffer.from(buf).toString('utf8'))
    // Build up reply structure.
    const reply = new messages.InvokeReply()
    // Mark by default failed.
    reply.setState(messages.State.FAIL)
    // Run extension and wait for it to finish.
    const res = await handler.run(event);
    if (!(res instanceof Error)) {
      reply.setState(messages.State.SUCCESS)
    } else {
      reply.setReason(res.message)
    }
    callback(null, reply);
  } catch (err) {
    callback(err, null)
  }
}

function main() {
  const server = new grpc.Server();
  server.addService(services.RPCService, { invoke });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}
main()