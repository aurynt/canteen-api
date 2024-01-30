import { all, create, remove } from "@/lib/Order";
import { Order } from "@/types";
import { pesan } from "@/utils/validation";

export async function GET() {
  const data = await all();
  return Response.json({ data: data });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    pesan.parse(data);
    const res = await create(data);
    return Response.json(res);
  } catch (err) {
    return Response.json(err);
  }
}

export async function DELETE(req: Request) {
  try {
    const data: Order = await req.json();
    const res = await remove(data.id as string);
    return Response.json(res);
  } catch (err) {
    return Response.json(err);
  }
}
