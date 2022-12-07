const express = require("express");
const {
  registerController,
  loginController,
  fetchAllProfileController,
  logoutController,
} = require("../controllers/usersController");

const userRoutes = express.Router();

//* POST: /api/v1/users/register
userRoutes.post("/register", registerController);

//* POST: /api/v1/users/login
userRoutes.post("/login", loginController);

//* GET: /api/v1/users/profile
userRoutes.get("/profile", fetchAllProfileController);

//* GET: /api/v1/users/logout
userRoutes.get("/logout", logoutController);

module.exports = userRoutes;
