import express, { Router } from "express";
import { addCampain, deleteCampaign, getAllCampaigns, getCampaign, updateCampaign } from "./services/default";

const router:Router = express.Router()

router.get("/", getAllCampaigns);
router.get("/:campaignId", getCampaign);
router.post("/", addCampain);
router.patch("/:campaignId", updateCampaign);
router.delete("/:campaignId", deleteCampaign);

export default router;
