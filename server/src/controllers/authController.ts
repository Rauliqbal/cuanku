import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../schemas/auth";
import { prisma } from "../config/db";
import argon2 from "argon2";

// REGISTER
export const register = async (req: Request, res: Response) => {
  const parse = registerSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({
      errors: parse.error.flatten(),
    });
  }

  const { name, email, password } = parse.data;

  try {
    // Cek User
    const checkUser = await prisma.user.findFirst({
      where: { email },
    });
    if (checkUser) {
      return res.json(400).json({ message: "Email sudah dipakai" });
    }

    // Hash Password
    const hashed = await argon2.hash(password, { hashLength: 24 });

    const register = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
      },
    });

    res.status(200).json({
      success: true,
      message: "Berhasil membuat akun",
      // data: register,
    });
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

  try {
    const checkEmail = await prisma.user.findFirst({
      where: { email },
    });
    if (!checkEmail) {
      return res.json(404).json({ message: "Akun tidak ditemukan!" });
    }
  } catch (error) {}
};
