const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ["Admin", "User"], default: "User" },
   CreatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

   profileImage: {
            type: String,
            default: null
        },

createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },

  },
  { timestamps: true },

  



);

module.exports = mongoose.model("User", userSchema);
