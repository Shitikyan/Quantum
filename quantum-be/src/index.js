require("dotenv").config();
const usersRouter = require("./usersController");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.CLIENT_URL,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/users", usersRouter);

mongoose.connect(String(process.env.DB_URL), {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
