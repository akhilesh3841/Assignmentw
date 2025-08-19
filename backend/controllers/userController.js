import { User } from "../models/userSchema.js";

export const getUsers = async (req, res) => {
  try {
    let users = await User.find().sort({ totalPoints: -1 });


    users = users.map((user, index) => ({
      _id: user._id,
      name: user.name,
      totalPoints: user.totalPoints,
      rank: index + 1,
    }));

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};


export const addUser=async(req,res)=>{
    try {
        const {name}=req.body;
        const newuser=new User({name});

        await newuser.save();

        res.status(201).json({message:"User added successfully",user:newuser});
    } catch (error) {
        res.status(500).json({message:"Error adding user",error});
    }
}