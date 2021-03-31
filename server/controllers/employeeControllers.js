import connectDB from "../config/db.js";

// @Description All Employee
// @routes /Get/api/employee
// @access public

const allEmployees = async (req, res) => {
  try {
    let sql = "SELECT * from employee";
    connectDB.query(sql, (err, rows, fileds) => {
      if (err) throw err;
      res.send(rows);
    });
  } catch (error) {
    console.log(error);
  }
};

export { allEmployees };
