import { cookies } from "next/headers";

export function middleware(req: Request) {
  if (!cookies().get("token")?.value) {
    return Response.json({
      message: "not login",
      auth: cookies().has("token"),
    });
  }
}
export const config = {
  matcher: "/about",
};
