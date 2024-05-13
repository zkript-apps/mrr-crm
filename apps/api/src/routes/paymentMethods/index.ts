import express, { Router } from "express";
import {
  addPaymentMethod,
  deletePaymentMethodByCampaign,
  getAllPaymentMethods,
  getPaymenetById,
  getPaymentMethodByCampaign,
  updatePaymentMethodByCampaign,
} from "./services/default";

const router: Router = express.Router();

router.get("/", getAllPaymentMethods);
router.get("/:paymentMethodId", getPaymenetById);
router.get("/:campaignId/campaign", getPaymentMethodByCampaign);
router.post("/", addPaymentMethod);
router.patch("/:paymentMethodId", updatePaymentMethodByCampaign);
router.delete("/:paymentMethodId", deletePaymentMethodByCampaign);

export default router;
