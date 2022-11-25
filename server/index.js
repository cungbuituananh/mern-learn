const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");

/**
 * Connect database
 */
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://anhcbt:vankiep1@cluster0.zg5d4wn.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected database");
  } catch (error) {
    console.log("error: ", error);
    process.exit(1);
  }
};

connectDB();
const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);

const PORT = 5000;

app.listen(PORT, () => console.log("SERVER RUNNING"));
