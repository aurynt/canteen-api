import bcrypt from "bcrypt";

export async function hash(text: string) {
  return await bcrypt.hash(text, 10);
}

export async function compare(text: string, hash: string) {
  return await bcrypt.compare(text, hash);
}
