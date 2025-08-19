import mongoose from "mongoose";

export const connection=async()=>{
    await mongoose.connect("mongodb+srv://akhilesh4149yadav:yoql89ll2@cluster0.bidvlwq.mongodb.net/",{
        dbName:"assignment",
    })
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((err)=>{
        console.log("Database connection failed", err);
    });
};