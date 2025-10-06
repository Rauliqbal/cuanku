import z from "zod";

export const accountSchema = z.object({
  name: z.string().min(3, "Name minimal 3 karakter"),
  type: z.string().optional(),
  currency: z.string().optional(),
  balance: z
    .number()
    .optional()
    .transform((val) => BigInt(val || 0)),
  note: z.string().optional(),
});
