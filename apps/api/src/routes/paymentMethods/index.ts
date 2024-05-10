import express, { Router } from "express";
import {
  addPaymentMethod,
  deletePaymentMethodByCampaign,
  getAllPaymentMethods,
  getPaymentMethodByCampaign,
  updatePaymentMethodByCampaign,
} from "./services/default";

const router: Router = express.Router();

router.get("/", getAllPaymentMethods);
router.get("/:campaignId", getPaymentMethodByCampaign);
router.post("/", addPaymentMethod);
router.patch("/:paymentMethodId/campaign/:campaignId", updatePaymentMethodByCampaign);
router.delete("/:paymentMethodId/campaign/:campaignId", deletePaymentMethodByCampaign);

export default router;
