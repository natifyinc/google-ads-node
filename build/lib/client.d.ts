interface CommonClientOptions {
    developer_token: string;
    login_customer_id?: string;
    parseResults?: boolean;
}
interface ClientOptionsWithToken extends CommonClientOptions {
    access_token: string;
}
interface ClientOptionsNoToken extends CommonClientOptions {
    client_id: string;
    client_secret: string;
    refresh_token: string;
    accessTokenGetter?(clientId?: string, clientSecret?: string, refreshToken?: string): Promise<string>;
}
export declare class GoogleAdsClient {
    private options;
    private auth;
    constructor(options?: string | ClientOptionsNoToken | ClientOptionsWithToken);
    getService(serviceName: string): any;
    buildResource(resource: string, data: any): unknown;
    private buildInterceptors;
    private loadConfig;
    private validateOptions;
    private usingToken;
}
export {};
