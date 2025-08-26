import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Rizwani Solutions",
  description:
    "Contact us for project inquiries, partnerships, quotes, and support. We respond within 1–2 business days.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Rizwani Solutions",
    description:
      "Speak with our team about web, mobile, AI, and cloud projects.",
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-4.5rem)] md:min-h-[calc(100vh-5rem)] bg-gradient-to-b from-black via-[#0B0B0C] to-black">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 self-center rounded-full border border-white/10 bg-white/5 px-5 py-2 font-[inter] text-xs text-white/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            CONTACT
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Let’s build something great together
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Tell us about your project, timeline, and goals. We’ll get back
            within 1–2 business days.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 place-items-stretch max-sm:flex-col-reverse">
          {/* Left: Contact methods / info */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="p-6 sm:p-8 md:p-10 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Ways to reach us
                </h2>
                <p className="text-white/70 mt-1">
                  Prefer email or socials? We’re available.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:arabdull.dev@gmail.com"
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="text-sm text-white/60">Email</div>
                  <div className="mt-1 text-white font-medium">
                    arabdull.dev@gmail.com
                  </div>
                </a>
                <a
                  href="tel:+94728965529"
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="text-sm text-white/60">Phone</div>
                  <div className="mt-1 text-white font-medium">
                    072 896 5529
                  </div>
                </a>
                <a
                  href="tel:+94768965529"
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="text-sm text-white/60">Hotline</div>
                  <div className="mt-1 text-white font-medium">
                    +94 768 965 529
                  </div>
                </a>
                <div className="group rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-white/60">Base</div>
                  <div className="mt-1 text-white font-medium inline-flex items-center gap-2">
                    <span role="img" aria-label="Sri Lanka flag">
                      🇱🇰
                    </span>
                    Sri Lanka
                  </div>
                </div>
              </div>
              {/* Client panel & support */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-white">
                  Client Panel & Continuous Support
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  Every Rizwani client receives a secure dashboard to track
                  progress, share feedback, and chat with our team—backed by
                  ongoing support long after launch.
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
                    <img
                      src="/globe.svg"
                      alt="Dashboard"
                      className="mx-auto h-8 w-8 opacity-90"
                    />
                    <div className="mt-2 text-sm text-white">
                      Personal Dashboard
                    </div>
                    <div className="text-xs text-white/60">
                      Central hub for your project
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
                    <img
                      src="/file.svg"
                      alt="Updates"
                      className="mx-auto h-8 w-8 opacity-90"
                    />
                    <div className="mt-2 text-sm text-white">
                      Real‑time Updates
                    </div>
                    <div className="text-xs text-white/60">
                      Milestones, builds, notes
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
                    <img
                      src="/next.svg"
                      alt="Support"
                      className="mx-auto h-8 w-8 opacity-90"
                    />
                    <div className="mt-2 text-sm text-white">
                      Dedicated Support
                    </div>
                    <div className="text-xs text-white/60">
                      Our team is with you 24/7
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <p className="text-white/70 text-sm">
                  We respect your privacy. Your data will never be shared and is
                  used solely to respond to your inquiry.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />
          </div>

          {/* Right: Form */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <ContactForm />
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />
          </div>
        </div>

        {/* Map card */}
        <div className="relative h-[320px] sm:h-[380px] md:h-[420px] w-full mt-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15824.995622213679!2d80.20903579052141!3d7.437687558460981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3246e2a3b43bf%3A0x7638d4647992863d!2sNarammala!5e0!3m2!1sen!2slk!4v1756041560641!5m2!1sen!2slk"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full filter invert hue-rotate-180 saturate-150 contrast-125 brightness-90"
          />
        </div>
      </section>
    </main>
  );
}
