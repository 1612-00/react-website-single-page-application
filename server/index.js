require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/Auth");

const app = express();
const PORT = 5000;

const connectDB = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@react-website.jgsyx.mongodb.net/react-website?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
