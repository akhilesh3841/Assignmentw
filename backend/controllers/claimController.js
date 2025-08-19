import { History } from "../models/claimHistory.js";
import { User } from "../models/userSchema.js";


export const claimPoints=async(req,res)=>{
    try {
        const {userid}=req.params;

        const user=await User.findById(userid);

        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        const randomPoinsts=Math.floor(Math.random()*100)+1;
        user.totalPoints+=randomPoinsts;

        await user.save();

        const history=new History({
            user:user._id,
            pointsAwarded:randomPoinsts
        })
        await history.save();

        res.status(200).json({
            message:`claim successfully for ${user.name}`,
            pointsAwarded:randomPoinsts,
            totalPoints:user.totalPoints
        })
    } catch (error) {
        res.status(500).json({message:"Error claiming points",error});
    }
}

export const getUserhistory=async(req,res)=>{
    try {
        const {userid}=req.params;
        const user=await User.findById(userid);

        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        const history=await History.find({user:userid}).sort({createdAt:-1}).populate("user","name");
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({message:"Error fetching claim history",error});
    }
}