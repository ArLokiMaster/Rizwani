"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaCheck,
  FaArrowRight,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import DarkVeil from "@/components/DarkVeil/DarkVeil";

export interface PricingPlanUI {
  name: string; // plan title
  description: string;
  price: string; // formatted price string
  features: string[]; // list of features
  delivery_time?: string; // optional
}

// Sections preserved as in API: fixed, plus, range
export type PricingSectionsUI = {
  fixed: PricingPlanUI[];
  plus: PricingPlanUI[];
  range: PricingPlanUI[];
};

// pricingData prop shape: { [categoryName]: { [serviceTitle]: { fixed, plus, range } } }
export type PricingDataUI = Record<string, Record<string, PricingSectionsUI>>;

export default function PricingClient({ pricingData }: { pricingData: PricingDataUI }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isPricingInView = useInView(pricingRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const checkMobile = () => {
      const coarse = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
      const narrow = typeof window !== "undefined" && window.innerWidth <= 768;
      setIsMobile(coarse || narrow);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleGetQuote = (plan: PricingPlanUI) => {
    const message = `Hi! I'm interested in the ${plan.name} - ${plan.price}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleBookNow = (plan: PricingPlanUI) => {
    setSelectedPlan(plan.name);
    console.log(`Booking ${plan.name}`);
  };

  return (
    <>
      {/* Removed TargetCursor (GSAP dependency) to avoid module not found and keep animations out of non-menu pages */}

      <div ref={containerRef} className="min-h-screen text-white relative overflow-x-hidden">
        {/* Dark Veil Background */}
        <div className="fixed top-0 left-0 w-screen h-screen z-0">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.001}
            scanlineIntensity={0.01}
            speed={isMobile ? 0.9 : 3}
            scanlineFrequency={0.5}
            warpAmount={isMobile ? 0.02 : 7}
            resolutionScale={1}
          />
        </div>

        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="w-full max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <HiSparkles className="text-purple-400" />
                <span className="text-sm font-medium">Premium Solutions</span>
                <HiSparkles className="text-purple-400" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                Choose Your <span className="relative text-blue-600">Perfect Plan</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our cutting-edge solutions. From startups to enterprises, we have the perfect plan to accelerate your growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex items-center justify-center gap-4 mb-12"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FaStar className="text-yellow-400" />
                <span>4.9/5 from 500+ clients</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-600" />
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FaUsers className="text-green-400" />
                <span>Trusted by 1000+ businesses</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="cursor-target inline-block"
            >
              <button
                onClick={() => pricingRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Plans
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <section ref={pricingRef} className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Pricing Plans
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Select the perfect plan that matches your business needs and budget. All plans include our premium support and satisfaction guarantee.
              </p>
            </motion.div>

            <div className="space-y-16">
              {Object.entries(pricingData).map(([categoryKey, services], categoryIndex) => (
                <motion.div
                  key={categoryKey}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2, ease: "easeOut" }}
                  className="mb-20"
                >
                  {/* Category Title */}
                  <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{categoryKey}</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
                  </div>

                  {/* Services with sections (fixed / plus / range) */}
                  <div className="space-y-12">
                    {Object.entries(services).map(([serviceTitle, sections], subcategoryIndex) => (
                      <div key={serviceTitle}>
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-white mb-2">{serviceTitle}</h3>
                        </div>

                        {(["fixed", "plus", "range"] as const).map((sectionKey) => {
                          const plans = (sections as any)[sectionKey] as PricingPlanUI[];
                          if (!plans || plans.length === 0) return null;
                          return (
                            <div key={sectionKey} className="mb-10">
                              <div className="mb-4 text-center">
                                <span className="inline-block px-4 py-1 rounded-full text-xs uppercase tracking-wider bg-white/10 border border-white/10 text-white">
                                  {sectionKey}
                                </span>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {plans.map((plan, planIndex) => (
                                  <motion.div
                                    key={`${sectionKey}-${plan.name}-${planIndex}`}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{
                                      duration: 0.8,
                                      delay: categoryIndex * 0.3 + subcategoryIndex * 0.2 + planIndex * 0.1,
                                      ease: "easeOut",
                                    }}
                                    className="relative group"
                                  >
                                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 h-full flex flex-col">
                                      <div className="mb-6">
                                        <div className="text-center mb-4">
                                          <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                                          <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                                          {plan.delivery_time && (
                                            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                              <span>🚀 {plan.delivery_time}</span>
                                            </div>
                                          )}
                                        </div>
                                        <p className="text-gray-400 text-sm text-center leading-relaxed">{plan.description}</p>
                                      </div>

                                      <div className="flex-1 mb-8">
                                        <ul className="space-y-3">
                                          {plan.features.map((feature, featureIndex) => (
                                            <motion.li
                                              key={featureIndex}
                                              initial={{ opacity: 0, x: -20 }}
                                              animate={isPricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                              transition={{
                                                duration: 0.5,
                                                delay: categoryIndex * 0.3 + subcategoryIndex * 0.2 + planIndex * 0.1 + featureIndex * 0.05,
                                                ease: "easeOut",
                                              }}
                                              className="flex items-start gap-3"
                                            >
                                              <FaCheck className="text-green-400 text-sm mt-1 flex-shrink-0" />
                                              <span className="text-white text-sm">{feature}</span>
                                            </motion.li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div className="space-y-3">
                                        <button
                                          onClick={() => handleGetQuote(plan)}
                                          className="cursor-target w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-3"
                                        >
                                          Get Quote
                                        </button>

                                        <button
                                          onClick={() => handleBookNow(plan)}
                                          className="cursor-target w-full px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                                        >
                                          Book Now
                                        </button>
                                      </div>

                                      <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedPlan(selectedPlan === plan.name ? null : plan.name)}
                                        className="cursor-target mt-4 text-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2 group"
                                      >
                                        View More Details
                                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                                      </motion.button>

                                      {selectedPlan === plan.name && (
                                        <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: "auto" }}
                                          exit={{ opacity: 0, height: 0 }}
                                          className="mt-4 p-4 bg-black/20 rounded-lg border border-white/10"
                                        >
                                          <h5 className="text-white font-semibold mb-3">Additional Information</h5>
                                          <ul className="text-gray-400 text-sm space-y-2">
                                            <li>• Plan: {plan.name}</li>
                                            <li>• Price: {plan.price}</li>
                                            {plan.delivery_time && <li>• Delivery: {plan.delivery_time}</li>}
                                            <li>• Features: {plan.features.length} items</li>
                                          </ul>
                                        </motion.div>
                                      )}

                                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
