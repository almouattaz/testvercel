// app/api/slow/route.ts
export const runtime = "nodejs"; // still can be suspended/terminated if it runs too long

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function GET() {
  // Simulate a long job (e.g., heavy processing, big upload, slow upstream)
  await sleep(30_000); // 30s

  return Response.json({ ok: true, waitedMs: 30_000 });
}
