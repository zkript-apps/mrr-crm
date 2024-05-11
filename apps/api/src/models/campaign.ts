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

const Remarks = new Schema({
  comment:String,
  date:Date
})

const Leads = new Schema({
  values:{
    type:Object,
    required:true
  },
  paymentRecord: Array,
  remarks:{
    type:[Remarks],
    required:false
  }
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
  leadUniqueKey:String,
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
