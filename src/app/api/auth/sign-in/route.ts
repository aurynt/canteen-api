import { where } from "@/lib/Users";
import { User } from "@/types";
import { compare } from "@/utils/Password";
import { signIn } from "@/utils/validation";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";

const key = process.env.SECRET_KEY as string;

export async function POST(req: Request) {
  try {
    const data = await req.json();
    signIn.parse(data);
    const res = (await where({ username: data.username })) as User;
    const comparePassword = await compare(data.password, res.password);
    if (comparePassword) {
      const token = sign(res, key);
      // cookies().set("token", token);
      return Response.json(res);
    }
  } catch (err) {
    return Response.json({ err });
  }
}
