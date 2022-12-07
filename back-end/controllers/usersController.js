const bcrypt = require("bcryptjs");
const User = require("../model/User");
const appError = require("../utils/appError");

const registerController = async (req, res, next) => {
  const { fullname, username, password } = req.body;

  if (!fullname || !username || !password) {
    return next(appError("All Fields Required"));
  }

  try {
    const userFound = await User.findOne({ username });

    if (userFound) {
      return next(appError("User already exists"));
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

const loginController = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(appError("All Fields Required"));
  }

  try {
    const userFound = await User.findOne({ username });
    if (!userFound) {
      return next(appError("invalid login credentials"));
    }

    const isPasswordValid = await bcrypt.compare(password, userFound.password);

    if (!isPasswordValid) {
      return next(appError("invalid login credentials"));
    }

    const time = Date.now();
    const updateUser = await User.findByIdAndUpdate(userFound._id, {
      loginTime: time,
    });

    // const start = Date.now();
    // console.log("Timer Start....");

    // setTimeout(() => {
    //   const milis = Date.now();
    //   const result = milis - start;
    //   console.log(start);
    //   console.log(milis);
    //   console.log(`seconds elapsed = ${Math.floor(result / 1000)} seconds`);
    // }, 2000);

    res.json({
      status: "success",
      user: "User Login Successfully",
      data: updateUser,
    });
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
