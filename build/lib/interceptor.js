"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_1 = __importDefault(require("grpc"));
const types_1 = require("./types");
const utils_1 = require("./utils");
const FAILURE_KEY = "google.ads.googleads.v2.errors.googleadsfailure-bin";
const REQUEST_ID_KEY = "request-id";
const RETRY_STATUS_CODES = [grpc_1.default.status.INTERNAL, grpc_1.default.status.RESOURCE_EXHAUSTED];
class MetadataInterceptor {
    constructor(developer_token, login_customer_id, access_token, auth) {
        this.developer_token = developer_token;
        this.login_customer_id = login_customer_id;
        this.access_token = access_token;
        this.auth = auth;
        this.requestInterceptor = this.buildRequester();
    }
    intercept(options, nextCall) {
        return new grpc_1.default.InterceptingCall(nextCall(options), this.requestInterceptor);
    }
    buildRequester() {
        return new grpc_1.default.RequesterBuilder()
            .withStart(async (metadata, listener, next) => {
            const access_token = this.auth ? await this.auth.getAccessToken() : this.access_token;
            metadata.add(`Authorization`, `Bearer ${access_token}`);
            metadata.add(`developer-token`, this.developer_token);
            if (this.login_customer_id) {
                metadata.add(`login-customer-id`, this.login_customer_id);
            }
            next(metadata, listener);
        })
            .build();
    }
}
exports.MetadataInterceptor = MetadataInterceptor;
class ExceptionInterceptor {
    constructor() {
        this.requestInterceptor = this.buildRequester();
    }
    intercept(options, nextCall) {
        return new grpc_1.default.InterceptingCall(nextCall(options), this.requestInterceptor);
    }
    buildRequester() {
        return new grpc_1.default.RequesterBuilder()
            .withStart((metadata, _listener, next) => {
            const newListener = this.buildListener();
            next(metadata, newListener);
        })
            .build();
    }
    buildListener() {
        return new grpc_1.default.ListenerBuilder()
            .withOnReceiveStatus((status, next) => {
            if (status.code !== grpc_1.default.status.OK) {
                // TODO: Throw this error instead of returning a new status?
                const error = this.handleGrpcFailure(status);
                if (error.hasOwnProperty("error_code")) {
                    // @ts-ignore Custom error field "error_code"
                    status.metadata.add("error-code", JSON.stringify(error.error_code));
                }
                if (error.hasOwnProperty("location")) {
                    // @ts-ignore Custom error field "location"
                    status.metadata.add("location", error.location);
                }
                const errorStatus = new grpc_1.default.StatusBuilder()
                    .withCode(status.code)
                    .withDetails(error.message)
                    .withMetadata(status.metadata)
                    .build();
                next(errorStatus);
            }
            else {
                next(status);
            }
        })
            .build();
    }
    getGoogleAdsFailure(metadata) {
        if (!metadata) {
            return null;
        }
        for (const key in metadata.getMap()) {
            if (key === FAILURE_KEY) {
                const message = metadata.get(key);
                try {
                    const failure = types_1.GoogleAdsFailure.deserializeBinary(message[0]);
                    return failure;
                }
                catch (err) {
                    return null;
                }
            }
        }
        return null;
    }
    getRequestId(metadata) {
        if (metadata.get(REQUEST_ID_KEY)) {
            return metadata.get(REQUEST_ID_KEY)[0];
        }
        return "";
    }
    handleGrpcFailure(status) {
        const { code, metadata } = status;
        if (RETRY_STATUS_CODES.includes(code)) {
            /* Throw error if code one of INTERNAL or RESOURCE_EXHAUSTED */
            return new Error(status.details);
        }
        const gaFailure = this.getGoogleAdsFailure(metadata);
        if (!gaFailure) {
            /* Throw error with status details if not a Google Ads API error */
            return new Error(status.details);
        }
        const requestId = this.getRequestId(metadata);
        let error;
        const errorsList = gaFailure.getErrorsList();
        if (errorsList && errorsList.length > 0) {
            const firstError = errorsList[0];
            const firstErrorObj = firstError.toObject();
            let path = "";
            if (firstErrorObj.hasOwnProperty("location")) {
                path = utils_1.getErrorLocationPath(firstErrorObj.location);
            }
            return new ClientError(firstErrorObj.message, requestId, gaFailure, path);
        }
        try {
            /* Try to parse the error */
            const errorPieces = gaFailure.toString().split(",");
            const errorMessage = errorPieces[errorPieces.length - 1];
            error = new ClientError(errorMessage, requestId, gaFailure);
        }
        catch (err) {
            /* Use the original error message if parsing fails */
            error = new ClientError(status.details, requestId, gaFailure);
        }
        return error;
    }
}
exports.ExceptionInterceptor = ExceptionInterceptor;
class ResponseParsingInterceptor {
    constructor() {
        this.requestInterceptor = this.buildRequester();
    }
    intercept(options, nextCall) {
        return new grpc_1.default.InterceptingCall(nextCall(options), this.requestInterceptor);
    }
    buildRequester() {
        return new grpc_1.default.RequesterBuilder()
            .withStart((metadata, _listener, next) => {
            const newListener = this.buildListener();
            next(metadata, newListener);
        })
            .build();
    }
    buildListener() {
        return new grpc_1.default.ListenerBuilder()
            .withOnReceiveStatus((status, next) => {
            next(status);
        })
            .withOnReceiveMessage((message, next) => {
            if (message && message.toObject) {
                let results = message.toObject();
                if (results.partialFailureError && results.partialFailureError.detailsList) {
                    const errors = [];
                    const failure = types_1.GoogleAdsFailure.deserializeBinary(results
                        .partialFailureError.detailsList[0].value);
                    const errorsList = failure.getErrorsList();
                    for (const error of errorsList) {
                        errors.push(error.toObject());
                    }
                    results.partialFailureError.errors = utils_1.formatCallResults(errors, undefined);
                }
                const parsedResults = utils_1.formatCallResults(
                /*
                  When retrieving a single entity via a service (e.g. CampaignService), the API
                  returns a single object, instead of an array
                */
                results.resultsList ? results.resultsList : [results], results.fieldMask);
                if (parsedResults && results.resultsList) {
                    results.resultsList = parsedResults;
                }
                /* Return an object if it's a single entity via a service */
                if (parsedResults && !results.resultsList) {
                    results = parsedResults[0];
                }
                next(results);
            }
            else {
                next(message);
            }
        })
            .build();
    }
}
exports.ResponseParsingInterceptor = ResponseParsingInterceptor;
class ClientError extends Error {
    constructor(message, requestId, failure, path) {
        super(message);
        this.message = message;
        this.location = path || "";
        this.request_id = requestId;
        this.failure = failure;
        if (failure.getErrorsList() && failure.getErrorsList().length > 0) {
            const errorCode = failure.getErrorsList()[0].getErrorCode();
            this.error_code = errorCode.toObject();
        }
        else {
            this.error_code = {};
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2ludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0RBQXdCO0FBR3hCLG1DQUFzRTtBQUN0RSxtQ0FBa0U7QUFFbEUsTUFBTSxXQUFXLEdBQUcscURBQXFELENBQUM7QUFDMUUsTUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDO0FBQ3BDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxjQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxjQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFLbEYsTUFBYSxtQkFBbUI7SUFPOUIsWUFDRSxlQUF1QixFQUN2QixpQkFBcUMsRUFDckMsWUFBZ0MsRUFDaEMsSUFBc0I7UUFFdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVNLFNBQVMsQ0FBQyxPQUF5QixFQUFFLFFBQWtCO1FBQzVELE9BQU8sSUFBSSxjQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFTyxjQUFjO1FBQ3BCLE9BQU8sSUFBSSxjQUFJLENBQUMsZ0JBQWdCLEVBQUU7YUFDL0IsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUF1QixFQUFFLFFBQXVCLEVBQUUsSUFBYyxFQUFFLEVBQUU7WUFDcEYsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMs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