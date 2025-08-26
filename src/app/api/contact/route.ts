import { NextResponse } from "next/server";
export const runtime = "nodejs"; // ensure Node runtime (Nodemailer not supported on Edge)
import nodemailer from "nodemailer";
import * as React from "react";
import { render } from "@react-email/render";
import ContactAck from "@/app/email/ContactAck";

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

    // Verify SMTP connection first
    try {
      await transporter.verify();
    } catch (e) {
      console.error("CONTACT_SMTP_VERIFY_FAILED", e);
      return NextResponse.json(
        { ok: false, error: "SMTP verification failed. Check SMTP credentials and network." },
        { status: 500 }
      );
    }

    const to = CONTACT_TO || "arabdull.dev@gmail.com";
    const origin =
      req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "";
    const SITE_NAME = "Rizwani Solutions Founder and CEO";
    const SITE_LOGO_PATH =
      process.env.NEXT_PUBLIC_SITE_LOGO_PATH || "/next.svg"; // consider replacing with your logo path in /public
    const logoUrl = origin ? `${origin}${SITE_LOGO_PATH}` : SITE_LOGO_PATH;

    const html = `
      <div style="background:#f6f7f9;padding:24px;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;padding:28px;border:1px solid #e5e7eb;">
          <div style="text-align:center;margin-bottom:16px;">
            <img src="${logoUrl}" alt="${SITE_NAME}" width="120" style="max-width:120px;height:auto;display:inline-block" />
          </div>
          <h2 style="font-size:18px;line-height:1.4;margin:0 0 8px 0;color:#111827;">New Contact Message</h2>
          <p style="margin:0 0 4px 0;color:#374151;"><strong>From:</strong> ${firstName} ${lastName} <span>(${email})</span></p>
          ${phone ? `<p style="margin:0 0 4px 0;color:#374151;"><strong>Phone:</strong> ${phone}</p>` : ""}
          <p style="margin:0 0 12px 0;color:#374151;"><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top:8px;padding:12px;border:1px solid #e5e7eb;border-radius:8px;background:#fafafa;color:#111827;white-space:pre-wrap;">${message}</div>
        </div>
      </div>`;

    // Send notification to site owner
    let ownerSendOk = false;
    try {
      await transporter.sendMail({
        from: `Contact Form <${SMTP_USER}>`,
        to,
        replyTo: `${firstName} ${lastName} <${email}>`,
        subject: `[Contact] ${subject}`,
        html,
      });
      ownerSendOk = true;
    } catch (e) {
      console.error("CONTACT_OWNER_SEND_FAILED", e);
    }

    // Send acknowledgment to the sender using the React Email template
    let ackHtml = "";
    try {
      ackHtml = await render(
        React.createElement(ContactAck, {
          siteName: SITE_NAME,
          siteUrl: origin,
          logoUrl,
          firstName,
          message,
        })
      );
    } catch (e) {
      console.error("CONTACT_ACK_RENDER_FAILED", e);
    }

    let clientSendOk = false;
    if (ackHtml) {
      try {
        await transporter.sendMail({
          from: `${SITE_NAME} <${SMTP_USER}>`,
          to: email,
          subject: `We received your message — ${SITE_NAME}`,
          html: ackHtml,
        });
        clientSendOk = true;
      } catch (e) {
        console.error("CONTACT_CLIENT_SEND_FAILED", e);
      }
    }

    return NextResponse.json(
      {
        ok: ownerSendOk && clientSendOk,
        ownerSendOk,
        clientSendOk,
        message: ownerSendOk && clientSendOk
          ? "Thanks! We received your message and sent confirmations."
          : ownerSendOk
          ? "Owner notified, but failed to send client acknowledgment. Check server logs."
          : "Failed to send emails. Check server logs.",
      },
      { status: ownerSendOk ? 200 : 500 }
    );
  } catch (err) {
    console.error("CONTACT_API_ERROR", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
