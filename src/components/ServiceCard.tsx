"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import PixelCard from "@/components/PixelCard/PixelCard";
import { useState } from "react";

export type ServiceCardTheme = "dark" | "green";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  keys: Array<{ name: string; desc?: string }>;
  isEven: boolean;
}

const baseCard =
  "relative rounded-2xl border transition-all duration-300 overflow-hidden";

const themes: Record<ServiceCardTheme, string> = {
  dark: "bg-zinc-900/70 border-zinc-800/80 hover:border-zinc-700/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)]",
  green:
    "bg-emerald-900/20 border-emerald-700/40 hover:border-emerald-500/60 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)] hover:shadow-[0_20px_70px_-10px_rgba(16,185,129,0.35)]",
};

const glowRing: Record<ServiceCardTheme, string> = {
  dark: "via-zinc-600/20 to-zinc-800/0",
  green: "via-emerald-400/30 to-emerald-600/0",
};

export default function ServiceCard({
  id,
  title,
  description,
  keys,
  isEven,
}: ServiceCardProps) {
  const theme = isEven ? "dark" : "green";
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.01, rotateX: 1, rotateY: -1 }}
      className={`relative group ${baseCard} will-change-transform`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {/* Pixel background layer */}
      <PixelCard
        variant={theme === "green" ? "blue" : "default"}
        className="z-0"
        fill
        noFocus
        active={hovered}
        speed={0.02}
      />

      {/* Neon ring on hover */}
      <div
        className={`pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-transparent ${glowRing[theme]} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100`}
        aria-hidden
      />

      {/* Foreground themed content */}
      <div
        className={`relative z-10 p-6 md:p-8 ${themes[theme]} h-full flex flex-col justify-between`}
      >
        {/* Glass gradient overlay for professional depth */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/6 via-white/3 to-transparent [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            {title}
          </h3>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>

          <ul className="mt-6 space-y-3">
            {keys?.map((k, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/80">
                <span
                  className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ${
                    theme === "green" ? "text-emerald-300" : "text-zinc-300"
                  }`}
                >
                  <HiCheck className="h-4 w-4" />
                </span>
                <span className="text-sm md:text-base">
                  {k.name}
                  {k.desc ? (
                    <span className="ml-1 text-white/50">— {k.desc}</span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/pricing"
            className={`inline-flex h-12 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold  transition-all ${
              theme === "green"
                ? "bg-emerald-600 hover:bg-emerald-500 shadow-[0_8px_30px_rgba(16,185,129,0.35)] text-white"
                : "bg-white hover:bg-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.4)] text-black"
            }`}
          >
            Pricing
          </Link>

          <Link
            href={`/services/${id}`}
            className="h-12 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm text-white backdrop-blur transition-all"
          >
            View More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
