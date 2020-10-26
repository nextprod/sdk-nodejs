import messages from '../pb/runtime_pb';
import services from '../pb/runtime_grpc_pb';
import grpc from 'grpc'

/**
 * Implements the Invoke RPC method.
 */
async function invoke(call, callback) {
  const handler = require('/root/extension/dist/index.js')
  const buf = Buffer.from(call.request.getEvent())
  // Since event buffer is buffer of bytes that represents json
  // structure passed by caller, convert bytes to json.
  const event: any = buf.toJSON()
  // Run extension and wait for it to finish.
  await handler.run(event);
  // Build up reply structure.
  const reply = new messages.InvokeReply()
  callback(null, reply);
}

function main() {
  var server = new grpc.Server();
  server.addService(services.RPCService, { invoke });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}
main()