import express from "express";
import { getUsers, addUser } from "../controllers/userController.js"; // add .js

const router = express.Router();

router.get("/getuser", getUsers);
router.post("/adduser", addUser);

export default router;
