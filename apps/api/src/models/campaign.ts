import mongoose, { Schema } from "mongoose";

const campaign  = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true
  },
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
