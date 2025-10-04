import express from "express";
import { getUser, login, register } from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddleware";

const authRoute = express.Router();

authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.get("/user", authMiddleware, getUser);

export default authRoute;
