require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const userRoutes = require("./routes/usersRoutes");

require("./config/dbConnect");

const app = express();

//* -----------------------------------
//* MIDDLEWARES
app.use(express.json()); //* Pass Incoming Data
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: process.env.MONGO_URL,
      ttl: 24 * 60 * 60, //* 1 Day
    }),
  })
); //* Session Configuration
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
