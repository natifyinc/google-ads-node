var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")();goog.exportSymbol("proto.google.api.CustomHttpPattern",null,global),goog.exportSymbol("proto.google.api.Http",null,global),goog.exportSymbol("proto.google.api.HttpRule",null,global),proto.google.api.Http=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.api.Http.repeatedFields_,null)},goog.inherits(proto.google.api.Http,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.Http.displayName="proto.google.api.Http"),proto.google.api.Http.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.Http.prototype.toObject=function(opt_includeInstance){return proto.google.api.Http.toObject(opt_includeInstance,this)},proto.google.api.Http.toObject=function(includeInstance,msg){var obj={rulesList:jspb.Message.toObjectList(msg.getRulesList(),proto.google.api.HttpRule.toObject,includeInstance),fullyDecodeReservedExpansion:jspb.Message.getFieldWithDefault(msg,2,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.Http.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.Http;return proto.google.api.Http.deserializeBinaryFromReader(msg,reader)},proto.google.api.Http.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new proto.google.api.HttpRule;reader.readMessage(value,proto.google.api.HttpRule.deserializeBinaryFromReader),msg.addRules(value);break;case 2:value=reader.readBool();msg.setFullyDecodeReservedExpansion(value);break;default:reader.skipField()}}return msg},proto.google.api.Http.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.Http.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.Http.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getRulesList()).length&&writer.writeRepeatedMessage(1,f,proto.google.api.HttpRule.serializeBinaryToWriter),(f=message.getFullyDecodeReservedExpansion())&&writer.writeBool(2,f)},proto.google.api.Http.prototype.getRulesList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.api.HttpRule,1)},proto.google.api.Http.prototype.setRulesList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.api.Http.prototype.addRules=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.api.HttpRule,opt_index)},proto.google.api.Http.prototype.clearRulesList=function(){this.setRulesList([])},proto.google.api.Http.prototype.getFullyDecodeReservedExpansion=function(){return jspb.Message.getFieldWithDefault(this,2,!1)},proto.google.api.Http.prototype.setFullyDecodeReservedExpansion=function(value){jspb.Message.setProto3BooleanField(this,2,value)},proto.google.api.HttpRule=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.api.HttpRule.repeatedFields_,proto.google.api.HttpRule.oneofGroups_)},goog.inherits(proto.google.api.HttpRule,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.HttpRule.displayName="proto.google.api.HttpRule"),proto.google.api.HttpRule.repeatedFields_=[11],proto.google.api.HttpRule.oneofGroups_=[[2,3,4,5,6,8]],proto.google.api.HttpRule.PatternCase={PATTERN_NOT_SET:0,GET:2,PUT:3,POST:4,DELETE:5,PATCH:6,CUSTOM:8},proto.google.api.HttpRule.prototype.getPatternCase=function(){return jspb.Message.computeOneofCase(this,proto.google.api.HttpRule.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.HttpRule.prototype.toObject=function(opt_includeInstance){return proto.google.api.HttpRule.toObject(opt_includeInstance,this)},proto.google.api.HttpRule.toObject=function(includeInstance,msg){var f,obj={selector:jspb.Message.getFieldWithDefault(msg,1,""),get:jspb.Message.getFieldWithDefault(msg,2,""),put:jspb.Message.getFieldWithDefault(msg,3,""),post:jspb.Message.getFieldWithDefault(msg,4,""),pb_delete:jspb.Message.getFieldWithDefault(msg,5,""),patch:jspb.Message.getFieldWithDefault(msg,6,""),custom:(f=msg.getCustom())&&proto.google.api.CustomHttpPattern.toObject(includeInstance,f),body:jspb.Message.getFieldWithDefault(msg,7,""),responseBody:jspb.Message.getFieldWithDefault(msg,12,""),additionalBindingsList:jspb.Message.toObjectList(msg.getAdditionalBindingsList(),proto.google.api.HttpRule.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.HttpRule.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.HttpRule;return proto.google.api.HttpRule.deserializeBinaryFromReader(msg,reader)},proto.google.api.HttpRule.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setSelector(value);break;case 2:value=reader.readString();msg.setGet(value);break;case 3:value=reader.readString();msg.setPut(value);break;case 4:value=reader.readString();msg.setPost(value);break;case 5:value=reader.readString();msg.setDelete(value);break;case 6:value=reader.readString();msg.setPatch(value);break;case 8:value=new proto.google.api.CustomHttpPattern;reader.readMessage(value,proto.google.api.CustomHttpPattern.deserializeBinaryFromReader),msg.setCustom(value);break;case 7:value=reader.readString();msg.setBody(value);break;case 12:value=reader.readString();msg.setResponseBody(value);break;case 11:value=new proto.google.api.HttpRule;reader.readMessage(value,proto.google.api.HttpRule.deserializeBinaryFromReader),msg.addAdditionalBindings(value);break;default:reader.skipField()}}return msg},proto.google.api.HttpRule.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.HttpRule.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.HttpRule.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getSelector()).length&&writer.writeString(1,f),null!=(f=jspb.Message.getField(message,2))&&writer.writeString(2,f),null!=(f=jspb.Message.getField(message,3))&&writer.writeString(3,f),null!=(f=jspb.Message.getField(message,4))&&writer.writeString(4,f),null!=(f=jspb.Message.getField(message,5))&&writer.writeString(5,f),null!=(f=jspb.Message.getField(message,6))&&writer.writeString(6,f),null!=(f=message.getCustom())&&writer.writeMessage(8,f,proto.google.api.CustomHttpPattern.serializeBinaryToWriter),0<(f=message.getBody()).length&&writer.writeString(7,f),0<(f=message.getResponseBody()).length&&writer.writeString(12,f),0<(f=message.getAdditionalBindingsList()).length&&writer.writeRepeatedMessage(11,f,proto.google.api.HttpRule.serializeBinaryToWriter)},proto.google.api.HttpRule.prototype.getSelector=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.HttpRule.prototype.setSelector=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.api.HttpRule.prototype.getGet=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.api.HttpRule.prototype.setGet=function(value){jspb.Message.setOneofField(this,2,proto.google.api.HttpRule.oneofGroups_[0],value)},proto.google.api.HttpRule.prototype.clearGet=function(){jspb.Message.setOneofField(this,2,proto.google.api.HttpRule.oneofGroups_[0],void 0)},proto.google.api.HttpRule.prototype.hasGet=function(){return null!=jspb.Message.getField(this,2)},proto.google.api.HttpRule.prototype.getPut=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.api.HttpRule.prototype.setPut=function(value){jspb.Message.setOneofField(this,3,proto.google.api.HttpRule.oneofGroups_[0],value)},proto.google.api.HttpRule.prototype.clearPut=function(){jspb.Message.setOneofField(this,3,proto.google.api.HttpRule.oneofGroups_[0],void 0)},proto.google.api.HttpRule.prototype.hasPut=function(){return null!=jspb.Message.getField(this,3)},proto.google.api.HttpRule.prototype.getPost=function(){return jspb.Message.getFieldWithDefault(this,4,"")},proto.google.api.HttpRule.prototype.setPost=function(value){jspb.Message.setOneofField(this,4,proto.google.api.HttpRule.oneofGroups_[0],value)},proto.google.api.HttpRule.prototype.clearPost=function(){jspb.Message.setOneofField(this,4,proto.google.api.HttpRule.oneofGroups_[0],void 0)},proto.google.api.HttpRule.prototype.hasPost=function(){return null!=jspb.Message.getField(this,4)},proto.google.api.HttpRule.prototype.getDelete=function(){return jspb.Message.getFieldWithDefault(this,5,"")},proto.google.api.HttpRule.prototype.setDelete=function(value){jspb.Message.setOneofField(this,5,proto.google.api.HttpRule.oneofGroups_[0],value)},proto.google.api.HttpRule.prototype.clearDelete=function(){jspb.Message.setOneofField(this,5,proto.google.api.HttpRule.oneofGroups_[0],void 0)},proto.google.api.HttpRule.prototype.hasDelete=function(){return null!=jspb.Message.getField(this,5)},proto.google.api.HttpRule.prototype.getPatch=function(){return jspb.Message.getFieldWithDefault(this,6,"")},proto.google.api.HttpRule.prototype.setPatch=function(value){jspb.Message.setOneofField(this,6,proto.google.api.HttpRule.oneofGroups_[0],value)},proto.google.api.HttpRule.prototype.clearPatch=function(){jspb.Message.setOneofField(this,6,proto.google.api.HttpRule.oneofGroups_[0],void 0)},proto.google.api.HttpRule.prototype.hasPatch=function(){return null!=jspb.Message.getField(this,6)},proto.google.api.HttpRule.prototype.getCustom=function(){return jspb.Message.getWrapperField(this,proto.google.api.CustomHttpPattern,8)},proto.google.api.HttpRule.prototype.setCustom=function(value){jspb.Message.setOneofWrapperField(this,8,proto.google.api.HttpRule.oneofGroups_[0],value)},proto.google.api.HttpRule.prototype.clearCustom=function(){this.setCustom(void 0)},proto.google.api.HttpRule.prototype.hasCustom=function(){return null!=jspb.Message.getField(this,8)},proto.google.api.HttpRule.prototype.getBody=function(){return jspb.Message.getFieldWithDefault(this,7,"")},proto.google.api.HttpRule.prototype.setBody=function(value){jspb.Message.setProto3StringField(this,7,value)},proto.google.api.HttpRule.prototype.getResponseBody=function(){return jspb.Message.getFieldWithDefault(this,12,"")},proto.google.api.HttpRule.prototype.setResponseBody=function(value){jspb.Message.setProto3StringField(this,12,value)},proto.google.api.HttpRule.prototype.getAdditionalBindingsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.api.HttpRule,11)},proto.google.api.HttpRule.prototype.setAdditionalBindingsList=function(value){jspb.Message.setRepeatedWrapperField(this,11,value)},proto.google.api.HttpRule.prototype.addAdditionalBindings=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,11,opt_value,proto.google.api.HttpRule,opt_index)},proto.google.api.HttpRule.prototype.clearAdditionalBindingsList=function(){this.setAdditionalBindingsList([])},proto.google.api.CustomHttpPattern=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.api.CustomHttpPattern,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.CustomHttpPattern.displayName="proto.google.api.CustomHttpPattern"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.CustomHttpPattern.prototype.toObject=function(opt_includeInstance){return proto.google.api.CustomHttpPattern.toObject(opt_includeInstance,this)},proto.google.api.CustomHttpPattern.toObject=function(includeInstance,msg){var obj={kind:jspb.Message.getFieldWithDefault(msg,1,""),path:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.CustomHttpPattern.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.CustomHttpPattern;return proto.google.api.CustomHttpPattern.deserializeBinaryFromReader(msg,reader)},proto.google.api.CustomHttpPattern.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setKind(value);break;case 2:value=reader.readString();msg.setPath(value);break;default:reader.skipField()}}return msg},proto.google.api.CustomHttpPattern.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.CustomHttpPattern.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.CustomHttpPattern.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getKind()).length&&writer.writeString(1,f),0<(f=message.getPath()).length&&writer.writeString(2,f)},proto.google.api.CustomHttpPattern.prototype.getKind=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.CustomHttpPattern.prototype.setKind=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.api.CustomHttpPattern.prototype.getPath=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.api.CustomHttpPattern.prototype.setPath=function(value){jspb.Message.setProto3StringField(this,2,value)},goog.object.extend(exports,proto.google.api);