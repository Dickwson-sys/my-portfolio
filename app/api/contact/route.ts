import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Lazy-initialize so missing key only throws at request time, not build time
let resend: Resend;
function getResend(): Resend {
  if (!resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY is not set");
    resend = new Resend(key);
  }
  return resend;
}

export async function POST(req: NextRequest) {
  // CSRF / origin guard — only allow requests from your own domain
  const origin = req.headers.get("origin") ?? "";
  const host = req.headers.get("host") ?? "";
  const allowedOrigins = [
    `https://${host}`,
    `http://${host}`,
    "http://localhost:3000",
  ];
  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim().toLowerCase();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // Escape HTML to prevent injection in the email body
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `
    <!DOCTYPE html>
    <html>
      <body style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:32px;color:#111;">
        <p style="font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#ef4d23;font-weight:600;margin:0 0 24px;">
          New Portfolio Message
        </p>
        <h2 style="font-size:22px;font-weight:700;margin:0 0 24px;">
          Message from ${esc(name)}
        </h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <tr>
            <td style="padding:10px 14px;background:#f5f5f4;border-radius:8px 8px 0 0;font-size:12px;color:#777;font-weight:600;text-transform:uppercase;letter-spacing:.08em;">
              Name
            </td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px;font-size:15px;">
              ${esc(name)}
            </td>
          </tr>
        </table>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <tr>
            <td style="padding:10px 14px;background:#f5f5f4;border-radius:8px 8px 0 0;font-size:12px;color:#777;font-weight:600;text-transform:uppercase;letter-spacing:.08em;">
              Email
            </td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px;font-size:15px;">
              <a href="mailto:${esc(email)}" style="color:#ef4d23;">${esc(email)}</a>
            </td>
          </tr>
        </table>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 14px;background:#f5f5f4;border-radius:8px 8px 0 0;font-size:12px;color:#777;font-weight:600;text-transform:uppercase;letter-spacing:.08em;">
              Message
            </td>
          </tr>
          <tr>
            <td style="padding:14px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px;font-size:15px;line-height:1.6;white-space:pre-wrap;">
              ${esc(message)}
            </td>
          </tr>
        </table>
        <p style="margin-top:32px;font-size:12px;color:#aaa;">
          Sent from your portfolio contact form · MacDickson Dziedorm
        </p>
      </body>
    </html>
  `;

  try {
    const { error } = await getResend().emails.send({
      from: "Portfolio Contact <onboarding@resend.app>",
      to: "haeldick@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
