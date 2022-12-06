require("dotenv").config();
const express = require("express");
require("./config/dbConnect");

const app = express();

//* MIDDLEWARES
//* ROUTES
//* ERROR HANDLE MIDDLEWARES

//* LISTEN SERVER
const PORT = process.env.PORT || 2121;
app.listen(PORT, console.log(`Server listening on ${PORT}`));
