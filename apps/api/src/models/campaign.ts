import mongoose, { Schema } from "mongoose";

const Patterns = new Schema({
  name:{
    type: String,
    required:true
  },
  text:{
    type:String,
    required:true
  }
})

const Leads = new Schema({
  values:{
    type:Object,
    required:true
  },
  paymentRecord: Array,
  remarks:[String]
})

const campaign  = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  patterns:[Patterns],
  leads:[Leads],
  createdAt: {
    type: Date,
    required: false,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
  deletedAt: {
    type: Date,
    required: false,
  },
});

export default mongoose.model("Campaign", campaign);
