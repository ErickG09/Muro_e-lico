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

export async function GET() {
    await connectMongoDB();
    const data = await WallData.find( {}, { _id: 0, __v: 0 } );
    return NextResponse.json(data, {status: 200});
}
