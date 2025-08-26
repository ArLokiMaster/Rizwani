"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/Rizwani Main Logo.jpg";
import dynamic from "next/dynamic";
import GlassSurface from "../GlassSurface/GlassSurface";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

const Orb = dynamic(() => import("@/components/Orb/Orb"), { ssr: false });

// Minimal inline brand glyphs to avoid external assets
const StripeGlyph = () => (
  <svg
    width="72"
    height="24"
    viewBox="0 0 72 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-90"
  >
    <rect width="72" height="24" rx="6" className="fill-white/5" />
    <text
      x="12"
      y="16"
      className="fill-white"
      fontSize="12"
      fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
    >
      Stripe
    </text>
  </svg>
);

const PayHereGlyph = () => (
  <svg
    width="92"
    height="24"
    viewBox="0 0 92 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-90"
  >
    <rect width="92" height="24" rx="6" className="fill-white/5" />
    <text
      x="10"
      y="16"
      className="fill-white"
      fontSize="12"
      fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
    >
      PayHere (LK)
    </text>
  </svg>
);

// Payment network simple SVG marks
const VisaMark = () => (
  <svg
    width="54"
    height="24"
    viewBox="0 0 54 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="54" height="24" rx="6" fill="rgba(255,255,255,0.06)" />
    <text
      x="12"
      y="16"
      fill="white"
      fontSize="12"
      fontFamily="Inter, system-ui"
    >
      VISA
    </text>
  </svg>
);
const MasterCardMark = () => (
  <svg
    width="72"
    height="24"
    viewBox="0 0 72 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="72" height="24" rx="6" fill="rgba(255,255,255,0.06)" />
    <circle cx="28" cy="12" r="6.5" fill="#F59E0B" />
    <circle cx="40" cy="12" r="6.5" fill="#EF4444" fillOpacity="0.9" />
  </svg>
);
const GPayMark = () => (
  <svg
    width="66"
    height="24"
    viewBox="0 0 66 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="66" height="24" rx="6" fill="rgba(255,255,255,0.06)" />
    <text
      x="12"
      y="16"
      fill="white"
      fontSize="12"
      fontFamily="Inter, system-ui"
    >
      GPay
    </text>
  </svg>
);
const ApplePayMark = () => (
  <svg
    width="76"
    height="24"
    viewBox="0 0 76 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="76" height="24" rx="6" fill="rgba(255,255,255,0.06)" />
    <text
      x="12"
      y="16"
      fill="white"
      fontSize="12"
      fontFamily="Inter, system-ui"
    >
      Apple Pay
    </text>
  </svg>
);

// Simple client wordmarks row
const ClientWordmarks = () => (
  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/70 text-sm">
    <span className="opacity-80">Aviate Travels</span>
    <span className="opacity-80">NenoPix</span>
    <span className="opacity-80">slack</span>
    <span className="opacity-80">HubSpot</span>
    <span className="opacity-80">fiverr.</span>
  </div>
);

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative w-full bg-black text-white/90 border-t border-white/10 overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-700/20 to-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-400/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 relative">
        {/* CTA block with vertical bars */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0B0C10] to-[#0E1117] p-8 sm:p-12 mb-12">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full">
            <Orb hue={0} hoverIntensity={0.25} rotateOnHover={false} />
          </div>
          {/* SVG bars backdrop for precise clone */}
          <div aria-hidden className="absolute inset-0">
            {/* <div className="absolute inset-x-0 bottom-0 h-[58%]">
              <BarsBackdrop className="w-full h-full" />
            </div> */}
            {/* Ambient glow */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] [mask-image:linear-gradient(to_top,black,transparent)] bg-[radial-gradient(120%_80%_at_50%_100%,rgba(16,185,129,0.35)_0%,transparent_60%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Build boldly. Ship surely.
            </h2>
            <p className="mt-3 text-white/70 text-base sm:text-lg">
              Tell us what you need—our senior engineers turn complex into clear
              and deliver with care.
            </p>
            <div className=" mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-full px-6 py-3 bg-white text-black font-medium hover:bg-white/90 transition-colors"
              >
                Start your project
              </Link>
              <GlassSurface
                height={50}
                borderRadius={150}
                className="rounded-full"
              >
                <Link href="/contact">Talk to an expert</Link>
              </GlassSurface>
            </div>
            {/* Orb CTA mini-section */}
            <div className="mt-8 mx-auto max-w-3xl">
              <div className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  Once the project is confirmed, we will provide a super-control
                  admin panel for seamless connection and management{" "}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div className="text-xs uppercase tracking-widest text-white/50 mb-3">
                Trusted by teams
              </div>
              <ClientWordmarks />
            </div>
          </div>
        </section>

        {/* top row: brand and payments summary */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-4">
            <Image
              src={Logo}
              alt="Company Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-semibold tracking-tight">
                Rizwani Solutions
              </span>
              <span className="text-sm text-white/70">
                Engineering clarity. Delivering outcomes.
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-3">
            <div className="text-xs uppercase tracking-wider text-white/60">
              Payments via
            </div>
            <div className="flex items-center gap-3">
              <PayHereGlyph />
              <StripeGlyph />
            </div>
            <div className="flex items-center flex-wrap gap-2 pt-1 opacity-90">
              <VisaMark />
              <MasterCardMark />
              <GPayMark />
              <ApplePayMark />
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* bottom row with enhanced content */}
        <div className="space-y-6">
          {/* Social & Contact Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              {/* Contact Info */}
              <div className="flex items-center gap-4 text-sm text-white/70">
                <a
                  href="mailto:hello@rizwani.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  support@rizwani.com
                </a>
                <a
                  href="tel:+94123456789"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +94 76 896 5529
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/60">Follow us:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/rizwani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/company/rizwani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com/rizwani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 hover:scale-105"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com/rizwani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 hover:scale-105"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright & Navigation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="text-sm text-white/60">
              © {year} Rizwani Solutions. All rights reserved.
            </div>
            <nav className="flex flex-wrap items-center gap-4 text-sm">
              <Link
                href="/about"
                className="text-white/70 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white/70 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="text-white/80 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-white/60 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-white transition-colors"
              >
                Terms
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
