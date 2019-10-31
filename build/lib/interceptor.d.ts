import grpc from "grpc";
import Auth from "./auth";
declare type NextCall = (options: grpc.CallOptions) => grpc.InterceptingCall | null;
export declare type InterceptorMethod = (options: grpc.CallOptions, nextCall: NextCall) => any;
export declare class MetadataInterceptor {
    private developer_token;
    private login_customer_id;
    private access_token;
    private auth;
    private requestInterceptor;
    constructor(developer_token: string, login_customer_id: string | undefined, access_token: string | undefined, auth: Auth | undefined);
    intercept(options: grpc.CallOptions, nextCall: NextCall): grpc.InterceptingCall;
    private buildRequester;
}
export declare class ExceptionInterceptor {
    private requestInterceptor;
    constructor();
    intercept(options: grpc.CallOptions, nextCall: NextCall): grpc.InterceptingCall;
    private buildRequester;
    private buildListener;
    private getGoogleAdsFailure;
    private getRequestId;
    private handleGrpcFailure;
}
export declare class ResponseParsingInterceptor {
    private requestInterceptor;
    constructor();
    intercept(options: grpc.CallOptions, nextCall: NextCall): grpc.InterceptingCall;
    private buildRequester;
    private buildListener;
}
export {};
