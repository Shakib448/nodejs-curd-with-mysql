import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const connectDB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

connectDB.connect((err) => {
  if (err) throw err;
  console.log("MYSQL connected".cyan.underline);
});

export default connectDB;
