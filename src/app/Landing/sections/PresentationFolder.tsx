"use client";
import React from "react";
import { motion } from "framer-motion";

const NeonLine = ({ className = "" }) => (
  <div
    className={`h-px w-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/60 to-cyan-400/0 ${className}`}
  />
);

const PresentationFolder: React.FC = () => {
  return (
    <section id="presentation" className="relative py-24 bg-black text-white">
      {/* Holographic background */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Futuristic Presentation Folder
          </h2>
          <p className="mt-2 text-white/70">
            Deep blue, violet, cyan—glowing neon lines, holographic geometry,
            and interactive micro UI.
          </p>
        </div>

        {/* 3D tilt holographic card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <motion.div
            whileHover={{ rotateX: -4, rotateY: 4 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-[#0B1020] to-[#0E1322] p-8 overflow-hidden"
          >
            <div className="relative">
              <h3 className="text-xl font-medium">Corporate Folder Cover</h3>
              <NeonLine className="my-4" />
              <p className="text-sm text-white/70">
                Logo lockup, hero tagline, and glassmorphism badges. Designed
                for a premium handoff and investor-ready pitch.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-video rounded-xl bg-white/5 border border-white/10"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ rotateX: 4, rotateY: -4 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-[#0B1020] to-[#0E1322] p-8 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
              <div className="absolute -inset-1 bg-[conic-gradient(from_var(--angle),#22d3ee,#60a5fa,#a78bfa,#22d3ee)] animate-[spin_8s_linear_infinite]" />
            </div>
            <div className="relative">
              <h3 className="text-xl font-medium">Inner Pages & Micro UI</h3>
              <NeonLine className="my-4" />
              <p className="text-sm text-white/70">
                Holographic cards, neon dividers, subtle tech pattern, and
                interactive components for an immersive feel.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-24 rounded-xl bg-white/5 border border-white/10"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PresentationFolder;
