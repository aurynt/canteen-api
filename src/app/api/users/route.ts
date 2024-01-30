import { all, create, remove } from "@/lib/Users";
import { User } from "@/types";
import { users } from "@/utils/validation";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function GET() {
  const data = await all();
  return Response.json({ data: data });
}

export async function POST(req: Request) {
  if(cookies().has('token')){
    try {
      const data = await req.json();
      users.parse(data);
      const res = await create(data);
      return Response.json(res);
    } catch (err) {
      return Response.json(err);
    }
  }
  return redirect('/api/sign-in')
}

export async function DELETE(req: Request) {
  try {
    const data: User = await req.json();
    const res = await remove(data.id as string);
    return Response.json(res);
  } catch (err) {
    return Response.json(err);
  }
}