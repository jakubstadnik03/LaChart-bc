const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin", "athlete", "coach"],
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  athleteId: {
    type: String,
  },
  authProvider: {
    type: String,
    enum: ["email", "google", "facebook"],
    required: true,
  },
  googleId: {
    type: String,
  },
  facebookId: {
    type: String,
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
