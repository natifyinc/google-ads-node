var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_protobuf_any_pb=require("google-protobuf/google/protobuf/any_pb.js"),google_protobuf_timestamp_pb=require("google-protobuf/google/protobuf/timestamp_pb.js");goog.exportSymbol("proto.google.api.Distribution",null,global),goog.exportSymbol("proto.google.api.Distribution.BucketOptions",null,global),goog.exportSymbol("proto.google.api.Distribution.BucketOptions.Explicit",null,global),goog.exportSymbol("proto.google.api.Distribution.BucketOptions.Exponential",null,global),goog.exportSymbol("proto.google.api.Distribution.BucketOptions.Linear",null,global),goog.exportSymbol("proto.google.api.Distribution.Exemplar",null,global),goog.exportSymbol("proto.google.api.Distribution.Range",null,global),proto.google.api.Distribution=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.api.Distribution.repeatedFields_,null)},goog.inherits(proto.google.api.Distribution,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.Distribution.displayName="proto.google.api.Distribution"),proto.google.api.Distribution.repeatedFields_=[7,10],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.Distribution.prototype.toObject=function(opt_includeInstance){return proto.google.api.Distribution.toObject(opt_includeInstance,this)},proto.google.api.Distribution.toObject=function(includeInstance,msg){var f,obj={count:jspb.Message.getFieldWithDefault(msg,1,0),mean:+jspb.Message.getFieldWithDefault(msg,2,0),sumOfSquaredDeviation:+jspb.Message.getFieldWithDefault(msg,3,0),range:(f=msg.getRange())&&proto.google.api.Distribution.Range.toObject(includeInstance,f),bucketOptions:(f=msg.getBucketOptions())&&proto.google.api.Distribution.BucketOptions.toObject(includeInstance,f),bucketCountsList:jspb.Message.getRepeatedField(msg,7),exemplarsList:jspb.Message.toObjectList(msg.getExemplarsList(),proto.google.api.Distribution.Exemplar.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.Distribution.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.Distribution;return proto.google.api.Distribution.deserializeBinaryFromReader(msg,reader)},proto.google.api.Distribution.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readInt64();msg.setCount(value);break;case 2:value=reader.readDouble();msg.setMean(value);break;case 3:value=reader.readDouble();msg.setSumOfSquaredDeviation(value);break;case 4:value=new proto.google.api.Distribution.Range;reader.readMessage(value,proto.google.api.Distribution.Range.deserializeBinaryFromReader),msg.setRange(value);break;case 6:value=new proto.google.api.Distribution.BucketOptions;reader.readMessage(value,proto.google.api.Distribution.BucketOptions.deserializeBinaryFromReader),msg.setBucketOptions(value);break;case 7:value=reader.readPackedInt64();msg.setBucketCountsList(value);break;case 10:value=new proto.google.api.Distribution.Exemplar;reader.readMessage(value,proto.google.api.Distribution.Exemplar.deserializeBinaryFromReader),msg.addExemplars(value);break;default:reader.skipField()}}return msg},proto.google.api.Distribution.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.Distribution.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.Distribution.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getCount())&&writer.writeInt64(1,f),0!==(f=message.getMean())&&writer.writeDouble(2,f),0!==(f=message.getSumOfSquaredDeviation())&&writer.writeDouble(3,f),null!=(f=message.getRange())&&writer.writeMessage(4,f,proto.google.api.Distribution.Range.serializeBinaryToWriter),null!=(f=message.getBucketOptions())&&writer.writeMessage(6,f,proto.google.api.Distribution.BucketOptions.serializeBinaryToWriter),0<(f=message.getBucketCountsList()).length&&writer.writePackedInt64(7,f),0<(f=message.getExemplarsList()).length&&writer.writeRepeatedMessage(10,f,proto.google.api.Distribution.Exemplar.serializeBinaryToWriter)},proto.google.api.Distribution.Range=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.api.Distribution.Range,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.Distribution.Range.displayName="proto.google.api.Distribution.Range"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.Distribution.Range.prototype.toObject=function(opt_includeInstance){return proto.google.api.Distribution.Range.toObject(opt_includeInstance,this)},proto.google.api.Distribution.Range.toObject=function(includeInstance,msg){var obj={min:+jspb.Message.getFieldWithDefault(msg,1,0),max:+jspb.Message.getFieldWithDefault(msg,2,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.Distribution.Range.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.Distribution.Range;return proto.google.api.Distribution.Range.deserializeBinaryFromReader(msg,reader)},proto.google.api.Distribution.Range.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readDouble();msg.setMin(value);break;case 2:value=reader.readDouble();msg.setMax(value);break;default:reader.skipField()}}return msg},proto.google.api.Distribution.Range.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.Distribution.Range.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.Distribution.Range.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getMin())&&writer.writeDouble(1,f),0!==(f=message.getMax())&&writer.writeDouble(2,f)},proto.google.api.Distribution.Range.prototype.getMin=function(){return+jspb.Message.getFieldWithDefault(this,1,0)},proto.google.api.Distribution.Range.prototype.setMin=function(value){jspb.Message.setProto3FloatField(this,1,value)},proto.google.api.Distribution.Range.prototype.getMax=function(){return+jspb.Message.getFieldWithDefault(this,2,0)},proto.google.api.Distribution.Range.prototype.setMax=function(value){jspb.Message.setProto3FloatField(this,2,value)},proto.google.api.Distribution.BucketOptions=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.api.Distribution.BucketOptions.oneofGroups_)},goog.inherits(proto.google.api.Distribution.BucketOptions,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.Distribution.BucketOptions.displayName="proto.google.api.Distribution.BucketOptions"),proto.google.api.Distribution.BucketOptions.oneofGroups_=[[1,2,3]],proto.google.api.Distribution.BucketOptions.OptionsCase={OPTIONS_NOT_SET:0,LINEAR_BUCKETS:1,EXPONENTIAL_BUCKETS:2,EXPLICIT_BUCKETS:3},proto.google.api.Distribution.BucketOptions.prototype.getOptionsCase=function(){return jspb.Message.computeOneofCase(this,proto.google.api.Distribution.BucketOptions.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.Distribution.BucketOptions.prototype.toObject=function(opt_includeInstance){return proto.google.api.Distribution.BucketOptions.toObject(opt_includeInstance,this)},proto.google.api.Distribution.BucketOptions.toObject=function(includeInstance,msg){var f,obj={linearBuckets:(f=msg.getLinearBuckets())&&proto.google.api.Distribution.BucketOptions.Linear.toObject(includeInstance,f),exponentialBuckets:(f=msg.getExponentialBuckets())&&proto.google.api.Distribution.BucketOptions.Exponential.toObject(includeInstance,f),explicitBuckets:(f=msg.getExplicitBuckets())&&proto.google.api.Distribution.BucketOptions.Explicit.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.Distribution.BucketOptions.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.Distribution.BucketOptions;return proto.google.api.Distribution.BucketOptions.deserializeBinaryFromReader(msg,reader)},proto.google.api.Distribution.BucketOptions.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new proto.google.api.Distribution.BucketOptions.Linear;reader.readMessage(value,proto.google.api.Distribution.BucketOptions.Linear.deserializeBinaryFromReader),msg.setLinearBuckets(value);break;case 2:value=new proto.google.api.Distribution.BucketOptions.Exponential;reader.readMessage(value,proto.google.api.Distribution.BucketOptions.Exponential.deserializeBinaryFromReader),msg.setExponentialBuckets(value);break;case 3:value=new proto.google.api.Distribution.BucketOptions.Explicit;reader.readMessage(value,proto.google.api.Distribution.BucketOptions.Explicit.deserializeBinaryFromReader),msg.setExplicitBuckets(value);break;default:reader.skipField()}}return msg},proto.google.api.Distribution.BucketOptions.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.Distribution.BucketOptions.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.Distribution.BucketOptions.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getLinearBuckets())&&writer.writeMessage(1,f,proto.google.api.Distribution.BucketOptions.Linear.serializeBinaryToWriter),null!=(f=message.getExponentialBuckets())&&writer.writeMessage(2,f,proto.google.api.Distribution.BucketOptions.Exponential.serializeBinaryToWriter),null!=(f=message.getExplicitBuckets())&&writer.writeMessage(3,f,proto.google.api.Distribution.BucketOptions.Explicit.serializeBinaryToWriter)},proto.google.api.Distribution.BucketOptions.Linear=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.api.Distribution.BucketOptions.Linear,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.Distribution.BucketOptions.Linear.displayName="proto.google.api.Distribution.BucketOptions.Linear"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.Distribution.BucketOptions.Linear.prototype.toObject=function(opt_includeInstance){return proto.google.api.Distribution.BucketOptions.Linear.toObject(opt_includeInstance,this)},proto.google.api.Distribution.BucketOptions.Linear.toObject=function(includeInstance,msg){var obj={numFiniteBuckets:jspb.Message.getFieldWithDefault(msg,1,0),width:+jspb.Message.getFieldWithDefault(msg,2,0),offset:+jspb.Message.getFieldWithDefault(msg,3,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.Distribution.BucketOptions.Linear.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.Distribution.BucketOptions.Linear;return proto.google.api.Distribution.BucketOptions.Linear.deserializeBinaryFromReader(msg,reader)},proto.google.api.Distribution.BucketOptions.Linear.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readInt32();msg.setNumFiniteBuckets(value);break;case 2:value=reader.readDouble();msg.setWidth(value);break;case 3:value=reader.readDouble();msg.setOffset(value);break;default:reader.skipField()}}return msg},proto.google.api.Distribution.BucketOptions.Linear.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.Distribution.BucketOptions.Linear.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.Distribution.BucketOptions.Linear.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getNumFiniteBuckets())&&writer.writeInt32(1,f),0!==(f=message.getWidth())&&writer.writeDouble(2,f),0!==(f=message.getOffset())&&writer.writeDouble(3,f)},proto.google.api.Distribution.BucketOptions.Linear.prototype.getNumFiniteBuckets=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.api.Distribution.BucketOptions.Linear.prototype.setNumFiniteBuckets=function(value){jspb.Message.setProto3IntField(this,1,value)},proto.google.api.Distribution.BucketOptions.Linear.prototype.getWidth=function(){return+jspb.Message.getFieldWithDefault(this,2,0)},proto.google.api.Distribution.BucketOptions.Linear.prototype.setWidth=function(value){jspb.Message.setProto3FloatField(this,2,value)},proto.google.api.Distribution.BucketOptions.Linear.prototype.getOffset=function(){return+jspb.Message.getFieldWithDefault(this,3,0)},proto.google.api.Distribution.BucketOptions.Linear.prototype.setOffset=function(value){jspb.Message.setProto3FloatField(this,3,value)},proto.google.api.Distribution.BucketOptions.Exponential=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.api.Distribution.BucketOptions.Exponential,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.Distribution.BucketOptions.Exponential.displayName="proto.google.api.Distribution.BucketOptions.Exponential"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.Distribution.BucketOptions.Exponential.prototype.toObject=function(opt_includeInstance){return proto.google.api.Distribution.BucketOptions.Exponential.toObject(opt_includeInstance,this)},proto.google.api.Distribution.BucketOptions.Exponential.toObject=function(includeInstance,msg){var obj={numFiniteBuckets:jspb.Message.getFieldWithDefault(msg,1,0),growthFactor:+jspb.Message.getFieldWithDefault(msg,2,0),scale:+jspb.Message.getFieldWithDefault(msg,3,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.Distribution.BucketOptions.Exponential.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.Distribution.BucketOptions.Exponential;return proto.google.api.Distribution.BucketOptions.Exponential.deserializeBinaryFromReader(msg,reader)},proto.google.api.Distribution.BucketOptions.Exponential.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readInt32();msg.setNumFiniteBuckets(value);break;case 2:value=reader.readDouble();msg.setGrowthFactor(value);break;case 3:value=reader.readDouble();msg.setScale(value);break;default:reader.skipField()}}return msg},proto.google.api.Distribution.BucketOptions.Exponential.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.Distribution.BucketOptions.Exponential.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.Distribution.BucketOptions.Exponential.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getNumFiniteBuckets())&&writer.writeInt32(1,f),0!==(f=message.getGrowthFactor())&&writer.writeDouble(2,f),0!==(f=message.getScale())&&writer.writeDouble(3,f)},proto.google.api.Distribution.BucketOptions.Exponential.prototype.getNumFiniteBuckets=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.api.Distribution.BucketOptions.Exponential.prototype.setNumFiniteBuckets=function(value){jspb.Message.setProto3IntField(this,1,value)},proto.google.api.Distribution.BucketOptions.Exponential.prototype.getGrowthFactor=function(){return+jspb.Message.getFieldWithDefault(this,2,0)},proto.google.api.Distribution.BucketOptions.Exponential.prototype.setGrowthFactor=function(value){jspb.Message.setProto3FloatField(this,2,value)},proto.google.api.Distribution.BucketOptions.Exponential.prototype.getScale=function(){return+jspb.Message.getFieldWithDefault(this,3,0)},proto.google.api.Distribution.BucketOptions.Exponential.prototype.setScale=function(value){jspb.Message.setProto3FloatField(this,3,value)},proto.google.api.Distribution.BucketOptions.Explicit=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.api.Distribution.BucketOptions.Explicit.repeatedFields_,null)},goog.inherits(proto.google.api.Distribution.BucketOptions.Explicit,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.Distribution.BucketOptions.Explicit.displayName="proto.google.api.Distribution.BucketOptions.Explicit"),proto.google.api.Distribution.BucketOptions.Explicit.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.Distribution.BucketOptions.Explicit.prototype.toObject=function(opt_includeInstance){return proto.google.api.Distribution.BucketOptions.Explicit.toObject(opt_includeInstance,this)},proto.google.api.Distribution.BucketOptions.Explicit.toObject=function(includeInstance,msg){var obj={boundsList:jspb.Message.getRepeatedFloatingPointField(msg,1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.Distribution.BucketOptions.Explicit.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.Distribution.BucketOptions.Explicit;return proto.google.api.Distribution.BucketOptions.Explicit.deserializeBinaryFromReader(msg,reader)},proto.google.api.Distribution.BucketOptions.Explicit.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readPackedDouble();msg.setBoundsList(value);break;default:reader.skipField()}}return msg},proto.google.api.Distribution.BucketOptions.Explicit.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.Distribution.BucketOptions.Explicit.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.Distribution.BucketOptions.Explicit.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getBoundsList()).length&&writer.writePackedDouble(1,f)},proto.google.api.Distribution.BucketOptions.Explicit.prototype.getBoundsList=function(){return jspb.Message.getRepeatedFloatingPointField(this,1)},proto.google.api.Distribution.BucketOptions.Explicit.prototype.setBoundsList=function(value){jspb.Message.setField(this,1,value||[])},proto.google.api.Distribution.BucketOptions.Explicit.prototype.addBounds=function(value,opt_index){jspb.Message.addToRepeatedField(this,1,value,opt_index)},proto.google.api.Distribution.BucketOptions.Explicit.prototype.clearBoundsList=function(){this.setBoundsList([])},proto.google.api.Distribution.BucketOptions.prototype.getLinearBuckets=function(){return jspb.Message.getWrapperField(this,proto.google.api.Distribution.BucketOptions.Linear,1)},proto.google.api.Distribution.BucketOptions.prototype.setLinearBuckets=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.api.Distribution.BucketOptions.oneofGroups_[0],value)},proto.google.api.Distribution.BucketOptions.prototype.clearLinearBuckets=function(){this.setLinearBuckets(void 0)},proto.google.api.Distribution.BucketOptions.prototype.hasLinearBuckets=function(){return null!=jspb.Message.getField(this,1)},proto.google.api.Distribution.BucketOptions.prototype.getExponentialBuckets=function(){return jspb.Message.getWrapperField(this,proto.google.api.Distribution.BucketOptions.Exponential,2)},proto.google.api.Distribution.BucketOptions.prototype.setExponentialBuckets=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.api.Distribution.BucketOptions.oneofGroups_[0],value)},proto.google.api.Distribution.BucketOptions.prototype.clearExponentialBuckets=function(){this.setExponentialBuckets(void 0)},proto.google.api.Distribution.BucketOptions.prototype.hasExponentialBuckets=function(){return null!=jspb.Message.getField(this,2)},proto.google.api.Distribution.BucketOptions.prototype.getExplicitBuckets=function(){return jspb.Message.getWrapperField(this,proto.google.api.Distribution.BucketOptions.Explicit,3)},proto.google.api.Distribution.BucketOptions.prototype.setExplicitBuckets=function(value){jspb.Message.setOneofWrapperField(this,3,proto.google.api.Distribution.BucketOptions.oneofGroups_[0],value)},proto.google.api.Distribution.BucketOptions.prototype.clearExplicitBuckets=function(){this.setExplicitBuckets(void 0)},proto.google.api.Distribution.BucketOptions.prototype.hasExplicitBuckets=function(){return null!=jspb.Message.getField(this,3)},proto.google.api.Distribution.Exemplar=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.api.Distribution.Exemplar.repeatedFields_,null)},goog.inherits(proto.google.api.Distribution.Exemplar,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.Distribution.Exemplar.displayName="proto.google.api.Distribution.Exemplar"),proto.google.api.Distribution.Exemplar.repeatedFields_=[3],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.Distribution.Exemplar.prototype.toObject=function(opt_includeInstance){return proto.google.api.Distribution.Exemplar.toObject(opt_includeInstance,this)},proto.google.api.Distribution.Exemplar.toObject=function(includeInstance,msg){var f,obj={value:+jspb.Message.getFieldWithDefault(msg,1,0),timestamp:(f=msg.getTimestamp())&&google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance,f),attachmentsList:jspb.Message.toObjectList(msg.getAttachmentsList(),google_protobuf_any_pb.Any.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.Distribution.Exemplar.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.Distribution.Exemplar;return proto.google.api.Distribution.Exemplar.deserializeBinaryFromReader(msg,reader)},proto.google.api.Distribution.Exemplar.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readDouble();msg.setValue(value);break;case 2:value=new google_protobuf_timestamp_pb.Timestamp;reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader),msg.setTimestamp(value);break;case 3:value=new google_protobuf_any_pb.Any;reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader),msg.addAttachments(value);break;default:reader.skipField()}}return msg},proto.google.api.Distribution.Exemplar.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.Distribution.Exemplar.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.Distribution.Exemplar.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getValue())&&writer.writeDouble(1,f),null!=(f=message.getTimestamp())&&writer.writeMessage(2,f,google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter),0<(f=message.getAttachmentsList()).length&&writer.writeRepeatedMessage(3,f,google_protobuf_any_pb.Any.serializeBinaryToWriter)},proto.google.api.Distribution.Exemplar.prototype.getValue=function(){return+jspb.Message.getFieldWithDefault(this,1,0)},proto.google.api.Distribution.Exemplar.prototype.setValue=function(value){jspb.Message.setProto3FloatField(this,1,value)},proto.google.api.Distribution.Exemplar.prototype.getTimestamp=function(){return jspb.Message.getWrapperField(this,google_protobuf_timestamp_pb.Timestamp,2)},proto.google.api.Distribution.Exemplar.prototype.setTimestamp=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.api.Distribution.Exemplar.prototype.clearTimestamp=function(){this.setTimestamp(void 0)},proto.google.api.Distribution.Exemplar.prototype.hasTimestamp=function(){return null!=jspb.Message.getField(this,2)},proto.google.api.Distribution.Exemplar.prototype.getAttachmentsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_protobuf_any_pb.Any,3)},proto.google.api.Distribution.Exemplar.prototype.setAttachmentsList=function(value){jspb.Message.setRepeatedWrapperField(this,3,value)},proto.google.api.Distribution.Exemplar.prototype.addAttachments=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,3,opt_value,proto.google.protobuf.Any,opt_index)},proto.google.api.Distribution.Exemplar.prototype.clearAttachmentsList=function(){this.setAttachmentsList([])},proto.google.api.Distribution.prototype.getCount=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.api.Distribution.prototype.setCount=function(value){jspb.Message.setProto3IntField(this,1,value)},proto.google.api.Distribution.prototype.getMean=function(){return+jspb.Message.getFieldWithDefault(this,2,0)},proto.google.api.Distribution.prototype.setMean=function(value){jspb.Message.setProto3FloatField(this,2,value)},proto.google.api.Distribution.prototype.getSumOfSquaredDeviation=function(){return+jspb.Message.getFieldWithDefault(this,3,0)},proto.google.api.Distribution.prototype.setSumOfSquaredDeviation=function(value){jspb.Message.setProto3FloatField(this,3,value)},proto.google.api.Distribution.prototype.getRange=function(){return jspb.Message.getWrapperField(this,proto.google.api.Distribution.Range,4)},proto.google.api.Distribution.prototype.setRange=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.api.Distribution.prototype.clearRange=function(){this.setRange(void 0)},proto.google.api.Distribution.prototype.hasRange=function(){return null!=jspb.Message.getField(this,4)},proto.google.api.Distribution.prototype.getBucketOptions=function(){return jspb.Message.getWrapperField(this,proto.google.api.Distribution.BucketOptions,6)},proto.google.api.Distribution.prototype.setBucketOptions=function(value){jspb.Message.setWrapperField(this,6,value)},proto.google.api.Distribution.prototype.clearBucketOptions=function(){this.setBucketOptions(void 0)},proto.google.api.Distribution.prototype.hasBucketOptions=function(){return null!=jspb.Message.getField(this,6)},proto.google.api.Distribution.prototype.getBucketCountsList=function(){return jspb.Message.getRepeatedField(this,7)},proto.google.api.Distribution.prototype.setBucketCountsList=function(value){jspb.Message.setField(this,7,value||[])},proto.google.api.Distribution.prototype.addBucketCounts=function(value,opt_index){jspb.Message.addToRepeatedField(this,7,value,opt_index)},proto.google.api.Distribution.prototype.clearBucketCountsList=function(){this.setBucketCountsList([])},proto.google.api.Distribution.prototype.getExemplarsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.api.Distribution.Exemplar,10)},proto.google.api.Distribution.prototype.setExemplarsList=function(value){jspb.Message.setRepeatedWrapperField(this,10,value)},proto.google.api.Distribution.prototype.addExemplars=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,10,opt_value,proto.google.api.Distribution.Exemplar,opt_index)},proto.google.api.Distribution.prototype.clearExemplarsList=function(){this.setExemplarsList([])},goog.object.extend(exports,proto.google.api);