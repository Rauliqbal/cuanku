import { Request, Response } from "express";
import { registerSchema } from "../schemas/auth";

// REGISTER
export const register = (req: Request, res: Response) => {
  const parse = registerSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({
      errors: parse.error.flatten().fieldErrors,
    });
  }
};
