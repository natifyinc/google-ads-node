var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum.UserListClosingReason",null,global),proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum.displayName="proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum;return proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.UserListClosingReasonEnum.UserListClosingReason={UNSPECIFIED:0,UNKNOWN:1,UNUSED:2},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);