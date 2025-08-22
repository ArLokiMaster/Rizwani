import { NextResponse } from "next/server";
export const runtime = "nodejs"; // ensure Node runtime (Nodemailer not supported on Edge)
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      subject = "Contact Form",
      message = "",
    } = body || {};

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Expect SMTP creds in env
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } =
      process.env as Record<string, string | undefined>;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env and restart the server.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const to = CONTACT_TO || "arabdull.dev@gmail.com";

    const html = `
      <div style="font-family:Inter,ui-sans-serif,system-ui;line-height:1.6;color:#111">
        <h2 style="margin:0 0 8px 0;">New Contact Message</h2>
        <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Subject:</strong> ${subject}</p>
        <p style="white-space:pre-wrap">${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `Contact Form <${SMTP_USER}>`,
      to,
      subject: `[Contact] ${subject}`,
      html,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("CONTACT_API_ERROR", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
