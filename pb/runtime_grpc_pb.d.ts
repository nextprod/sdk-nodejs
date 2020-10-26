// package: nex
// file: pb/runtime.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as pb_runtime_pb from "../pb/runtime_pb";

interface IRPCService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    invoke: IRPCService_IInvoke;
}

interface IRPCService_IInvoke extends grpc.MethodDefinition<pb_runtime_pb.InvokeRequest, pb_runtime_pb.InvokeReply> {
    path: "/nex.RPC/Invoke";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_runtime_pb.InvokeRequest>;
    requestDeserialize: grpc.deserialize<pb_runtime_pb.InvokeRequest>;
    responseSerialize: grpc.serialize<pb_runtime_pb.InvokeReply>;
    responseDeserialize: grpc.deserialize<pb_runtime_pb.InvokeReply>;
}

export const RPCService: IRPCService;

export interface IRPCServer {
    invoke: grpc.handleUnaryCall<pb_runtime_pb.InvokeRequest, pb_runtime_pb.InvokeReply>;
}

export interface IRPCClient {
    invoke(request: pb_runtime_pb.InvokeRequest, callback: (error: grpc.ServiceError | null, response: pb_runtime_pb.InvokeReply) => void): grpc.ClientUnaryCall;
    invoke(request: pb_runtime_pb.InvokeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_runtime_pb.InvokeReply) => void): grpc.ClientUnaryCall;
    invoke(request: pb_runtime_pb.InvokeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_runtime_pb.InvokeReply) => void): grpc.ClientUnaryCall;
}

export class RPCClient extends grpc.Client implements IRPCClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public invoke(request: pb_runtime_pb.InvokeRequest, callback: (error: grpc.ServiceError | null, response: pb_runtime_pb.InvokeReply) => void): grpc.ClientUnaryCall;
    public invoke(request: pb_runtime_pb.InvokeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_runtime_pb.InvokeReply) => void): grpc.ClientUnaryCall;
    public invoke(request: pb_runtime_pb.InvokeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_runtime_pb.InvokeReply) => void): grpc.ClientUnaryCall;
}
