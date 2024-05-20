import express, { Router } from "express";
import {
  addCampaign,
  deleteCampaign,
  getAllCampaigns,
  getCampaign,
  getCampaignLeadById,
  getCampaignNameDesc,
  getCampaignPattern,
  updateCampaign,
  updateCampaignLeadById,
  updateCampaignValidate,
  updatePaymentImage,
} from "./services/default";
import isUserAdmin from "@/common/middlewares/isUserAdmin";
import isUserLoggedIn from "@/common/middlewares/isUserLoggedIn";

const router: Router = express.Router();

router.get("/", isUserLoggedIn, getAllCampaigns);
router.get("/:campaignId", isUserLoggedIn, getCampaign);
router.post("/", isUserLoggedIn, isUserAdmin, addCampaign);
router.patch("/upload-image", isUserLoggedIn, updatePaymentImage);
router.patch("/:campaignId", isUserLoggedIn, isUserAdmin, updateCampaign);
router.patch("/update/:campaignId", updateCampaignValidate);
router.delete("/:campaignId", isUserLoggedIn, isUserAdmin, deleteCampaign);

router.get("/:campaignId/title-description", isUserLoggedIn, getCampaignNameDesc);
router.get("/:campaignId/patterns", isUserLoggedIn, getCampaignPattern);
router.get("/:campaignId/lead/:uniqueId", isUserLoggedIn, getCampaignLeadById);
router.patch("/:campaignId/lead/:uniqueId", isUserLoggedIn, updateCampaignLeadById);

export default router;
