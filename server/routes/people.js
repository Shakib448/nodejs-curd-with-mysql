import express from "express";
import connectDB from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    connectDB.query("SELECT * from people", (err, rows, fileds) => {
      if (err) throw err;
      res.send(rows);
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
