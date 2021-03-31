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
    throw new Error("Not found");
  }
};

// @Description Specific
// @routes /Get/api/employee/:id
// @access public

const employeesById = async (req, res) => {
  try {
    let sql = "SELECT * from employee WHERE EmpID = ?";
    connectDB.query(sql, [req.params.id], async (err, rows, fileds) => {
      if (err) throw err;
      res.send(rows);
    });
  } catch (error) {
    console.log(error);
    throw new Error("Not found");
  }
};

export { allEmployees, employeesById };
