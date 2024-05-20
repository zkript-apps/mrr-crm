import mongoose, { Schema } from "mongoose";

const steps = new Schema({
  step: {
    type: Number,
    require: true,
  },
  instruction: {
    type: String,
    require: true,
  },
});

const paymentMethod = new Schema({
  campaign: {
    type: mongoose.Types.ObjectId,
    ref: "Campaign",
    required: true,
    unique: false,
  },
  title: {
    type: String,
    required: true,
  },
  steps: [steps],
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

export default mongoose.model("PaymentMethod", paymentMethod);
