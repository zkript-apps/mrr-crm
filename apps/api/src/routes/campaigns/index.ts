import express, { Router } from "express";
import { addCampain, deleteCampaign, getAllCampaigns, getCampaign, getCampaignLeadById, getCampaignNameDesc, getCampaignPattern, updateCampaign, updateCampaignLeadById, updateCampaignValidate, updatePaymentImage } from "./services/default";

const router:Router = express.Router()

router.get("/", getAllCampaigns);
router.get("/:campaignId", getCampaign);
router.post("/", addCampain);
router.patch("/:campaignId", updateCampaign);
router.patch("/update/:campaignId", updateCampaignValidate);
router.delete("/:campaignId", deleteCampaign);

router.get("/:campaignId/title-description", getCampaignNameDesc);
router.get("/:campaignId/patterns", getCampaignPattern);
router.get("/:campaignId/lead/:uniqueId", getCampaignLeadById);
router.patch("/:campaignId/lead/:uniqueId", updateCampaignLeadById);
router.patch("/:campaignId/lead/:uniqueId/image", updatePaymentImage);
export default router;
