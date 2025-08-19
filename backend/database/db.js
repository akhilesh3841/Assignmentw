import mongoose from "mongoose";

export const connection=async()=>{
    await mongoose.connect(process.env.DB_NAME,{
        dbName:"assignment",
    })
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((err)=>{
        console.log("Database connection failed", err);
    });
};