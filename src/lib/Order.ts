import { PrismaClient } from "@prisma/client";
import type { Order } from "@/types";

const prisma = new PrismaClient();

export const create = async (data: Order) => {
  const res = await prisma.pesan.create({
    data: data,
  });
  return res;
};

export const update = async (data: Order, id: string) => {
  const res = await prisma.pesan.update({
    data: data,
    where: {
      id: id,
    },
  });
  return res;
};

export const remove = async (id: string) => {
  const res = await prisma.pesan.delete({ where: { id: id } });
  return res;
};

export const find = async (id: string) => {
  const res = await prisma.pesan.findFirst({ where: { id: id } });
  return res;
};

export const where = async (where: { [key: string]: string }) => {
  const res = await prisma.pesan.findFirst({ where: where });
  return res;
};

export const all = async () => {
  const res = await prisma.pesan.findMany({ include: { pesanan: true,user:true, } });
  return res;
};
