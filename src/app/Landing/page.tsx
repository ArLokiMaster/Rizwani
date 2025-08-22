"use client";
import React from "react";
import dynamic from "next/dynamic";

// Lightweight skeleton fallbacks to avoid layout shift
const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-white/5 rounded-xl ${className}`} />
);

// Hero uses Swiper + Framer Motion; defer hydration and disable SSR
const HeroSection = dynamic(() => import("./sections/Hero"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute inset-0" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24">
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-4 w-2/3 mb-6" />
        <div className="flex gap-3">
          <Skeleton className="h-12 w-44" />
          <Skeleton className="h-12 w-28" />
        </div>
      </div>
    </div>
  ),
});

const Benefits = dynamic(() => import("./benifits/benifits"), {
  ssr: false,
  loading: () => <Skeleton className="h-48 w-full" />,
});

const Process = dynamic(() => import("./sections/Process"), {
  ssr: false,
  loading: () => <Skeleton className="h-64 w-full" />,
});

const GeneralSection = dynamic(() => import("./sections/GeneralSection"), {
  ssr: false,
  loading: () => <Skeleton className="h-96 w-full" />,
});

const Portfolio = dynamic(() => import("./sections/Portfolio"), {
  ssr: false,
  loading: () => <Skeleton className="h-72 w-full" />,
});

const Industries = dynamic(() => import("./sections/Industries"), {
  ssr: false,
  loading: () => <Skeleton className="h-56 w-full" />,
});

const Testimonials = dynamic(() => import("./sections/Testimonials"), {
  ssr: false,
  loading: () => <Skeleton className="h-56 w-full" />,
});
// Keeping PresentationFolder commented as before
// const PresentationFolder = dynamic(() => import("./sections/PresentationFolder"), { ssr: false });

const LandingHomePage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Benefits />
      <GeneralSection /> <Process />
      <Portfolio />
      <Industries />
      <Testimonials />
      {/* <PresentationFolder /> */}
    </div>
  );
};

export default LandingHomePage;
