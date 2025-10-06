import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  createAccount,
  deleteAccount,
  getAllAccounts,
  getDetailAccount,
  updateAccount,
} from "../controllers/accountController";

const accountRoute = express.Router();

accountRoute.post("/", authMiddleware, createAccount);
accountRoute.get("/", authMiddleware, getAllAccounts);
accountRoute.get("/:id", authMiddleware, getDetailAccount);
accountRoute.put("/:id", authMiddleware, updateAccount);
accountRoute.delete("/:id", authMiddleware, deleteAccount);

export default accountRoute;
