var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v2_enums_billing_setup_status_pb=require("../../../../../google/ads/googleads/v2/enums/billing_setup_status_pb.js"),google_ads_googleads_v2_enums_time_type_pb=require("../../../../../google/ads/googleads/v2/enums/time_type_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.resources.BillingSetup",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo",null,global),proto.google.ads.googleads.v2.resources.BillingSetup=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v2.resources.BillingSetup.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v2.resources.BillingSetup,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.BillingSetup.displayName="proto.google.ads.googleads.v2.resources.BillingSetup"),proto.google.ads.googleads.v2.resources.BillingSetup.oneofGroups_=[[9,10],[13,14]],proto.google.ads.googleads.v2.resources.BillingSetup.StartTimeCase={START_TIME_NOT_SET:0,START_DATE_TIME:9,START_TIME_TYPE:10},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.getStartTimeCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v2.resources.BillingSetup.oneofGroups_[0])},proto.google.ads.googleads.v2.resources.BillingSetup.EndTimeCase={END_TIME_NOT_SET:0,END_DATE_TIME:13,END_TIME_TYPE:14},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.getEndTimeCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v2.resources.BillingSetup.oneofGroups_[1])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.BillingSetup.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.BillingSetup.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.BillingSetup.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),status:jspb.Message.getFieldWithDefault(msg,3,0),paymentsAccount:(f=msg.getPaymentsAccount())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),paymentsAccountInfo:(f=msg.getPaymentsAccountInfo())&&proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.toObject(includeInstance,f),startDateTime:(f=msg.getStartDateTime())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),startTimeType:jspb.Message.getFieldWithDefault(msg,10,0),endDateTime:(f=msg.getEndDateTime())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),endTimeType:jspb.Message.getFieldWithDefault(msg,14,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.BillingSetup.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.BillingSetup;return proto.google.ads.googleads.v2.resources.BillingSetup.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.BillingSetup.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 3:value=reader.readEnum();msg.setStatus(value);break;case 11:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setPaymentsAccount(value);break;case 12:value=new proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo;reader.readMessage(value,proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.deserializeBinaryFromReader),msg.setPaymentsAccountInfo(value);break;case 9:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setStartDateTime(value);break;case 10:value=reader.readEnum();msg.setStartTimeType(value);break;case 13:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setEndDateTime(value);break;case 14:value=reader.readEnum();msg.setEndTimeType(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.BillingSetup.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.BillingSetup.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getId())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(f=message.getStatus())&&writer.writeEnum(3,f),null!=(f=message.getPaymentsAccount())&&writer.writeMessage(11,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getPaymentsAccountInfo())&&writer.writeMessage(12,f,proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.serializeBinaryToWriter),null!=(f=message.getStartDateTime())&&writer.writeMessage(9,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,10))&&writer.writeEnum(10,f),null!=(f=message.getEndDateTime())&&writer.writeMessage(13,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,14))&&writer.writeEnum(14,f)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.displayName="proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.toObject=function(includeInstance,msg){var f,obj={paymentsAccountId:(f=msg.getPaymentsAccountId())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),paymentsAccountName:(f=msg.getPaymentsAccountName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),paymentsProfileId:(f=msg.getPaymentsProfileId())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),paymentsProfileName:(f=msg.getPaymentsProfileName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),secondaryPaymentsProfileId:(f=msg.getSecondaryPaymentsProfileId())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo;return proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setPaymentsAccountId(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setPaymentsAccountName(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setPaymentsProfileId(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setPaymentsProfileName(value);break;case 5:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setSecondaryPaymentsProfileId(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getPaymentsAccountId())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getPaymentsAccountName())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getPaymentsProfileId())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getPaymentsProfileName())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getSecondaryPaymentsProfileId())&&writer.writeMessage(5,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.getPaymentsAccountId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.setPaymentsAccountId=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.clearPaymentsAccountId=function(){this.setPaymentsAccountId(void 0)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.hasPaymentsAccountId=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.getPaymentsAccountName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.setPaymentsAccountName=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.clearPaymentsAccountName=function(){this.setPaymentsAccountName(void 0)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.hasPaymentsAccountName=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.getPaymentsProfileId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.setPaymentsProfileId=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.clearPaymentsProfileId=function(){this.setPaymentsProfileId(void 0)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.hasPaymentsProfileId=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.getPaymentsProfileName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.setPaymentsProfileName=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.clearPaymentsProfileName=function(){this.setPaymentsProfileName(void 0)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.hasPaymentsProfileName=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.getSecondaryPaymentsProfileId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.setSecondaryPaymentsProfileId=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.clearSecondaryPaymentsProfileId=function(){this.setSecondaryPaymentsProfileId(void 0)},proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo.prototype.hasSecondaryPaymentsProfileId=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.setId=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.setStatus=function(value){jspb.Message.setProto3EnumField(this,3,value)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.getPaymentsAccount=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,11)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.setPaymentsAccount=function(value){jspb.Message.setWrapperField(this,11,value)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.clearPaymentsAccount=function(){this.setPaymentsAccount(void 0)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.hasPaymentsAccount=function(){return null!=jspb.Message.getField(this,11)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.getPaymentsAccountInfo=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v2.resources.BillingSetup.PaymentsAccountInfo,12)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.setPaymentsAccountInfo=function(value){jspb.Message.setWrapperField(this,12,value)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.clearPaymentsAccountInfo=function(){this.setPaymentsAccountInfo(void 0)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.hasPaymentsAccountInfo=function(){return null!=jspb.Message.getField(this,12)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.getStartDateTime=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,9)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.setStartDateTime=function(value){jspb.Message.setOneofWrapperField(this,9,proto.google.ads.googleads.v2.resources.BillingSetup.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.clearStartDateTime=function(){this.setStartDateTime(void 0)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.hasStartDateTime=function(){return null!=jspb.Message.getField(this,9)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.getStartTimeType=function(){return jspb.Message.getFieldWithDefault(this,10,0)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.setStartTimeType=function(value){jspb.Message.setOneofField(this,10,proto.google.ads.googleads.v2.resources.BillingSetup.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.clearStartTimeType=function(){jspb.Message.setOneofField(this,10,proto.google.ads.googleads.v2.resources.BillingSetup.oneofGroups_[0],void 0)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.hasStartTimeType=function(){return null!=jspb.Message.getField(this,10)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.getEndDateTime=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,13)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.setEndDateTime=function(value){jspb.Message.setOneofWrapperField(this,13,proto.google.ads.googleads.v2.resources.BillingSetup.oneofGroups_[1],value)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.clearEndDateTime=function(){this.setEndDateTime(void 0)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.hasEndDateTime=function(){return null!=jspb.Message.getField(this,13)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.getEndTimeType=function(){return jspb.Message.getFieldWithDefault(this,14,0)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.setEndTimeType=function(value){jspb.Message.setOneofField(this,14,proto.google.ads.googleads.v2.resources.BillingSetup.oneofGroups_[1],value)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.clearEndTimeType=function(){jspb.Message.setOneofField(this,14,proto.google.ads.googleads.v2.resources.BillingSetup.oneofGroups_[1],void 0)},proto.google.ads.googleads.v2.resources.BillingSetup.prototype.hasEndTimeType=function(){return null!=jspb.Message.getField(this,14)},goog.object.extend(exports,proto.google.ads.googleads.v2.resources);