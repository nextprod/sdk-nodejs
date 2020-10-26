// package: nex
// file: pb/runtime.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class InvokeRequest extends jspb.Message {
    getEvent(): Uint8Array | string;
    getEvent_asU8(): Uint8Array;
    getEvent_asB64(): string;
    setEvent(value: Uint8Array | string): InvokeRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvokeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InvokeRequest): InvokeRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: InvokeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvokeRequest;
    static deserializeBinaryFromReader(message: InvokeRequest, reader: jspb.BinaryReader): InvokeRequest;
}

export namespace InvokeRequest {
    export type AsObject = {
        event: Uint8Array | string,
    }
}

export class InvokeReply extends jspb.Message {
    getState(): State;
    setState(value: State): InvokeReply;

    getReason(): string;
    setReason(value: string): InvokeReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvokeReply.AsObject;
    static toObject(includeInstance: boolean, msg: InvokeReply): InvokeReply.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: InvokeReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvokeReply;
    static deserializeBinaryFromReader(message: InvokeReply, reader: jspb.BinaryReader): InvokeReply;
}

export namespace InvokeReply {
    export type AsObject = {
        state: State,
        reason: string,
    }
}

export enum State {
    SUCCESS = 0,
    FAIL = 1,
}
