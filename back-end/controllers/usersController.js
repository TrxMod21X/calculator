const bcrypt = require("bcryptjs");
const User = require("../model/User");
const appError = require("../utils/appError");
const generateToken = require("../utils/generateToken");

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
      return next(appError("invalid login credentials", 400));
    }

    const isPasswordValid = await bcrypt.compare(password, userFound.password);

    if (!isPasswordValid) {
      return next(appError("invalid login credentials", 400));
    }

    const time = Date.now();
    const updateUser = await User.findByIdAndUpdate(userFound._id, {
      loginTime: time,
    });

    const token = generateToken(updateUser._id);

    req.session.userAuth = token;
    res.json({
      status: "Login Successfully",
      fullname: updateUser.fullname,
      id: updateUser._id,
      token,
    });
  } catch (err) {
    res.json(err);
  }
};

const fetchUserController = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.json({ status: "success", user });
  } catch (err) {
    res.json(err);
  }
};

const logoutController = async (req, res) => {
  const userFound = await User.findOne({ id: req.user });

  const time = Date.now();
  const logoutTime = time;
  const currentTime = userFound.totalTime;
  let totalTime = 0;
  let calculate = logoutTime - userFound.loginTime;
  let result = Math.floor(calculate / 1000);

  if (currentTime > 0) {
    totalTime = currentTime + result;
  } else {
    totalTime = result;
  }

  try {
    const updated = await User.findByIdAndUpdate(userFound._id, {
      logoutTime,
      totalTime,
    });
    await req.session.destroy();
    res.json({ status: "success", user: "User Logout Success" });
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  registerController,
  loginController,
  fetchUserController,
  logoutController,
};
