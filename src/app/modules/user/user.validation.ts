import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    password: z.string().min(6, "Password Must be at least 6 characters"),
    role: z.enum(["investor", "entrepreniur"]),
  }),
});
