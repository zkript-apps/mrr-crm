import express, { Router } from "express";
import { getUsers, getUserById, addUser, updateUser, authenticate, verify } from "./services/default";
import isUserAdmin from "@/common/middlewares/isUserAdmin";
import isUserLoggedIn from "@/common/middlewares/isUserLoggedIn";

const router: Router = express.Router();

router.get("/", isUserLoggedIn, isUserAdmin, getUsers);
router.post("/", addUser);
router.patch("/:userId", isUserLoggedIn, updateUser);

router.post("/auth", authenticate);
router.get("/verify", isUserLoggedIn, verify);
router.get("/:userId", getUserById);

export default router;
