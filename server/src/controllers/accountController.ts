import { Request, Response } from "express";
import { accountSchema } from "../schemas/account";
import { errorResponse, successResponse } from "../utils/response";
import { prisma } from "../config/db";

// Convert BigInt to String
function serializeBigInt(obj: any) {
  return JSON.parse(
    JSON.stringify(obj, (_, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

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
    return errorResponse(res, "User belum login");
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

  return successResponse(res, "Berhasil dibuat");
};

// GET ALL
export const getAllAccounts = async (req: Request, res: Response) => {
  if (!req.user?.id) {
    return errorResponse(res, "User belum login");
  }

  const accounts = await prisma.account.findMany({
    where: { userId: req.user.id },
  });

  return successResponse(res, "Get all accounts", serializeBigInt(accounts));
};

// GET DETAIL
export const getDetailAccount = async (req: Request, res: Response) => {
  if (!req.user?.id) {
    return errorResponse(res, "User belum login");
  }

  const account = await prisma.account.findUnique({
    where: {
      id: req.params.id,
    },
  });
  if (!account) return errorResponse(res, "Tidak ditemukan");

  return successResponse(res, "List Account", serializeBigInt(account));
};

// UPDATE
export const updateAccount = async (req: Request, res: Response) => {
  const parse = accountSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({
      errors: parse.error.flatten().fieldErrors,
    });
  }
  const { name, type, currency, balance = 0, note } = parse.data;

  if (!req.user?.id) {
    return errorResponse(res, "User belum login");
  }

  const update = await prisma.account.update({
    where: {
      id: req.params.id,
      userId: req.user.id,
    },
    data: {
      userId: req.user.id,
      name,
      type,
      currency,
      balance: BigInt(balance),
      note,
    },
  });

  return successResponse(res, "Berhasil update", serializeBigInt(update));
};

// DELETE ACCOUNT
export const deleteAccount = async (req: Request, res: Response) => {
  if (!req.user?.id) {
    return errorResponse(res, "User belum login");
  }

  const account = await prisma.account.delete({
    where: {
      id: req.params.id,
      userId: req.user.id,
    },
  });
  if (!account) return errorResponse(res, "Tidak ditemukan");

  return successResponse(res, "Delete Account");
};
