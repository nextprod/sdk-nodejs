// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pb_runtime_pb = require('../pb/runtime_pb.js');

function serialize_nex_InvokeReply(arg) {
  if (!(arg instanceof pb_runtime_pb.InvokeReply)) {
    throw new Error('Expected argument of type nex.InvokeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nex_InvokeReply(buffer_arg) {
  return pb_runtime_pb.InvokeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nex_InvokeRequest(arg) {
  if (!(arg instanceof pb_runtime_pb.InvokeRequest)) {
    throw new Error('Expected argument of type nex.InvokeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nex_InvokeRequest(buffer_arg) {
  return pb_runtime_pb.InvokeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var RPCService = exports.RPCService = {
  // Sends a greeting
  invoke: {
    path: '/nex.RPC/Invoke',
    requestStream: false,
    responseStream: false,
    requestType: pb_runtime_pb.InvokeRequest,
    responseType: pb_runtime_pb.InvokeReply,
    requestSerialize: serialize_nex_InvokeRequest,
    requestDeserialize: deserialize_nex_InvokeRequest,
    responseSerialize: serialize_nex_InvokeReply,
    responseDeserialize: deserialize_nex_InvokeReply,
  },
};

exports.RPCClient = grpc.makeGenericClientConstructor(RPCService);
