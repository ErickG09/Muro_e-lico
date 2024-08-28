import connectMongoDB from "@/libs/mongodb";
import WallData from "@/models/wallData";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { propeller1,
            propeller2,
            propeller3,
            propeller4,
            propeller5
     } = await request.json();
     
    await connectMongoDB();
    await WallData.create({ propeller1, 
                            propeller2, 
                            propeller3, 
                            propeller4, 
                            propeller5
     });
     return NextResponse.json({message: "Data saved"}, {status: 201});
}