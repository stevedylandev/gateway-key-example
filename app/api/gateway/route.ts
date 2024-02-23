import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()
    console.log(body)
    const stream = await fetch(`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${body.cid}?pinataGatewayToken=${process.env.GATEWAY_KEY}`)
    const buffer: any = await stream.arrayBuffer()
    return new NextResponse(buffer);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ "server error": error });
  }
}
