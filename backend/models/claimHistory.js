import mongoose from "mongoose";

const claimHistorySchema =new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true        
    },
    pointsAwarded:{
        type:Number,
        required:true
    }
},{timestamps:true});


export const History=mongoose.model("ClaimHistory",claimHistorySchema);