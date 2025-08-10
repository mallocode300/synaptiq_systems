import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { ok: false, error: "Server not configured (N8N_WEBHOOK_URL)." },
        { status: 500 }
      );
    }

    // Use form-encoded body for compatibility with n8n Form Trigger endpoints
    const params = new URLSearchParams();
    params.set("name", name);
    params.set("company", company);
    params.set("email", email);
    params.set("message", message);
    params.set("source", "synaptiq-website");
    params.set("submittedAt", new Date().toISOString());

    const n8nResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: params.toString(),
    });

    if (!n8nResponse.ok) {
      const errText = await n8nResponse.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: `n8n error: ${n8nResponse.status} ${errText}` },
        { status: 502 }
      );
    }

    // Optionally pass through JSON from n8n
    // Most n8n Form endpoints respond with HTML; don't attempt to parse JSON
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected error" },
      { status: 500 }
    );
  }
}


