import { PrismaClient } from "@prisma/client";
import type { Menu } from "@/types";
const prisma = new PrismaClient();

export const create = async (data: Menu) => {
  const res = await prisma.menu.create({
    data: data,
  });
  return res;
};

export const update = async (data: Menu, id: string) => {
  const res = await prisma.menu.update({
    data: data,
    where: {
      id: id,
    },
  });

  return res;
};

export const remove = async (id: string) => {
  const res = await prisma.menu.delete({ where: { id: id } });
  return res;
};

export const find = async (id: string) => {
  const res = await prisma.menu.findFirst({ where: { id: id } });
  return res;
};

export const where = async (where: { [key: string]: string }) => {
  const res = await prisma.menu.findFirst({ where: where });
  return res;
};

export const all = async () => {
  const res = await prisma.menu.findMany({
    include: {
      variant: true,
    },
  });

  return res;
};
