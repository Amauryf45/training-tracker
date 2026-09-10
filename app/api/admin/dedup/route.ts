import { NextResponse } from "next/server";
import { deduplicateSessionList } from "@/lib/kv";

export async function POST() {
  const removed = await deduplicateSessionList();
  return NextResponse.json({ ok: true, duplicatesRemoved: removed });
}
