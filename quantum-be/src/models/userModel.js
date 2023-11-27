const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  verified: { type: Number, default: 0, enum: [0, 1] },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
