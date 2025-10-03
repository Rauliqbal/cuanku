import express from "express";
import { register } from "../controllers/authController";

const authRoute = express.Router();

authRoute.post("/register", register);

export default authRoute;
