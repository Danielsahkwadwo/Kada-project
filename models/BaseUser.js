const mongoose = require("mongoose");
const { Schema } = mongoose;

const baseUserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: [true, "Email already exists"] },
    password: { type: String, required: true },
    phone: { type: String, required: true, unique: [true, "Phone already exists"] },
    fcmToken: { type: String, default: null },
    socketId: { type: String, default: null },
    profilePicture: { type: String, default: null },
    role: { type: String, required: true, enum: ["passenger", "rider", "admin"], default: "passenger" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { discriminatorKey: "role" }
);

const BaseUser = mongoose.model("BaseUser", baseUserSchema);

module.exports = BaseUser;
