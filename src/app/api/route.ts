import { NextRequest } from "next/server";
import { sign } from "jsonwebtoken";
const key=process.env.SECRET_KEY as string
export async function GET() {
    const token=sign({
        name:'heri',
        password:'1234'
    },key)
    return Response.json({name:'hcbwkjv',token:token})
}