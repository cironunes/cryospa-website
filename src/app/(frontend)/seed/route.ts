import { seed } from "@/seed";
import { NextResponse } from "next/server";

/**
 * POST /seed — run full seed (admin, services, testimonials, team members, blog from old site).
 * Start the dev server (pnpm dev) then: curl -X POST http://localhost:3000/seed
 * Or run: pnpm seed (which calls this endpoint).
 */
export async function POST() {
  try {
    const result = await seed();
    return NextResponse.json({ ok: true, ...result });
  } catch (err) {
    console.error("Seed error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Seed failed" },
      { status: 500 },
    );
  }
}
