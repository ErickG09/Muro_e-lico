import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(request) {
    try {
      const data = await request.json();
      const { propeller1, propeller2, propeller3, propeller4, propeller5 } = data;
  
      const result = await prisma.propellerData.create({
        data: {
          propeller1,
          propeller2,
          propeller3,
          propeller4,
          propeller5,
        },
      });
  
      return NextResponse.json({ result });
    } catch (error) {
      console.error(error);

      return NextResponse.json({ message: "Error creating data" }, { status: 500 });
    }
}

export async function GET() {
    try {
      const data = await prisma.propellerData.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
  
      return NextResponse.json({ data });
    } catch (error) {
      console.error(error);

      return NextResponse.json({ message: "Error getting data" }, { status: 500 });
    }
}