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

// @Description Employee by Id
// @routes /Get/api/employee/:id
// @access public

const getEmployeesById = async (req, res) => {
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

// @Description Delete Employee by Id
// @routes /Get/api/employee/:id
// @access public

const deleteEmployeeById = async (req, res) => {
  try {
    let sql = "DELETE employee WHERE EmpID = ?";
    connectDB.query(sql, [req.params.id], async (err, rows, fileds) => {
      if (err) throw err;
      res.send("Deleted Successfully");
    });
  } catch (error) {
    console.log(error);
    throw new Error("Not found");
  }
};

export { allEmployees, getEmployeesById, deleteEmployeeById };
