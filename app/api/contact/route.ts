import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().max(150).optional().or(z.literal("")),
  email: z.string().email().max(200),
  message: z.string().min(10).max(5000),
  ttf_ms: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const raw = Object.fromEntries(formData.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 });
    }
    const { name, company = "", email, message, ttf_ms } = parsed.data;

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
    if (ttf_ms) params.set("ttf_ms", ttf_ms);

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


