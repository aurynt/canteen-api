import { z } from "zod";

export const users = z.object({
  name: z.string(),
  password: z.string(),
  username: z.string(),
  role: z.enum(["admin", "guest"]),
});

export const menu = z.object({
  menu: z.string(),
  harga: z.number(),
});

export const variant = z.object({
  menuId: z.string(),
  name: z.string(),
});

export const pesan = z.object({
  usersId: z.string(),
});

export const pesanan = z.object({
  menuId: z.string(),
  pesanId: z.string(),
});

export const signIn = z.object({
  username: z.string(),
  password: z.string(),
});
