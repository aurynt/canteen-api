import { PrismaClient } from "@prisma/client";
import type { Pesanan } from "@/types";

const prisma = new PrismaClient();

export const create = async (data: Pesanan) => {
  const res = await prisma.pesanan.create({
    data: data,
  });
  return res;
};

export const update = async (data: Pesanan,id:string) => {
  const res = await prisma.pesanan.update({
    data: data,
    where: {
      id: data.id,
    },
  });
  return res;
};

export const remove = async (id: string) => {
  const res = await prisma.pesanan.delete({ where: { id: id } });
  return res;
};

export const find = async (id: string) => {
  const res = await prisma.pesanan.findFirst({ where: { id: id } });
  return res;
};

export const where = async (where: { [key: string]: string }) => {
  const res = await prisma.pesanan.findFirst({ where: where });
  return res;
};

export const all = async () => {
  const res = await prisma.pesanan.findMany({include:{menu:true}});
  return res;
};
