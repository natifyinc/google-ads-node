var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")();goog.exportSymbol("proto.google.type.LatLng",null,global),proto.google.type.LatLng=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.type.LatLng,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.type.LatLng.displayName="proto.google.type.LatLng"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.type.LatLng.prototype.toObject=function(opt_includeInstance){return proto.google.type.LatLng.toObject(opt_includeInstance,this)},proto.google.type.LatLng.toObject=function(includeInstance,msg){var obj={latitude:+jspb.Message.getFieldWithDefault(msg,1,0),longitude:+jspb.Message.getFieldWithDefault(msg,2,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.type.LatLng.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.type.LatLng;return proto.google.type.LatLng.deserializeBinaryFromReader(msg,reader)},proto.google.type.LatLng.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readDouble();msg.setLatitude(value);break;case 2:value=reader.readDouble();msg.setLongitude(value);break;default:reader.skipField()}}return msg},proto.google.type.LatLng.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.type.LatLng.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.type.LatLng.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getLatitude())&&writer.writeDouble(1,f),0!==(f=message.getLongitude())&&writer.writeDouble(2,f)},proto.google.type.LatLng.prototype.getLatitude=function(){return+jspb.Message.getFieldWithDefault(this,1,0)},proto.google.type.LatLng.prototype.setLatitude=function(value){jspb.Message.setProto3FloatField(this,1,value)},proto.google.type.LatLng.prototype.getLongitude=function(){return+jspb.Message.getFieldWithDefault(this,2,0)},proto.google.type.LatLng.prototype.setLongitude=function(value){jspb.Message.setProto3FloatField(this,2,value)},goog.object.extend(exports,proto.google.type);