import express from "express";
import "colors";
import dotenv from "dotenv";
import PeopleRoutes from "./routes/people.js";

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();

// Body parser
app.use(express.json());

// App routes
app.use("/people", PeopleRoutes);

app.listen(
  PORT,
  console.log(`Server is running on http://localhost:${PORT}`.yellow.bold)
);
