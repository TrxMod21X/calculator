const mongoose = require("mongoose");

//* SCHEMA
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//* COMPILE THE SCEMA TO FORM A MODEL
const User = mongoose.model("User", userSchema);

module.exports = User;