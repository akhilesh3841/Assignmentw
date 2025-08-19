import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  totalPoints: {   // ✅ camelCase use karo
    type: Number,
    default: 0
  }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
