import z from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(6, "Nama lu pendek amat bro!"),
    email: z.email("Inimah bukan email bro!"),
    password: z.string().min(6, "Password minimal 6"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama!",
    path: ["confirmPassword"],
  });

export const loginSchema = z
  .object({
    email: z.email("Inimah bukan email lu bro!"),
    password: z.string().min(6, "Password minimal 6"),
    confirmPassword: z.string(),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: "Password tidak sama!",
    path: ["confirmPassword"],
  });
