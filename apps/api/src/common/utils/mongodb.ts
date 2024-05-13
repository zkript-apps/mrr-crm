import mongoose from "mongoose";
import { MONGO_URL } from "../constants/ev";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is connected and running"))
  .catch((err) => console.log("MongoDB error: " + err));
