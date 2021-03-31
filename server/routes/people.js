import express from "express";
import connectDB from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let sql = "SELECT * from employee";
    connectDB.query(sql, (err, rows, fileds) => {
      if (err) throw err;
      res.send(rows);
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
