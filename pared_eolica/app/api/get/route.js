import { NextResponse } from 'next/server';
import prisma from '@/libs/prisma';

export async function GET(req) {
  try {
    // Fetch the latest added record from your database
    const latestData = await prisma.propellerData.findFirst({
      orderBy: {
        id: 'desc',
      },
    });

    if (!latestData) {
      const response = NextResponse.json({ message: 'No data found' }, { status: 404 });
      response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      response.headers.set('Pragma', 'no-cache');
      response.headers.set('Expires', '0');
      return response;
    }

    const response = NextResponse.json(latestData, { status: 200 });
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    return response;
  } catch (error) {
    const response = NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    return response;
  }
}
