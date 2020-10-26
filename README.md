# sdk-nodejs

Generate static client and server
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./ --grpc_out=./ --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` ./pb/runtime.proto

grpc_tools_node_protoc --ts_out=./ --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts ./pb/runtime.proto