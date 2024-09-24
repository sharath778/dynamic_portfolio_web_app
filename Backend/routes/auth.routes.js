import express from "express";
import { loginUser, logOutUser, signUpUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup",signUpUser);

router.post("/login", loginUser);

router.post("/logout", logOutUser);

export default router;