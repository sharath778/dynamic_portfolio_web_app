import express from "express";
import { dataInput, getData, updateData } from "../controllers/dataInput.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/dataInput", protectRoute,dataInput);
router.get("/getData/:userId",getData);
router.patch("/update/user",protectRoute,updateData);
export default router;