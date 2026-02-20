import { getPayload } from "payload";
import config from "@payload-config";
import { runMigration } from "@/scripts/migrate-blog-posts";
import { NextResponse } from "next/server";

/**
 * POST /api/migrate-blog — one-time migration of 54 blog posts from cryospaclinics.com.au.
 * Run with: curl -X POST http://localhost:3000/api/migrate-blog
 */
export async function POST() {
  try {
    const payload = await getPayload({ config });
    const stats = await runMigration(payload);
    return NextResponse.json({
      ok: true,
      message: "Blog migration finished.",
      ...stats,
    });
  } catch (err) {
    console.error("Blog migration error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Migration failed" },
      { status: 500 },
    );
  }
}
