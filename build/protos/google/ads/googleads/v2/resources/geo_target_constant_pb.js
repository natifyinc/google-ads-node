var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v2_enums_geo_target_constant_status_pb=require("../../../../../google/ads/googleads/v2/enums/geo_target_constant_status_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.resources.GeoTargetConstant",null,global),proto.google.ads.googleads.v2.resources.GeoTargetConstant=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.resources.GeoTargetConstant,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.GeoTargetConstant.displayName="proto.google.ads.googleads.v2.resources.GeoTargetConstant"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.GeoTargetConstant.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),countryCode:(f=msg.getCountryCode())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),targetType:(f=msg.getTargetType())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),status:jspb.Message.getFieldWithDefault(msg,7,0),canonicalName:(f=msg.getCanonicalName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.GeoTargetConstant.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.GeoTargetConstant;return proto.google.ads.googleads.v2.resources.GeoTargetConstant.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 3:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 5:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setCountryCode(value);break;case 6:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setTargetType(value);break;case 7:value=reader.readEnum();msg.setStatus(value);break;case 8:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setCanonicalName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.GeoTargetConstant.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.GeoTargetConstant.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getId())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getName())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getCountryCode())&&writer.writeMessage(5,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getTargetType())&&writer.writeMessage(6,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(f=message.getStatus())&&writer.writeEnum(7,f),null!=(f=message.getCanonicalName())&&writer.writeMessage(8,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,3)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.setId=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.hasId=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.setName=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.hasName=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.getCountryCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.setCountryCode=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.clearCountryCode=function(){this.setCountryCode(void 0)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.hasCountryCode=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.getTargetType=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,6)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.setTargetType=function(value){jspb.Message.setWrapperField(this,6,value)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.clearTargetType=function(){this.setTargetType(void 0)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.hasTargetType=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,7,0)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.setStatus=function(value){jspb.Message.setProto3EnumField(this,7,value)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.getCanonicalName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,8)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.setCanonicalName=function(value){jspb.Message.setWrapperField(this,8,value)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.clearCanonicalName=function(){this.setCanonicalName(void 0)},proto.google.ads.googleads.v2.resources.GeoTargetConstant.prototype.hasCanonicalName=function(){return null!=jspb.Message.getField(this,8)},goog.object.extend(exports,proto.google.ads.googleads.v2.resources);