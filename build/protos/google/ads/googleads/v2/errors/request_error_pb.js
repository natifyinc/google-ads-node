var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.RequestErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.RequestErrorEnum.RequestError",null,global),proto.google.ads.googleads.v2.errors.RequestErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.RequestErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.RequestErrorEnum.displayName="proto.google.ads.googleads.v2.errors.RequestErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.RequestErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.RequestErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.RequestErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.RequestErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.RequestErrorEnum;return proto.google.ads.googleads.v2.errors.RequestErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.RequestErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.RequestErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.RequestErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.RequestErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.RequestErrorEnum.RequestError={UNSPECIFIED:0,UNKNOWN:1,RESOURCE_NAME_MISSING:3,RESOURCE_NAME_MALFORMED:4,BAD_RESOURCE_ID:17,INVALID_CUSTOMER_ID:16,OPERATION_REQUIRED:5,RESOURCE_NOT_FOUND:6,INVALID_PAGE_TOKEN:7,EXPIRED_PAGE_TOKEN:8,INVALID_PAGE_SIZE:22,REQUIRED_FIELD_MISSING:9,IMMUTABLE_FIELD:11,TOO_MANY_MUTATE_OPERATIONS:13,CANNOT_BE_EXECUTED_BY_MANAGER_ACCOUNT:14,CANNOT_MODIFY_FOREIGN_FIELD:15,INVALID_ENUM_VALUE:18,DEVELOPER_TOKEN_PARAMETER_MISSING:19,LOGIN_CUSTOMER_ID_PARAMETER_MISSING:20,VALIDATE_ONLY_REQUEST_HAS_PAGE_TOKEN:21,CANNOT_RETURN_SUMMARY_ROW_FOR_REQUEST_WITHOUT_METRICS:29,CANNOT_RETURN_SUMMARY_ROW_FOR_VALIDATE_ONLY_REQUESTS:30,INCONSISTENT_RETURN_SUMMARY_ROW_VALUE:31},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);