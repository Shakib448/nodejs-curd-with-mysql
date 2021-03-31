import express from "express";
import {
  allEmployees,
  getEmployeesById,
  deleteEmployeeById,
  postEmployee,
  putEmployee,
} from "../controllers/employeeControllers.js";

const router = express.Router();

router.get("/", allEmployees);
router.post("/", postEmployee);
router.put("/", putEmployee);
router.get("/:id", getEmployeesById);
router.delete("/:id", deleteEmployeeById);

export default router;
