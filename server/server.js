import express from "express";
import "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();
// DB
connectDB();

// Body parser
app.use(express.json());

app.listen(
  PORT,
  console.log(`Server is running on http://localhost:${PORT}`.yellow.bold)
);
