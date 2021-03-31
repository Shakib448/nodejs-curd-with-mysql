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
// @routes /Delete/api/employee/:id
// @access public

const deleteEmployeeById = async (req, res) => {
  try {
    let sql = "DELETE FROM employee WHERE EmpID = ?";
    connectDB.query(sql, [req.params.id], async (err, rows, fileds) => {
      if (err) throw err;
      res.send("Deleted Successfully");
    });
  } catch (error) {
    console.log(error);
    throw new Error("Not found");
  }
};

// @Description POST Employee
// @routes /Post/api/employee/
// @access Private

const postEmployee = async (req, res) => {
  try {
    let emp = req.body;
    let sql =
      "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; CALL EmployeeAddOrEdit(@EmpID, @Name,@EmpCode, @Salary);";

    connectDB.query(
      sql,
      [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary],
      async (err, rows, fileds) => {
        if (err) throw err;
        rows.map((elem) => {
          if (elem.constructor === Array) {
            res.send(`Inserted Employee id is ${elem[0].EmpID}`);
          }
        });
      }
    );
  } catch (error) {
    console.log(error);
    throw new Error("Not found");
  }
};

// @Description PUT Employee
// @routes /PUT/api/employee/:id
// @access Private

const putEmployee = async (req, res) => {
  try {
    let emp = req.body;
    let sql =
      "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; CALL EmployeeAddOrEdit(@EmpID, @Name,@EmpCode, @Salary);";

    connectDB.query(
      sql,
      [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary],
      async (err, rows, fileds) => {
        if (err) throw err;
        res.send("Updated Successfully");
      }
    );
  } catch (error) {
    console.log(error);
    throw new Error("Not found");
  }
};

export {
  allEmployees,
  getEmployeesById,
  deleteEmployeeById,
  postEmployee,
  putEmployee,
};
