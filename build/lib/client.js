"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cosmiconfig_1 = __importDefault(require("cosmiconfig"));
const grpc_1 = __importDefault(require("grpc"));
const lodash_get_1 = __importDefault(require("lodash.get"));
const auth_1 = __importDefault(require("./auth"));
const interceptor_1 = require("./interceptor");
const services = __importStar(require("./services"));
const GrpcTypes = __importStar(require("./types"));
const utils_1 = require("./utils");
// @ts-ignore
const compiled_resources_js_1 = __importDefault(require("../protos/compiled-resources.js"));
const DEFAULT_VERSION = "v2";
const GOOGLE_ADS_ENDPOINT = "googleads.googleapis.com:443";
const PROTO_ROOT = `google.ads.googleads.${DEFAULT_VERSION}`;
const allProtos = lodash_get_1.default(compiled_resources_js_1.default, PROTO_ROOT);
class GoogleAdsClient {
    constructor(options) {
        if (typeof options === "string" || typeof options === "undefined") {
            const configPath = options;
            const { config = {} } = this.loadConfig(configPath) || {};
            options = config;
        }
        this.validateOptions(options);
        if (this.usingToken(options)) {
            this.options = options;
        }
        else {
            /* Access token has not been provided */
            this.options = options;
            this.auth = new auth_1.default({
                clientId: this.options.client_id,
                clientSecret: this.options.client_secret,
                refreshToken: this.options.refresh_token,
                accessTokenGetter: this.options.accessTokenGetter,
            });
        }
    }
    getService(serviceName) {
        const serviceClientName = `${serviceName}Client`;
        if (!services.hasOwnProperty(serviceClientName)) {
            throw new Error(`Specified service "${serviceName}" does not exist in Google Ads API ${DEFAULT_VERSION}.`);
        }
        const interceptors = this.buildInterceptors();
        const serviceClientConstructor = services[serviceClientName];
        const service = new serviceClientConstructor(GOOGLE_ADS_ENDPOINT, grpc_1.default.credentials.createSsl(), {
            interceptors,
            /*
              By default, the maximum size of a gRPC message is 4MB.
              Google Ads results can sometimes be quite big, so 4MB can be insufficient.
              Here, we set it to 1GB to essentially remove that limit.
            */
            "grpc.max_send_message_length": 1024 * 1024 * 1024,
            "grpc.max_receive_message_length": 1024 * 1024 * 1024,
        });
        /* Promisify gRPC service methods (callbacks are kept as well) */
        utils_1.promisifyServiceClient(service);
        return service;
    }
    buildResource(resource, data) {
        if (!allProtos.resources.hasOwnProperty(resource) &&
            !allProtos.services.hasOwnProperty(resource)) {
            throw new Error(`Specified type "${resource}" does not exist in Google Ads API ${DEFAULT_VERSION}`);
        }
        /* Load the relevant types */
        const type = allProtos.resources[resource] || allProtos.services[resource];
        const grpcType = GrpcTypes[resource];
        /*
          This translates ts values, such as string, to the protobuf format
          e.g. {some_name: "campaign"} -> {someName: { value: "campaign" }}
        */
        const protoFormatData = utils_1.convertToProtoFormat(data, type, resource);
        /* Create a new protobuf Message of the specified type */
        const message = type.fromObject(protoFormatData);
        // TODO: Include debug option that also returns the readable version of the protobuf
        /* Create a readable js object from the protobuf (useful for debugging) */
        // const readable = type.toObject(message, {
        //   enums: String, // enums as string names
        //   longs: String, // longs as strings (requires long.js)
        //   bytes: String, // bytes as base64 encoded strings
        //   defaults: true, // includes default values
        //   arrays: true, // populates empty arrays (repeated fields) even if defaults=false
        //   objects: true, // populates empty objects (map fields) even if defaults=false
        //   oneofs: true, // includes virtual oneof fields set to the present field's name
        // });
        /* Encode the protobuf so it can be translated to the specific gRPC type */
        const encoded = type.encode(message).finish();
        /* Translate the encoded protobuf type to the grpc type */
        const protobuf = grpcType.deserializeBinary(encoded);
        // return { protobuf, readable };
        return protobuf;
    }
    buildInterceptors() {
        const metadataInterceptor = new interceptor_1.MetadataInterceptor(this.options.developer_token, this.options.login_customer_id, this.options.access_token, this.auth);
        const exceptionInterceptor = new interceptor_1.ExceptionInterceptor();
        const responseParsingInterceptor = new interceptor_1.ResponseParsingInterceptor();
        const interceptors = [
            (options, nextCall) => metadataInterceptor.intercept(options, nextCall),
            (options, nextCall) => exceptionInterceptor.intercept(options, nextCall),
        ];
        if (this.options.parseResults) {
            interceptors.push((options, nextCall) => responseParsingInterceptor.intercept(options, nextCall));
        }
        return interceptors;
    }
    loadConfig(configPath) {
        const explorer = cosmiconfig_1.default("googleads");
        if (configPath) {
            return explorer.loadSync(configPath);
        }
        return explorer.searchSync();
    }
    validateOptions(options) {
        if (!options) {
            throw new Error(`Client expects initialisation options`);
        }
        if (!options.developer_token) {
            throw new Error(`Missing required key "developer_token" in options`);
        }
        if (this.usingToken(options) && !options.access_token) {
            throw new Error(`Missing required keys in options, expected "access_token", "developer_token"`);
        }
        if (!this.usingToken(options)) {
            if (!options.client_id ||
                !options.client_secret ||
                !options.refresh_token) {
                throw new Error(`Missing required keys in options, expected "client_id", "client_secret", "refresh_token"`);
            }
        }
    }
    usingToken(options) {
        return "access_token" in options;
    }
}
exports.GoogleAdsClient = GoogleAdsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXNDO0FBQ3RDLGdEQUF3QjtBQUN4Qiw0REFBNkI7QUFFN0Isa0RBQTBCO0FBQzFCLCtDQUt1QjtBQUN2QixxREFBdUM7QUFDdkMsbURBQXFDO0FBQ3JDLG1DQUF1RTtBQUV2RSxhQUFhO0FBQ2IsNEZBQWdFO0FBRWhFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQztBQUM3QixNQUFNLG1CQUFtQixHQUFHLDhCQUE4QixDQUFDO0FBRTNELE1BQU0sVUFBVSxHQUFHLHdCQUF3QixlQUFlLEVBQUUsQ0FBQztBQUM3RCxNQUFNLFNBQVMsR0FBRyxvQkFBRyxDQUFDLCtCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBdUJyRCxNQUFhLGVBQWU7SUFJMUIsWUFBWSxPQUFnRTtRQUMxRSxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDakUsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDO1lBQzNCLE1BQU0sRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUQsT0FBTyxHQUFHLE1BQXVELENBQUM7U0FDbkU7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQWlDLENBQUM7U0FDbEQ7YUFBTTtZQUNMLHdDQUF3QztZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQStCLENBQUM7WUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGNBQUksQ0FBQztnQkFDbkIsUUFBUSxFQUFF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