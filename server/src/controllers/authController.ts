import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../schemas/auth";
import { prisma } from "../config/db";
import argon2 from "argon2";
import { errorResponse, successResponse } from "../utils/response";
import jwt from "jsonwebtoken";
import { config } from "../config";
import { email } from "zod";

// REGISTER
export const register = async (req: Request, res: Response) => {
  const parse = registerSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({
      errors: parse.error.flatten().fieldErrors,
    });
  }

  const { name, email, password } = parse.data;

  try {
    // Cek User
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (user) {
      return errorResponse(res, "Email sudah digunakan", 400);
    }

    // Hash Password
    const hashed = await argon2.hash(password, { hashLength: 24 });

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
      },
    });

    successResponse(res, "Berhasil membuat akun", 200);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Internal server error",
    });
  }
};

// LOGIN
export const login = async (req: Request, res: Response) => {
  const parse = loginSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({
      errors: parse.error.flatten(),
    });
  }
  const { email, password } = parse.data;

  // Cek User
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    return errorResponse(res, "Akun tidak ditemukan!", 404);
  }

  // Verify Password
  const verifyPassword = await argon2.verify(user.password, password);
  if (!verifyPassword) {
    return errorResponse(res, "Password salah bro!");
  }

  //  Generate Token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    config.secret_token,
    { expiresIn: "7d" }
  );

  res.cookie("cuanku_token", token, {
    secure: false,
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  successResponse(res, "Berhasil login", {
    token,
  });
};

// GET USER
export const getUser = async (req: Request, res: Response) => {
  if (!req.user?.id) {
    return errorResponse(res, "User belum login", 401);
  }

  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  if (!user) return errorResponse(res, "Akun tidak ditemukan", 404);

  return successResponse(res, "Berhasil fetch user", user);
};
