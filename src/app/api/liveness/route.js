import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "✅ sky-gameroom Liveness OK!",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
}
