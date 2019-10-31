import * as protobufHelpers from "google-protobuf/google/protobuf/field_mask_pb";
import { Client } from "grpc";
export declare function promisifyServiceClient(client: Client): void;
interface FieldMask {
    pathsList: string[];
}
export declare function formatCallResults(resultsList: any[], fieldMask: FieldMask | undefined): any[];
export declare function convertToProtoFormat(data: any, type: any, resource_name: string, nested_path?: string): any;
export declare function getFieldMask(data: any): protobufHelpers.FieldMask;
export declare function getErrorLocationPath(location: any): string;
export {};
