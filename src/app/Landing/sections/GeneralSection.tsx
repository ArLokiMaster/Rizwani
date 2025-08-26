"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import img1 from "@/assets/general section/image1.jpg";
import img2 from "@/assets/general section/image2.png";
import img3 from "@/assets/general section/image3.jpg";

const blocks = [
  {
    badge: "Full-Stack Development",
    title: "Complete Web Solutions",
    desc: "From stunning frontends to robust backends, we build end-to-end web applications using cutting-edge technologies like React, Next.js, Node.js, and cloud platforms.",
    cta: "Learn More",
    image: img1,
    imageAlt: "Full-stack web development showcase",
  },
  {
    badge: "Mobile First",
    title: "Native & Cross-Platform Apps",
    desc: "Create engaging mobile experiences with React Native, Flutter, and native iOS/Android development. One codebase, multiple platforms, maximum reach.",
    cta: "Learn More",
    image: img2,
    imageAlt: "Mobile app development preview",
  },
  {
    badge: "AI Integration",
    title: "Smart Solutions with AI",
    desc: "Leverage the power of artificial intelligence and machine learning to automate processes, enhance user experiences, and drive intelligent decision-making in your applications.",
    cta: "Learn More",
    image: img3,
    imageAlt: "AI-powered application interface",
  },
];

const CardRow = ({ index, badge, title, desc, cta, image, imageAlt }: any) => {
  const router = useRouter();
  const imageFirst = index % 2 === 0;
  
  const handleCtaClick = () => {
    router.push('/contact');
  };
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
            <button 
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
            >
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
