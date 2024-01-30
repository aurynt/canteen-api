import { PrismaClient } from "@prisma/client";
import type { Variant } from "@/types";

const prisma = new PrismaClient();

export const create = async (data: Variant) => {
  const res = await prisma.variant.create({
    data: data,
  });
  return data;
};

export const update = async (data: Variant, id: string) => {
  const res = await prisma.variant.update({
    data: data,
    where: {
      id: id,
    },
  });
  return res;
};

export const remove = async (id: string) => {
  const res = await prisma.variant.delete({ where: { id: id } });
  return res;
};

export const find = async (id: string) => {
  const res = await prisma.variant.findFirst({ where: { id: id } });
  return res;
};

export const where = async (where: { [key: string]: string }) => {
  const res = await prisma.variant.findFirst({ where: where });
  return res;
};

export const all = async () => {
  const res = await prisma.variant.findMany();
  return res;
};
