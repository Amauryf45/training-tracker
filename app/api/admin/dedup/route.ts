import { NextRequest, NextResponse } from "next/server";
import { deduplicateSessionList } from "@/lib/kv";
import { requireWriteKey } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const denied = requireWriteKey(req);
  if (denied) return denied;

  const removed = await deduplicateSessionList();
  return NextResponse.json({ ok: true, duplicatesRemoved: removed });
}
