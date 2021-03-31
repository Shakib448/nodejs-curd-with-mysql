import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      multipleStatements: true,
    });

    conn.connect((err) => {
      if (err) throw err;
      console.log("MYSQL connected".cyan.underline);
    });
  } catch (error) {
    console.error(`Error : ${error.message}`.red.underline.bold);
    console.log(error);
    connection.end();
  }
};

export default connectDB;
