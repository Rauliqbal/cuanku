import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  createAccount,
  getAllAccounts,
} from "../controllers/accountController";

const accountRoute = express.Router();

accountRoute.post("/", authMiddleware, createAccount);
accountRoute.get("/", authMiddleware, getAllAccounts);

export default accountRoute;
