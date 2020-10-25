import messages from '../pb/runtime_pb';
import services from '../pb/runtime_grpc_pb';
import grpc from 'grpc'

/**
 * Implements the Invoke RPC method.
 */
async function invoke(call, callback) {
  console.log(call.request.getEvent());
  const handler = require('/root/extension/dist/index.js')
  console.log(handler)
  await handler.run()
  callback(null, messages.InvokeReply());
}

function main() {
  var server = new grpc.Server();
  server.addService(services.RPCService, { invoke });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main()