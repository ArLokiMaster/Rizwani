"use client";

import React from "react";
import Image from "next/image";

import img1 from "@/assets/general section/image1.jpg";
import img2 from "@/assets/general section/image2.png";
import img3 from "@/assets/general section/image3.jpg";

const blocks = [
  {
    badge: "New update",
    title: "Take the pain out of company admin",
    desc: "Eliminate the weekly pressure: receipts, payroll, files – all in one place and beautifully organized.",
    cta: "Learn More",
    image: img1,
    imageAlt: "Admin dashboard preview",
  },
  {
    badge: "Ready to scale",
    title: "Grows with your business",
    desc: "Start lean, scale confidently. Simple today, mighty tomorrow. Our system adapts as you grow.",
    cta: "Learn More",
    image: img2,
    imageAlt: "Growth analytics snapshot",
  },
  {
    badge: "Control at a glance",
    title: "Manage your team in one place",
    desc: "Tasks, approvals, and workflows that keep your team aligned and moving fast – without the chaos.",
    cta: "Learn More",
    image: img3,
    imageAlt: "Team tasks mobile UI",
  },
];

const CardRow = ({ index, badge, title, desc, cta, image, imageAlt }: any) => {
  const imageFirst = index % 2 === 0;
  return (
    <section className="relative py-12 sm:py-16">
      {/* subtle top/bottom glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/5 to-transparent blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/5 to-transparent blur-2xl" />
      </div>

      <div
        className={
          "mx-auto grid max-w-7xl grid-cols-1 place-items-center gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-2 font-[poppins]"
        }
      >
        {/* Image block: first on mobile for all, alternates on desktop */}
        <div
          className={
            imageFirst
              ? "order-1 w-full"
              : "order-1 lg:order-2 w-full"
          }
        >
          <div className="relative aspect-[16/10] w-full rounded-2xl">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority={index === 0}
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />
          </div>
        </div>

        {/* Text block: second on mobile, alternates on desktop */}
        <div
          className={
            (imageFirst ? "order-2" : "order-2 lg:order-1") +
            " flex flex-col items-center text-center lg:items-start lg:text-left gap-4 lg:gap-6"
          }
        >
          <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full border border-white/10 bg-white/5 px-5 py-2 font-[inter] text-xs text-white/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {badge}
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-6xl font-semibold tracking-tight">
            {title}
          </h3>
          <p className="text-white/70 text-base md:text-lg max-w-prose">
            {desc}
          </p>
          <div>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
              {cta}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4 opacity-80"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const GeneralSection: React.FC = () => {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto w-full max-w-7xl">
        {blocks.map((b, i) => (
          <CardRow key={i} index={i} {...b} />
        ))}
      </div>
    </section>
  );
};

export default GeneralSection;
