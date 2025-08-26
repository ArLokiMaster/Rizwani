"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

type Status = "idle" | "submitting" | "success" | "error";
type Channel = "email" | "whatsapp";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [channel, setChannel] = useState<Channel>("email");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMsg, setServerMsg] = useState<string>("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Project inquiry");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      !!firstName.trim() &&
      !!phone.trim() &&
      !!email.trim() &&
      /.+@.+\..+/.test(email) &&
      !!message.trim() &&
      consent
    );
  }, [firstName, phone, email, message, consent]);

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!firstName.trim()) next.firstName = "First name is required";
    if (!email.trim()) next.email = "Email is required";
    else if (!/.+@.+\..+/.test(email)) next.email = "Enter a valid email";
    if (!phone.trim()) next.phone = "Phone number is required";
    if (!message.trim()) next.message = "Message is required";
    if (!consent) next.consent = "You must agree before sending";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function clearForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setSubject("Project inquiry");
    setMessage("");
    setConsent(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setServerMsg("");
    try {
      if (channel === "whatsapp") {
        const recipient = "94768965529"; // hotline
        const fullName = `${firstName}${lastName ? ` ${lastName}` : ""}`;
        const raw = [
          "🟢 New inquiry via Website",
          "",
          `👤 Name: ${fullName}`,
          `📧 Email: ${email}`,
          `📞 Phone: ${phone}`,
          "",
          `📝 Subject: ${subject}`,
          "",
          "💬 Message:",
          message,
        ].join("\n");
        const url = `https://wa.me/${recipient}?text=${encodeURIComponent(
          raw
        )}`;
        window.open(url, "_blank");
        setStatus("success");
        setServerMsg("Opening WhatsApp… You can send your message there.");
        clearForm();
        return;
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          subject,
          message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok)
        throw new Error(data?.error || "Failed to send");
      setStatus("success");
      if (data?.message) setServerMsg(data.message);
      clearForm();
    } catch (err) {
      setStatus("error");
      setServerMsg("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10 space-y-6">
      {/* Send via selector */}
      <div>
        <div className="mb-2 text-sm text-white/70">Send via</div>
        <div className="inline-flex rounded-lg border border-white/10 bg-white/5 p-1">
          <button
            type="button"
            onClick={() => setChannel("email")}
            className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
              channel === "email"
                ? "bg-emerald-500 text-black"
                : "text-white/80 hover:bg-white/10"
            }`}
          >
            Email
          </button>
          <button
            type="button"
            onClick={() => setChannel("whatsapp")}
            className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
              channel === "whatsapp"
                ? "bg-emerald-500 text-black"
                : "text-white/80 hover:bg-white/10"
            }`}
          >
            WhatsApp
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            className="block text-sm text-white/70 mb-1"
            htmlFor="firstName"
          >
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            className={`w-full rounded-lg border bg-black/40 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/50 ${
              errors.firstName ? "border-red-500/60" : "border-white/10"
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-400">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label
            className="block text-sm text-white/70 mb-1"
            htmlFor="lastName"
          >
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            className={`w-full rounded-lg border bg-black/40 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/50 ${
              errors.lastName ? "border-red-500/60" : "border-white/10"
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-400">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/70 mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={`w-full rounded-lg border bg-black/40 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/50 ${
              errors.email ? "border-red-500/60" : "border-white/10"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1" htmlFor="phone">
            Phone (required)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+94 76 896 5529"
            className={`w-full rounded-lg border bg-black/40 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/50 ${
              errors.phone ? "border-red-500/60" : "border-white/10"
            }`}
          />
          <p className="mt-1 text-xs text-white/60">
            WhatsApp number recommended for faster support.
          </p>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm text-white/70 mb-1" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Project inquiry"
          className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/50"
        />
      </div>

      <div>
        <label className="block text-sm text-white/70 mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project, timeline, and goals..."
          className={`w-full rounded-lg border bg-black/40 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/50 ${
            errors.message ? "border-red-500/60" : "border-white/10"
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className={`mt-1 h-4 w-4 rounded border bg-black/40 text-emerald-500 focus:ring-emerald-400/50 ${
            errors.consent ? "border-red-500/60" : "border-white/20"
          }`}
        />
        <label htmlFor="consent" className="text-sm text-white/70">
          I agree to the{" "}
          <a href="/terms" className="text-white hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-white hover:underline">
            Privacy Policy
          </a>
          .
        </label>
      </div>
      {errors.consent && (
        <p className="-mt-2 text-xs text-red-400">{errors.consent}</p>
      )}

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-white/50">
          We’ll get back within 1–2 business days.
        </p>
        <button
          type="submit"
          disabled={status === "submitting" || !canSubmit}
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-400/90 text-black font-medium px-4 py-2.5 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting"
            ? channel === "email"
              ? "Sending Email..."
              : "Opening WhatsApp..."
            : status === "success"
            ? "Sent!"
            : channel === "email"
            ? "Send via Email"
            : "Send via WhatsApp"}
        </button>
      </div>

      {status === "error" && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 px-3 py-2 text-sm">
          Failed to send. Please try again or choose another channel.
        </div>
      )}
      {status === "success" && (
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-200 px-3 py-2 text-sm">
          {serverMsg ||
            "Thanks! Your message has been sent. We'll contact you ASAP."}
        </div>
      )}
    </form>
  );
}
