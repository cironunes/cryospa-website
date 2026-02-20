import { getPayload } from "payload";
import config from "@payload-config";
import { runMigration } from "@/scripts/migrate-blog-posts";
import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/migrate-blog — one-time migration of 54 blog posts from cryospaclinics.com.au.
 * Run with: curl -X POST http://localhost:3000/api/migrate-blog
 * Add ?update=1 to overwrite existing posts (content, images, author).
 */
export async function POST(request: NextRequest) {
  try {
    const updateExisting = request.nextUrl.searchParams.get("update") === "1";
    const payload = await getPayload({ config });
    const stats = await runMigration(payload, undefined, { updateExisting });
    return NextResponse.json({
      ok: true,
      message: updateExisting
        ? "Blog migration finished (existing posts updated)."
        : "Blog migration finished.",
      updateExisting,
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
