import express from "express";
import {
  allEmployees,
  getEmployeesById,
  deleteEmployeeById,
} from "../controllers/employeeControllers.js";

const router = express.Router();

router.get("/", allEmployees);
router.get("/:id", getEmployeesById);
router.delete("/:id", deleteEmployeeById);

export default router;
