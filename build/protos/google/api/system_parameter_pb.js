var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")();goog.exportSymbol("proto.google.api.SystemParameter",null,global),goog.exportSymbol("proto.google.api.SystemParameterRule",null,global),goog.exportSymbol("proto.google.api.SystemParameters",null,global),proto.google.api.SystemParameters=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.api.SystemParameters.repeatedFields_,null)},goog.inherits(proto.google.api.SystemParameters,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.SystemParameters.displayName="proto.google.api.SystemParameters"),proto.google.api.SystemParameters.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.SystemParameters.prototype.toObject=function(opt_includeInstance){return proto.google.api.SystemParameters.toObject(opt_includeInstance,this)},proto.google.api.SystemParameters.toObject=function(includeInstance,msg){var obj={rulesList:jspb.Message.toObjectList(msg.getRulesList(),proto.google.api.SystemParameterRule.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.SystemParameters.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.SystemParameters;return proto.google.api.SystemParameters.deserializeBinaryFromReader(msg,reader)},proto.google.api.SystemParameters.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new proto.google.api.SystemParameterRule;reader.readMessage(value,proto.google.api.SystemParameterRule.deserializeBinaryFromReader),msg.addRules(value);break;default:reader.skipField()}}return msg},proto.google.api.SystemParameters.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.SystemParameters.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.SystemParameters.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getRulesList()).length&&writer.writeRepeatedMessage(1,f,proto.google.api.SystemParameterRule.serializeBinaryToWriter)},proto.google.api.SystemParameters.prototype.getRulesList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.api.SystemParameterRule,1)},proto.google.api.SystemParameters.prototype.setRulesList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.api.SystemParameters.prototype.addRules=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.api.SystemParameterRule,opt_index)},proto.google.api.SystemParameters.prototype.clearRulesList=function(){this.setRulesList([])},proto.google.api.SystemParameterRule=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.api.SystemParameterRule.repeatedFields_,null)},goog.inherits(proto.google.api.SystemParameterRule,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.SystemParameterRule.displayName="proto.google.api.SystemParameterRule"),proto.google.api.SystemParameterRule.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.SystemParameterRule.prototype.toObject=function(opt_includeInstance){return proto.google.api.SystemParameterRule.toObject(opt_includeInstance,this)},proto.google.api.SystemParameterRule.toObject=function(includeInstance,msg){var obj={selector:jspb.Message.getFieldWithDefault(msg,1,""),parametersList:jspb.Message.toObjectList(msg.getParametersList(),proto.google.api.SystemParameter.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.SystemParameterRule.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.SystemParameterRule;return proto.google.api.SystemParameterRule.deserializeBinaryFromReader(msg,reader)},proto.google.api.SystemParameterRule.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setSelector(value);break;case 2:value=new proto.google.api.SystemParameter;reader.readMessage(value,proto.google.api.SystemParameter.deserializeBinaryFromReader),msg.addParameters(value);break;default:reader.skipField()}}return msg},proto.google.api.SystemParameterRule.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.SystemParameterRule.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.SystemParameterRule.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getSelector()).length&&writer.writeString(1,f),0<(f=message.getParametersList()).length&&writer.writeRepeatedMessage(2,f,proto.google.api.SystemParameter.serializeBinaryToWriter)},proto.google.api.SystemParameterRule.prototype.getSelector=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.SystemParameterRule.prototype.setSelector=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.api.SystemParameterRule.prototype.getParametersList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.api.SystemParameter,2)},proto.google.api.SystemParameterRule.prototype.setParametersList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.api.SystemParameterRule.prototype.addParameters=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.api.SystemParameter,opt_index)},proto.google.api.SystemParameterRule.prototype.clearParametersList=function(){this.setParametersList([])},proto.google.api.SystemParameter=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.api.SystemParameter,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.SystemParameter.displayName="proto.google.api.SystemParameter"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.SystemParameter.prototype.toObject=function(opt_includeInstance){return proto.google.api.SystemParameter.toObject(opt_includeInstance,this)},proto.google.api.SystemParameter.toObject=function(includeInstance,msg){var obj={name:jspb.Message.getFieldWithDefault(msg,1,""),httpHeader:jspb.Message.getFieldWithDefault(msg,2,""),urlQueryParameter:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.SystemParameter.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.SystemParameter;return proto.google.api.SystemParameter.deserializeBinaryFromReader(msg,reader)},proto.google.api.SystemParameter.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setName(value);break;case 2:value=reader.readString();msg.setHttpHeader(value);break;case 3:value=reader.readString();msg.setUrlQueryParameter(value);break;default:reader.skipField()}}return msg},proto.google.api.SystemParameter.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.SystemParameter.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.SystemParameter.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getName()).length&&writer.writeString(1,f),0<(f=message.getHttpHeader()).length&&writer.writeString(2,f),0<(f=message.getUrlQueryParameter()).length&&writer.writeString(3,f)},proto.google.api.SystemParameter.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.SystemParameter.prototype.setName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.api.SystemParameter.prototype.getHttpHeader=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.api.SystemParameter.prototype.setHttpHeader=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.api.SystemParameter.prototype.getUrlQueryParameter=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.api.SystemParameter.prototype.setUrlQueryParameter=function(value){jspb.Message.setProto3StringField(this,3,value)},goog.object.extend(exports,proto.google.api);