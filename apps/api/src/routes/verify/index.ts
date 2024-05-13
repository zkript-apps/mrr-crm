import express, { Router } from "express";
import { verifyPassCode } from "./services/default";

const router: Router = express.Router();

router.post("/", verifyPassCode);

export default router;
