import { getPayload } from "payload";
import config from "@payload-config";
import { runMigration } from "@/scripts/migrate-blog-posts";

/**
 * One-time page to run blog migration. Visit /migrate-blog to run it.
 * Add ?update=1 to re-run and overwrite existing posts with cleaned content,
 * including featured images (downloaded and saved to media) and author (matched to team-members).
 * Takes 1–2 minutes (fetches 46 posts with rate limiting). Remove this page after use.
 */
type Props = { searchParams: Promise<{ update?: string }> };

export default async function MigrateBlogPage({ searchParams }: Props) {
  let result: { created: number; updated: number; skipped: number; failed: number } | null = null;
  let error: string | null = null;
  const params = await searchParams;
  const updateExisting = params?.update === "1";

  try {
    const payload = await getPayload({ config });
    result = await runMigration(payload, undefined, { updateExisting });
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
  }

  const isSchemaError =
    error &&
    (error.includes("CREATE INDEX") ||
      error.includes("site_settings") ||
      error.includes("Failed query"));

  return (
    <div className="container-custom py-20">
      <h1 className="text-2xl font-serif mb-6">Blog migration</h1>
      {error && (
        <div className="mb-4">
          <p className="text-red-600 mb-2">Error: {error}</p>
          {isSchemaError && (
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded text-sm text-slate-700">
              <p className="font-medium mb-2">Database schema may be out of sync (common with Payload + SQLite).</p>
              <p className="mb-2">Fix: reset the DB and restart, then run this migration again:</p>
              <pre className="bg-white p-3 rounded border overflow-x-auto">
                {`# from project root:
mv payload.db payload.db.bak   # optional backup
rm -f payload.db
pnpm dev
# then open /migrate-blog again`}
              </pre>
            </div>
          )}
        </div>
      )}
      {result && (
        <div className="space-y-2">
          <p className="text-sm text-slate-600">
            {updateExisting
              ? "Updated existing posts with cleaned content, featured images, and author."
              : "Migration complete."}{" "}
            Images are downloaded and saved to media; author is matched to team-members when possible. Testimonial author pages (8 slugs) are excluded and only redirect; no blog docs created for them.
          </p>
          <pre className="bg-slate-100 p-4 rounded text-sm">
            {JSON.stringify({ ok: true, updateExisting, ...result }, null, 2)}
          </pre>
        </div>
      )}
      {!result && !error && (
        <p>Run the migration by loading this page. If nothing happened, use the API: POST /api/migrate-blog</p>
      )}
    </div>
  );
}
