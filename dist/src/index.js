"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const runtime_pb_1 = __importDefault(require("../pb/runtime_pb"));
const runtime_grpc_pb_1 = __importDefault(require("../pb/runtime_grpc_pb"));
const grpc_1 = __importDefault(require("grpc"));
/**
 * Implements the Invoke RPC method.
 */
function invoke(call, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const handler = require('/root/extension/dist/index.js');
        const buf = call.request.getEvent();
        try {
            // Since event buffer is buffer of bytes that represents json
            // structure passed by caller, convert bytes to json.
            const event = Buffer.from(uint8).toString('utf8');
            console.log(event);
            // Run extension and wait for it to finish.
            yield handler.run(event);
            // Build up reply structure.
            const reply = new runtime_pb_1.default.InvokeReply();
            callback(null, reply);
        }
        catch (err) {
            callback(err, null);
        }
    });
}
function main() {
    var server = new grpc_1.default.Server();
    server.addService(runtime_grpc_pb_1.default.RPCService, { invoke });
    server.bind('0.0.0.0:50051', grpc_1.default.ServerCredentials.createInsecure());
    server.start();
}
main();
