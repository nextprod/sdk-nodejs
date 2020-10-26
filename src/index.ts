import messages from '../pb/runtime_pb';
import services from '../pb/runtime_grpc_pb';
import grpc from 'grpc'

/**
 * Implements the Invoke RPC method.
 */
async function invoke(call, callback) {
  const handler = require('/root/extension/dist/index.js')
  await handler.run(call.request.getEvent());
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