"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    desc: "Understand your needs",
    icon: (active: boolean) => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <motion.path
          d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5 4V6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="120"
          initial={false}
          animate={{
            strokeDashoffset: active ? 0 : 120,
            opacity: active ? 1 : 0.6,
          }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </svg>
    ),
  },
  {
    title: "Planning & Proposal",
    desc: "Clear timeline & cost",
    icon: (active: boolean) => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <motion.path
          d="M7 4h10v4H7V4zm0 6h10M7 14h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="80"
          initial={false}
          animate={{
            strokeDashoffset: active ? 0 : 80,
            opacity: active ? 1 : 0.6,
          }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </svg>
    ),
  },
  {
    title: "Development",
    desc: "Building your solution",
    icon: (active: boolean) => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <motion.path
          d="M4 8l8-4 8 4v8l-8 4-8-4V8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="100"
          initial={false}
          animate={{
            strokeDashoffset: active ? 0 : 100,
            opacity: active ? 1 : 0.6,
          }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </svg>
    ),
  },
  {
    title: "Delivery & Support",
    desc: "Smooth launch & aftercare",
    icon: (active: boolean) => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <motion.path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="40"
          initial={false}
          animate={{
            strokeDashoffset: active ? 0 : 40,
            opacity: active ? 1 : 0.6,
          }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="60"
          initial={false}
          animate={{
            strokeDashoffset: active ? 0 : 60,
            opacity: active ? 1 : 0.6,
          }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const Process: React.FC = () => {
  const [active, setActive] = useState(0);
  const total = steps.length;

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % total), 1500);
    return () => clearInterval(id);
  }, [total]);

  const indicatorLeft = useMemo(
    () => `${(active / (total - 1)) * 100}%`,
    [active, total]
  );

  return (
    <section id="process" className="relative py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Our Process
          </h2>
          <p className="mt-2 text-white/70">
            How we work—clear, collaborative, on-time.
          </p>
        </div>

        {/* Step cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative"
        >
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                animate={isActive ? { scale: 1.03 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
                style={{
                  boxShadow: isActive
                    ? "0 0 0 1px rgba(59,130,246,0.3), 0 0 32px rgba(34,211,238,0.25)"
                    : "none",
                  opacity: isActive ? 1 : 0.6,
                }}
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-[conic-gradient(from_var(--angle),#22d3ee,#7c3aed,#22d3ee)] opacity-20 blur-3xl animate-[spin_8s_linear_infinite]" />
                <div className="relative">
                  <div className="text-cyan-300/90">{s.icon(isActive)}</div>
                  <motion.h3
                    className="mt-3 text-lg font-semibold"
                    initial={false}
                    animate={
                      isActive ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 2 }
                    }
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {s.title}
                  </motion.h3>
                  <motion.p
                    className="mt-1 text-sm text-white/70"
                    initial={false}
                    animate={
                      isActive ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 2 }
                    }
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {s.desc}
                  </motion.p>
                  {/* active underline */}
                  <motion.div
                    className="mt-3 h-0.5 bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 rounded-full"
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    style={{ transformOrigin: "left" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            );
          })}

          {/* traveling line under steps (desktop) */}
          <div className="hidden lg:block absolute -bottom-3 left-0 right-0 h-px bg-white/10">
            <motion.div
              className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              initial={false}
              animate={{ left: indicatorLeft }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-0 h-px bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400"
              style={{ left: 0, right: 0, transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
