import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { createAccount } from "../controllers/accountController";

const accountRoute = express.Router();

accountRoute.post("/", authMiddleware, createAccount);

export default accountRoute;
