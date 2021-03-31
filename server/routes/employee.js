import express from "express";
import {
  allEmployees,
  employeesById,
} from "../controllers/employeeControllers.js";

const router = express.Router();

router.get("/", allEmployees);
router.get("/:id", employeesById);

export default router;
