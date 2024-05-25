import express, { Router } from "express";
import { getUsers, getUserById, addUser, updateUser, authenticate, verify } from "./services/default";
import isUserAdmin from "@/common/middlewares/isUserAdmin";
import isUserLoggedIn from "@/common/middlewares/isUserLoggedIn";

const router: Router = express.Router();

router.get("/", isUserLoggedIn, isUserAdmin, getUsers);
router.post("/", isUserLoggedIn, isUserAdmin, addUser);
router.patch("/:userId", isUserLoggedIn, isUserAdmin, updateUser);

router.post("/auth", authenticate);
router.get("/verify", isUserLoggedIn, verify);
router.get("/:userId", isUserLoggedIn, getUserById);

export default router;
