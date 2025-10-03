import z from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(6, "Nama lu pendek amat bro!"),
    email: z.email(),
    password: z.string().min(6, "Password minimal 6"),
    confirmPassword: z.string().min(6, "Password minimal 6"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama!",
  });
