import mysql from "mysql";
import express from "express";

const PORT = process.env.PORT || 5000;

const app = express();

// Body parser
app.use(express.json());
