import { cookies } from "next/headers";

export function POST() {
  cookies().delete("token");
}
export async function GET(req: Request) {
  try {
    cookies().delete("token");
    return Response.json({
      message: "sign-out",
      login: cookies().has("token"),
    });
  } catch (err) {
    return Response.json({ err });
  }
}
