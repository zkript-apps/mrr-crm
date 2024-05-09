import { Application } from "express";
import { API_ROOT } from "@/common/constants";
import userRoute from "./users";
// API


export default function (app: Application) {
  // API
  app.use(`${API_ROOT}/users`, userRoute);

}
