import { NextRequest, NextResponse } from "next/server";
import { saveSession, getSessions, getSession, deleteSession } from "@/lib/kv";
import { SessionLog } from "@/lib/types";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (id) {
    const session = await getSession(id);
    if (!session) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(session);
  }
  const countParam = req.nextUrl.searchParams.get("count");
  const count = countParam ? Number.parseInt(countParam, 10) : undefined;
  return NextResponse.json(await getSessions(count));
}

export async function POST(req: NextRequest) {
  const session: SessionLog = await req.json();

  if (!session.id || !session.dayType || !session.date || !session.exercises) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  await saveSession(session);
  return NextResponse.json({ ok: true, id: session.id });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  await deleteSession(id);
  return NextResponse.json({ ok: true });
}
