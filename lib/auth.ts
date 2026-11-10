import { timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const WRITE_KEY_HEADER = "x-write-key";

/** Returns an error response unless the request carries the APP_WRITE_KEY secret. Fails closed if unset. */
export function requireWriteKey(req: NextRequest): NextResponse | null {
  const expected = process.env.APP_WRITE_KEY;
  if (!expected) {
    return NextResponse.json({ error: "APP_WRITE_KEY is not configured on the server" }, { status: 503 });
  }
  const given = req.headers.get(WRITE_KEY_HEADER) ?? "";
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
