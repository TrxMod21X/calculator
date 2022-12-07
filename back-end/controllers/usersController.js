const bcrypt = require("bcryptjs");
const User = require("../model/User");

const registerController = async (req, res) => {
  const { fullname, username, password } = req.body;

  try {
    const userFound = await User.findOne({ username });

    if (userFound) {
      return res.json({
        status: "failed",
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({
      fullname,
      username,
      password: passwordHash,
    });

    res.json({
      status: "success",
      user: "User Registered Successfully",
      data: user,
    });
  } catch (err) {
    res.json(err);
  }
};

const loginController = async (req, res) => {
  try {
    res.json({ status: "success", user: "User Login" });
  } catch (err) {
    res.json(err);
  }
};

const fetchAllProfileController = async (req, res) => {
  try {
    res.json({ status: "success", user: "User Profile" });
  } catch (err) {
    res.json(err);
  }
};

const logoutController = async (req, res) => {
  try {
    res.json({ status: "success", user: "User Logout" });
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  registerController,
  loginController,
  fetchAllProfileController,
  logoutController,
};
