"use client";
import React from "react";

const industries = [
  "Retail",
  "Education",
  "Healthcare",
  "E-commerce",
  "Startups",
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="relative py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-2 text-white/70">
            Yes—we can handle your industry too.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {industries.map((it) => (
            <div
              key={it}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm hover:bg-white/10 transition-colors"
            >
              {it}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
