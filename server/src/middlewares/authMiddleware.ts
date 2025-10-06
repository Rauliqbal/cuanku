import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["cuanku_token"];

  if (!token) return res.status(401).json({ message: "Token tidak ada" });

  try {
    const decoded = jwt.verify(token, config.secret_token);
    req.user = decoded as { id: string; email: string };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token tidak valid" });
  }
};
