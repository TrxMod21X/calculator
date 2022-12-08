const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const dbConnect = async () => {
  try {
    console.log("Please wait to connect to database...");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
  } catch (err) {
    console.log("DB Connection failed:", err.message);
  }
};

dbConnect();
