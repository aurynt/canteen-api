import { find, remove, update } from "@/lib/Users";
import { users } from "@/utils/validation";


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
    users.parse(data);
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