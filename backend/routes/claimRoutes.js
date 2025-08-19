import express from "express";
import {claimPoints,getUserhistory} from "../controllers/claimController.js"

const router=express.Router();

router.post("/claim/:userid", claimPoints);
router.get("/history/:userid", getUserhistory);



export default router;