/**
 * @fileoverview gRPC-Web generated client stub for proto.user
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

import * as grpcWeb from 'grpc-web';
import {
  GetRequest,
  GetResponse,
  PostRequest,
  PostResponse,
  } from './user_pb';

export class UsersClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(
    GetResponse,
    (request: GetRequest) => {
      return request.serializeBinary();
    },
    GetResponse.deserializeBinary
  );

  get(
    request: GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/proto.user.Users/Get',
      request,
      metadata || {},
      this.methodInfoGet,
      callback);
  }

  methodInfoPost = new grpcWeb.AbstractClientBase.MethodInfo(
    PostResponse,
    (request: PostRequest) => {
      return request.serializeBinary();
    },
    PostResponse.deserializeBinary
  );

  post(
    request: PostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PostResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/proto.user.Users/Post',
      request,
      metadata || {},
      this.methodInfoPost,
      callback);
  }

}

