"use client";

import { useMemo, useRef } from "react";
import LightRays from "@/components/LightRays/LightRays";
import { motion, useScroll, useTransform } from "framer-motion";
import { RocketLaunchIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import ServiceCard from "@/components/ServiceCard";

// Types aligned with page expectations
export type ServiceKey = { name: string; desc: string };
export type ServiceItem = {
  id: string;
  categoryID: string;
  title: string;
  keys: ServiceKey[];
  description: string;
  creatorID: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
  Meta: any[];
};

export default function ServicesClient({ items }: { items: ServiceItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  // Lightweight transforms - no springs for better performance
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  // Group by categoryID for sectioned rendering
  const grouped = useMemo(() => {
    const map = new Map<string, ServiceItem[]>();
    for (const s of items) {
      const key = s.categoryID || "uncategorized";
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(s);
    }
    return Array.from(map, ([categoryID, services]) => ({
      categoryID,
      services,
    }));
  }, [items]);

  return (
    <div ref={scrollRef} style={{ scrollBehavior: "smooth" }}>
      {/* Enhanced LightRays Background with Parallax */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="white"
          raysSpeed={0.5}
          lightSpread={1.2}
          rayLength={3}
          pulsating={false}
          fadeDistance={0.8}
          saturation={0.7}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.1}
          distortion={0.05}
          className=""
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0" />
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-none"
          >
            SERVICES
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-8"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-4">
              Empowering businesses with tailored digital solutions
            </p>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              From cutting-edge web applications to comprehensive cloud
              infrastructure, we deliver excellence in every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
            >
              <RocketLaunchIcon className="w-5 h-5 inline-block mr-2" />
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
            >
              <LightBulbIcon className="w-5 h-5 inline-block mr-2" />
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section (Grouped by Category) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with deep industry expertise to
              deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="space-y-14">
            {grouped.map((group) => (
              <section key={group.categoryID} className="">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center w-full">
                    {group.categoryID}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.services.map((svc, index) => (
                    <ServiceCard
                      key={svc.id}
                      id={svc.id}
                      title={svc.title}
                      description={svc.description}
                      keys={svc.keys}
                      isEven={index % 2 === 0}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your digital
              goals and stay ahead of the competition.
            </p>
            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-2xl hover:shadow-blue-500/40"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
