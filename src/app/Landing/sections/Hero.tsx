"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// Import components
import Beams from "@/components/Beams/Beams";
import GlassSurface from "@/components/GlassSurface/GlassSurface";
import AiTextBox from "@/AI/aiTextBox";
import ShinyText from "@/components/ShinyText/ShinyText";

// Import images
import HeroImage1 from "@/assets/Hero Images/Adobe Express - file (1).png";
import HeroImage2 from "@/assets/Hero Images/Adobe Express - file (2).png";
import HeroImage3 from "@/assets/Hero Images/Adobe Express - file (3).png";

// Content data for each slide
const heroContent = [
  {
    id: 1,
    image: HeroImage1,
    heading: "Transform Dreams Into Reality",
    description:
      "Every great success story starts with a single decision. Your business deserves more than just growth—it deserves to flourish, to touch lives, and to create lasting impact that resonates for generations.",
  },
  {
    id: 2,
    image: HeroImage2,
    heading: "Unleash Your Team's Potential",
    description:
      "Behind every breakthrough is a team that believed in something bigger. We don't just optimize workflows—we unlock human potential, turning everyday challenges into extraordinary achievements.",
  },
  {
    id: 3,
    image: HeroImage3,
    heading: "Create Meaningful Connections",
    description:
      "In a world hungry for authentic experiences, your brand has the power to be the bridge between dreams and reality. Let's build something that matters, something that changes everything.",
  },
];

// Brand logos for infinite scroll
const brandLogos = [
  "Microsoft",
  "Google",
  "Apple",
  "Amazon",
  "Meta",
  "Tesla",
  "Netflix",
  "Spotify",
  "Adobe",
  "Salesforce",
  "IBM",
  "Oracle",
  "Nvidia",
  "Intel",
  "Samsung",
  "Sony",
  "HP",
  "Dell",
  "Cisco",
  "VMware",
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  // simple autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentContent = heroContent[currentSlide];

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center">
      {/* Beams Background */}
      <AiTextBox />
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={22}
          lightColor="#ffffff"
          speed={5}
          noiseIntensity={1}
          scale={0.25}
          rotation={72}
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 w-full h-44 bg-gradient-to-b from-transparent to-black z-40 overflow-hidden">
        {/* Partner Infinity Logo Slider */}
        <div className="absolute bottom-8 left-0 w-full">
          <div className="flex animate-scroll-left space-x-12 whitespace-nowrap">
            {[...brandLogos, ...brandLogos].map((brand, index) => (
              <div
                key={index}
                className="text-white/60 text-2xl font-medium tracking-wide hover:text-white/80 transition-colors duration-300 min-w-fit"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
        {/* Left and right fade effects */}
        <div className="absolute left-0 bottom-0 w-32 h-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 bottom-0 w-32 h-20 bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
      {/* Content Container */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-7xl h-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-20">
        {/* Text Content - Mobile: centered, Desktop: left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="flex-1 flex flex-col items-center lg:items-start justify-center space-y-4 text-center lg:text-left lg:pr-12 order-1 lg:order-1"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight mb-2 max-w-4xl"
            >
              {currentContent.heading.toUpperCase()}
            </motion.h1>
          </AnimatePresence>
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-base sm:text-lg md:text-md lg:text-sm text-white/90 leading-relaxed max-w-2xl font-light mb-6"
          >
            {currentContent.description}
          </motion.p>
          {/* CTA Buttons */}
          <div className="flex gap-3 sm:gap-4 w-full max-lg:w-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-full sm:w-auto"
              onClick={() => router.push("/contact")}
            >
              <GlassSurface
                width={180}
                height={50}
                borderRadius={25}
                className="cursor-pointer w-full sm:w-auto"
              >
                <ShinyText
                  text="Talk to an Expert"
                  speed={5}
                  className="custom-class"
                />
              </GlassSurface>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-full sm:w-auto"
              onClick={() => router.push("/pricing")}
            >
              <GlassSurface
                width={120}
                height={50}
                borderRadius={25}
                opacity={0.7}
                className="cursor-pointer w-full sm:w-auto"
              >
                <ShinyText text="Pricing" speed={5} className="custom-class" />
              </GlassSurface>
            </motion.div>
          </div>{" "}
          {/* Removed inner AiTextBox to keep only the main-layer instance */}
        </motion.div>

        {/* Image Slider - Mobile: below text, Desktop: right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="flex-1 flex items-end relative h-64 sm:h-80 md:h-96 lg:h-full w-full justify-center lg:justify-end overflow-hidden order-2 lg:order-2"
        >
          <div className="relative w-full h-full">
            {heroContent.map((content, idx) => (
              <motion.div
                key={content.id}
                className="absolute inset-0 flex items-end justify-center"
                initial={false}
                animate={{ opacity: currentSlide === idx ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  pointerEvents: currentSlide === idx ? "auto" : "none",
                }}
              >
                <Image
                  src={content.image}
                  alt={`Hero slide ${content.id}`}
                  width={500}
                  height={500}
                  className="object-contain w-full h-full absolute bottom-0"
                  priority={idx === 0}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
