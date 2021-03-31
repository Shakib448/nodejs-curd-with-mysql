import express from "express";
import { allEmployees } from "../controllers/employeeControllers.js";

const router = express.Router();

router.get("/", allEmployees);

export default router;
