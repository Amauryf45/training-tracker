import { NextRequest, NextResponse } from "next/server";
import { getRoutine, updateRoutine } from "@/lib/kv";
import { Routine } from "@/lib/types";

export async function GET() {
  const routine = await getRoutine();
  return NextResponse.json(routine);
}

export async function PUT(req: NextRequest) {
  const routine: Routine = await req.json();
  await updateRoutine(routine);
  return NextResponse.json({ ok: true });
}
