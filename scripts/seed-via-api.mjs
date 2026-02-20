#!/usr/bin/env node
/**
 * Run seed via the Next.js API so Payload loads in the app context (avoids loadEnv/tsx issues).
 * Start the dev server first: pnpm dev
 * Then run: pnpm seed  (or node scripts/seed-via-api.mjs)
 */

async function findDevServerPort() {
  if (process.env.SEED_URL) return process.env.SEED_URL;
  
  const ports = [3000, 3001, 3002, 3003, 3004, 3005];
  for (const port of ports) {
    try {
      const res = await fetch(`http://localhost:${port}/`, { method: "GET" });
      const text = await res.text();
      // Check if it's the Cryospa website
      if (text.toLowerCase().includes("cryospa")) {
        return `http://localhost:${port}/seed`;
      }
    } catch (e) {
      // Ignore connection refused, etc.
    }
  }
  return null;
}

async function main() {
  const url = await findDevServerPort();
  
  if (!url) {
    console.error("Cryospa dev server is not running. Start it first:\n  pnpm dev\n\nThen run:\n  pnpm seed");
    process.exit(1);
  }
  
  console.log(`Sending seed request to ${url} ...`);
  
  try {
    const res = await fetch(url, { method: "POST", redirect: "manual" });
    const text = await res.text();
    const contentType = res.headers.get("content-type") || "";
    
    if (contentType.includes("application/json")) {
      const data = JSON.parse(text);
      console.log(JSON.stringify(data, null, 2));
      if (!res.ok) process.exit(1);
    } else {
      // Server returned HTML or other non-JSON (e.g. 404 page or wrong route)
      const preview = text.slice(0, 120).replace(/\s+/g, " ");
      console.error(`Server returned ${res.status} with ${contentType}.`);
      console.error(`Preview: ${preview}...`);
      if (res.status >= 300 && res.status < 400) {
        const location = res.headers.get("location");
        console.error(`Redirect: ${location || "(no location)"}`);
      }
      console.error("\nMake sure the dev server is running the Cryospa app and the app has no route conflict with /seed.");
      process.exit(1);
    }
  } catch (err) {
    if (err.cause?.code === "ECONNREFUSED" || err.code === "ECONNREFUSED") {
      console.error("Dev server connection refused.");
    } else {
      console.error("Seed request failed:", err.message);
    }
    process.exit(1);
  }
}

main();
