import { NextRequest, NextResponse } from "next/server";
import { saveSession, getLatestSessions } from "@/lib/kv";
import { SessionLog } from "@/lib/types";

export async function GET(req: NextRequest) {
  const count = parseInt(req.nextUrl.searchParams.get("count") || "10");
  const sessions = await getLatestSessions(count);
  return NextResponse.json(sessions);
}

export async function POST(req: NextRequest) {
  const session: SessionLog = await req.json();

  if (!session.id || !session.dayType || !session.exercises) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  await saveSession(session);
  return NextResponse.json({ ok: true, id: session.id });
}
