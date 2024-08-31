import { sql, db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await sql 
  `select * from PropellerData`;

  return NextResponse.json({ data });
}