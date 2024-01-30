import { PrismaClient } from "@prisma/client";
import type { User } from "@/types";
import { hash } from "@/utils/Password";

const prisma = new PrismaClient();

export const create = async (data: User) => {
  const user: User = {
    name: data.name,
    password: await hash(data.password),
    username: data.username,
    role: data.role,
  };
  const res = await prisma.users.create({
    data: user,
  });
  return res;
};

export const update = async (data: User, id: string) => {
  const user: User = {
    name: data.name,
    password: await hash(data.password),
    username: data.username,
    role: data.role,
  };
  const res = await prisma.users.update({
    where: {
      id: id,
    },
    data: user,
  });
  return res;
};

export const remove = async (id: string) => {
  const res = await prisma.users.delete({ where: { id: id } });
  return res;
};

export const find = async (id: string) => {
  const res = await prisma.users.findFirst({ where: { id: id } });
  return res;
};

export const where = async (where: { [key: string]: string }) => {
  const res = await prisma.users.findFirst({ where: where });
  return res;
};

export const all = async () => {
  const res = await prisma.users.findMany();
  return res;
};
