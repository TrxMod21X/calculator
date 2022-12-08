const express = require("express");
const {
  registerController,
  loginController,
  fetchUserController,
  logoutController,
} = require("../controllers/usersController");
const isLogin = require("../middlewares/isLogin");

const userRoutes = express.Router();

//* POST: /api/v1/users/register
userRoutes.post("/register", registerController);

//* POST: /api/v1/users/login
userRoutes.post("/login", loginController);

//* GET: /api/v1/users/profile
userRoutes.get("/profile", isLogin, fetchUserController);

//* GET: /api/v1/users/logout
userRoutes.get("/logout", isLogin, logoutController);

module.exports = userRoutes;
