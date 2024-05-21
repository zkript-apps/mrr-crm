import mongoose from "mongoose";
const { Schema } = mongoose;

const users = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  password: String,
  isBlocked: {
    default: false,
    type: Boolean,
  },
  role: {
    type: String,
    required: true,
    default: "Agent",
    enum: ["Admin", "Agent"]
  },
  campaignId: {
    type: mongoose.Types.ObjectId,
    ref: "Campaigns",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: Date,
  deletedAt: Date,
});

export default mongoose.model("Users", users);
