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
  await handler.run(call.request.getEvent())
  callback(null, messages.InvokeReply());
}

function main() {
  var server = new grpc.Server();
  server.addService(services.RPCService, { invoke });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}
// The problem with grpc extensions is that separate docker container with extension
// added as a volume has to be added or runtime added as a volume to extensions' container.
// If runtime is added to extension container as a volume, it means that runtime has to be
// downloaded before executing job. To optimize step execution, runtimes could be downloaded
// to agents' directory on startup.
// However for statically typed languages like Golang, where executable binary is produced,
// runtime should be imported to extension package and compiled together.
main()