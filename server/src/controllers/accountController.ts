import { Request, Response } from "express";
import { accountSchema } from "../schemas/account";
import { errorResponse, successResponse } from "../utils/response";
import { prisma } from "../config/db";

// CREATE
export const createAccount = async (req: Request, res: Response) => {
  const parse = accountSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({
      errors: parse.error.flatten().fieldErrors,
    });
  }
  const { name, type, currency, balance = 0, note } = parse.data;

  if (!req.user?.id) {
    return errorResponse(res, "User belum login", 401);
  }

  await prisma.account.create({
    data: {
      userId: req.user.id,
      name,
      type,
      currency,
      balance: BigInt(balance),
      note,
    },
  });

  return successResponse(res, "Berhasil dibuat", 200);
};
