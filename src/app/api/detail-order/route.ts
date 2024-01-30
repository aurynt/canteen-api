import { all, create, remove } from "@/lib/DetailOrder";
import { User } from "@/types";
import { pesanan } from "@/utils/validation";

export async function GET() {
  const data = await all();
  return Response.json({ data: data });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    pesanan.parse(data);
    const res = await create(data);
    return Response.json(res);
  } catch (err) {
    return Response.json(err);
  }
}


