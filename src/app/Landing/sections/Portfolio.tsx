"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Link, Lock } from "lucide-react";

import AviateTravels from "@/assets/Portfolio/aviate travels.png";
import IceCream from "@/assets/Portfolio/ice company.jpg";
import POS from "@/assets/Portfolio/pos.jpeg";

const projects = [
  {
    title: "Aviate Travels",
    story:
      "A modern airline ticketing platform in Sri Lanka with real‑time fare discovery, streamlined bookings, and secure payments. We delivered a fast, mobile‑first UX and optimized SEO.",
    img: AviateTravels,
    url: "https://aviatetravels.lk//",
  },
  {
    title: "Strawberry Honey Delights",
    story:
      "Developed branding and packaging design for a premium Tamil Nadu-based ice cream brand, emphasizing regional identity, authentic storytelling, and modern visual appeal to connect with local consumers. Created label designs that balanced tradition with a fresh, contemporary look.",
    img: IceCream,
    url: "",
  },
  {
    title: "Neno Pix Multi-Branch Store",
    story:
      "A comprehensive retail management system for Malaysian multi-branch operations. Features real-time inventory sync, centralized reporting, staff management, and localized payment integration across multiple store locations.",
    img: POS,
    url: "",
  },
];

const Portfolio: React.FC = () => {
  const belowRef = useRef<HTMLDivElement | null>(null);
  const isBelowInView = useInView(belowRef, {
    once: true,
    margin: "0px 0px -20% 0px",
  });
  const [phase, setPhase] = useState<"idle" | "loading" | "done">("idle");

  useEffect(() => {
    if (isBelowInView && phase === "idle") {
      setPhase("loading");
      const t = setTimeout(() => setPhase("done"), 3000);
      return () => clearTimeout(t);
    }
  }, [isBelowInView, phase]);

  return (
    <section id="portfolio" className="relative py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Portfolio
          </h2>
          <p className="mt-2 text-white/70">
            Real outcomes from products we built.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover repeat-0 transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-lg hover:scale-105 transition-transform"
                      aria-label={`Open ${p.title}`}
                    >
                      <Link size={22} />
                    </a>
                  ) : (
                    <span className="hidden md:flex gap-1 items-center justify-center px-3 py-3 rounded-full bg-white/10 backdrop-blur text-white text-xs tracking-wide border border-white/20">
                      <Lock size={18} /> Private Project
                    </span>
                  )}
                </div>

                {/* Mobile-only private indicator */}
                {!p.url && (
                  <div className="md:hidden absolute top-3 right-3">
                    <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/60 backdrop-blur text-white text-xs border border-white/20">
                      <Lock size={14} /> Private
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.story}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Below-the-fold skeleton/updating area */}
        <div ref={belowRef} className="mt-12">
          {phase === "loading" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Show only 1 skeleton on mobile, all 3 on larger screens */}
              {[0, 1, 2].map((k) => (
                <div
                  key={k}
                  className={`rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-pulse ${
                    k > 0 ? "hidden md:block" : ""
                  }`}
                >
                  <div className="h-64 bg-white/10" />
                  <div className="p-5 space-y-2">
                    <div className="h-4 w-2/3 bg-white/10 rounded" />
                    <div className="h-3 w-full bg-white/10 rounded" />
                    <div className="h-3 w-5/6 bg-white/10 rounded" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {phase === "done" && (
            <div className="mt-4 flex items-center justify-center">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-transparent animate-[pulse_3s_ease-in-out_infinite]" />
                <p className="relative text-sm text-white/80">
                  We’re still updating our project gallery. More case studies
                  are on the way.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
