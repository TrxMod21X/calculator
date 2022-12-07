require("dotenv").config();
const express = require("express");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const userRoutes = require("./routes/usersRoutes");

require("./config/dbConnect");

const app = express();

//* -----------------------------------
//* MIDDLEWARES
app.use(express.json()); //* Pass Incoming Data
//* -----------------------------------

//* -----------------------------------
//* ROUTES
app.use("/api/v1/users", userRoutes);
//* -----------------------------------

//* -----------------------------------
//* ERROR HANDLE MIDDLEWARES
app.use(globalErrorHandler);
//* -----------------------------------

//* -----------------------------------
//* LISTEN SERVER
const PORT = process.env.PORT || 2121;
app.listen(PORT, console.log(`Server listening on ${PORT}`));
//* -----------------------------------
