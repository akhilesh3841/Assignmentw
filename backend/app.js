import express from 'express';
import cors from 'cors'; 
import mongoose from 'mongoose';
import { connection } from "./database/db.js";
import userRoutes from './routes/userRoutes.js';
import claimRoutes from "./routes/claimRoutes.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();


app.use(cors());


app.use(cors({
  origin: ["https://assignmentw-kappa.vercel.app"], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

connection();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use(express.json());

app.use("/", userRoutes);
app.use("/", claimRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
