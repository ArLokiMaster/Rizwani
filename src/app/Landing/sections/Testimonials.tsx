"use client";
import React from "react";
import { motion } from "framer-motion";
import { Marquee } from "@/components/magicui/marquee";
import { Star, StarHalf, StarOff } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number; // 0-5, supports halves (e.g., 4.5)
};

const ROW_1: Testimonial[] = [
  {
    quote:
      "This transformed my journey—thoughtful guidance, clear steps, and a human touch at every moment.",
    name: "Aisha Khan",
    role: "Happy Customer",
    avatar: "https://i.pravatar.cc/150?img=15",
    rating: 5,
  },
  {
    quote:
      "I felt truly supported from day one. They listened, adapted, and delivered beyond my expectations.",
    name: "Marcus Lee",
    role: "Founder",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 4.5,
  },
  {
    quote:
      "A service that touched my heart—professional yet warm. It made a real difference for our team.",
    name: "Elena Rossi",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 4.5,
  },
  {
    quote:
      "An experience I’ll never forget. Calm, competent, and compassionate throughout the process.",
    name: "Daniel Park",
    role: "Creator",
    avatar: "https://i.pravatar.cc/150?img=23",
    rating: 5,
  },
];

const ROW_2: Testimonial[] = [
  {
    quote:
      "This changed my perspective—simple, clear, and genuinely empowering at every step.",
    name: "Sophia Patel",
    role: "Designer",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
  {
    quote:
      "I felt seen and valued. They cared about the outcome as much as we did, and it shows.",
    name: "Diego Rivera",
    role: "Happy Customer",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 4.5,
  },
  {
    quote:
      "Deeply human and thoughtful. The little details and consistent follow‑through won my trust.",
    name: "Lina Chen",
    role: "Founder",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 4.5,
  },
  {
    quote:
      "Guidance I could trust—steady, transparent, and focused on what truly mattered.",
    name: "Noah Williams",
    role: "Entrepreneur",
    avatar: "https://i.pravatar.cc/150?img=29",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  const stars = [1, 2, 3, 4, 5].map((n) => {
    const diff = rating - n;
    const isFull = diff >= 0;
    const isHalf = diff > -1 && diff < 0;
    return (
      <span key={n} aria-hidden="true">
        {isFull ? (
          <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300 fill-yellow-300" />
        ) : isHalf ? (
          <StarHalf className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300" />
        ) : (
          <StarOff className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300/40" />
        )}
      </span>
    );
  });
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`Rated ${rating} out of 5`}
    >
      {stars}
    </div>
  );
}

function Card({ t, i }: { t: Testimonial; i: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.4, delay: i * 0.06 }}
      className="relative w-[260px] sm:w-[300px] shrink-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/20 hover:via-white/10"
    >
      <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm p-4 sm:p-5 h-full">
        {(() => {
          const palettes = [
            { from: "#93C5FD", to: "#C4B5FD" }, // light blue -> light purple
            { from: "#A7F3D0", to: "#FDE68A" }, // mint -> soft yellow
            { from: "#FBCFE8", to: "#BAE6FD" }, // pink -> pale sky
            { from: "#E9D5FF", to: "#BFDBFE" }, // lavender -> blue-200
          ];
          const palette = palettes[i % palettes.length];
          const duration = 5 + (i % 3) * 1.25; // 5s, 6.25s, 7.5s
          const offset = (i * 17) % 100; // stagger around
          return (
            <BorderBeam
              size={52}
              duration={duration}
              colorFrom={palette.from}
              colorTo={palette.to}
              borderWidth={0.75}
              initialOffset={offset}
            />
          );
        })()}
        <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-fuchsia-500/0 via-fuchsia-500/0 to-fuchsia-500/0 opacity-0 blur-xl" />
        <div className="flex items-center gap-3">
          <img
            src={t.avatar}
            alt={t.name}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
            loading="lazy"
          />
          <div>
            <figcaption className="text-sm font-medium text-white/90">
              {t.name}
            </figcaption>
            <div className="text-xs text-white/60">{t.role}</div>
          </div>
        </div>
        <div className="mt-3">
          <StarRating rating={t.rating} />
        </div>
        <blockquote className="mt-3 text-white/80 leading-snug text-sm font-[inter]">
          {t.quote}
        </blockquote>
      </div>
    </motion.figure>
  );
}

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative py-20 bg-black text-white overflow-x-hidden"
    >
      {/* Soft gradient glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-fuchsia-500/10 via-purple-500/5 to-transparent blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-500/10 via-indigo-500/5 to-transparent blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Voices that matter
          </h2>
          <p className="mt-2 text-white/70">Short, genuine, and heartfelt.</p>
        </div>

        {/* Marquee grid with alternating directions */}
        <div className="mt-10 grid grid-rows-2 gap-6">
          {/* Row 1 full-bleed with edge fades */}
          <div className="relative -mx-4 sm:-mx-6 md:-mx-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-28 bg-gradient-to-r from-black/80 to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-28 bg-gradient-to-l from-black/80 to-transparent z-20" />
            <Marquee
              startFromLeft
              noPadding
              className="[--gap:1rem] [--duration:36s]"
            >
              {ROW_1.map((t, i) => (
                <div key={`${t.name}-${i}`} className="will-change-transform">
                  <Card t={t} i={i} />
                </div>
              ))}
            </Marquee>
          </div>
          {/* Row 2 full-bleed with edge fades */}
          <div className="relative -mx-4 sm:-mx-6 md:-mx-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-28 bg-gradient-to-r from-black/80 to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-28 bg-gradient-to-l from-black/80 to-transparent z-20" />
            <Marquee
              startFromLeft
              reverse
              noPadding
              className="[--gap:1rem] [--duration:42s]"
            >
              {ROW_2.map((t, i) => (
                <div key={`${t.name}-${i}`} className="will-change-transform">
                  <Card t={t} i={i} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-white/70">
          Stories from people like you.
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
