import { Application } from "express";
import { API_ROOT } from "@/common/constants";
import userRoute from "./users";
import campaignRoute from "./campaigns"
import paymentMethodRoute from "./paymentMethods"
// API


export default function (app: Application) {
  // API
  app.use(`${API_ROOT}/users`, userRoute);
  app.use(`${API_ROOT}/campaigns`, campaignRoute)
  app.use(`${API_ROOT}/payment-methods`, paymentMethodRoute)
}
