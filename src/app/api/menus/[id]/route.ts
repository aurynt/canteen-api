import { find, remove, update } from "@/lib/Menu";
import { Menu } from "@/types";
import { menu } from "@/utils/validation";
import { z } from "zod";

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
    const data: Menu = await req.json();
    menu.parse(data);
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