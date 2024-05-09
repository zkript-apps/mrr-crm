import express, { Router } from "express";
import { getUser } from "./services/default";

const router:Router = express.Router()

router.get("/", getUser);


export default router;
