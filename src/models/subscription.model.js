import mongoose,{Schema} from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  subscriber:{
    type:Schema.Types.ObjectId, //one who is subscribing
    ref:"user",
    required:true
  },
  channel :{
    type:Schema.Types.ObjectId, //one whom 'subscriber' is subscribing
    ref:"user",
    required:true
  }
},{timestamps:true})

export const Subscription = mongoose.model("subscription",subscriptionSchema)