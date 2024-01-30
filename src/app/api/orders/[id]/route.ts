import { find, update,remove } from "@/lib/Order";
import { pesan } from "@/utils/validation";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await find(params.id);
  return Response.json({ data });
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();
    pesan.parse(data);
    const res = await update(data, params.id);
    return Response.json(res);
  } catch (err) {
    return Response.json(err);
  }
}

export async function DELETE(req: Request,{ params }: { params: { id: string } }) {
  try {
    const res = await remove(params.id);
    return Response.json(res);
  } catch (err) {
    return Response.json(err);
  }
}