"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  FaCode,
  FaMobile,
  FaDesktop,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaRocket,
  FaClock,
} from "react-icons/fa";
// Removed DarkVeil to keep About aligned with main site theme

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies.",
    },
    {
      icon: <FaMobile className="text-2xl" />,
      title: "Mobile Apps",
      description:
        "Cross-platform mobile solutions that deliver exceptional user experiences.",
    },
    {
      icon: <FaDesktop className="text-2xl" />,
      title: "Desktop Solutions",
      description:
        "Powerful desktop applications tailored to your business requirements.",
    },
  ];

  const values = [
    {
      icon: <FaLightbulb className="text-2xl text-orange-400" />,
      title: "Innovation",
      description:
        "We embrace new technologies and creative solutions to solve complex problems.",
    },
    {
      icon: <FaUsers className="text-2xl text-blue-400" />,
      title: "Collaboration",
      description:
        "We work closely with our clients as partners in their digital transformation journey.",
    },
    {
      icon: <FaRocket className="text-2xl text-teal-400" />,
      title: "Performance",
      description:
        "We deliver high-performance solutions that scale with your business growth.",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-green-400" />,
      title: "Security",
      description:
        "We prioritize security and data protection in every solution we build.",
    },
    {
      icon: <FaClock className="text-2xl text-purple-400" />,
      title: "Reliability",
      description:
        "We ensure timely delivery and maintain long-term partnerships with our clients.",
    },
  ];

  return (
    <>
      <div
        ref={containerRef}
        className="min-h-screen text-white relative overflow-x-hidden bg-gradient-to-b from-black via-[#0b0f14] to-black"
      >

        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isHeroInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm mb-8"
              >
                <span className="text-blue-300 font-semibold">
                  ✨ About Our Company
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                Transforming Ideas Into{" "}
                <span className="relative text-blue-400">
                  Digital Reality
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-blue-600/50 to-teal-600/50 rounded-lg blur-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                We are a forward-thinking software development company
                specializing in creating innovative digital solutions that
                empower businesses to thrive in the digital age.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>
                  <span>Trusted by 500+ clients</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full" />
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>1000+ successful projects</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => {
                  document.getElementById("content")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="cursor-target px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-2xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 mx-auto"
              >
                Learn More About Us
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Content Section */}
        <section
          id="content"
          ref={contentRef}
          className="relative z-10 py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
                Our <span className="text-blue-400">Mission</span>
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  At our core, we believe technology should be a bridge that
                  connects ideas to reality. We specialize in crafting bespoke
                  software solutions that not only meet your current needs but
                  also anticipate future challenges.
                </p>
                <p>
                  Our team of passionate developers, designers, and strategists
                  work collaboratively to deliver exceptional digital
                  experiences. From startups to enterprise companies, we've
                  helped businesses transform their vision into powerful,
                  scalable solutions.
                </p>
                <p>
                  We don't just build software – we build partnerships. Every
                  project is an opportunity to create something remarkable that
                  drives growth, efficiency, and innovation for our clients.
                </p>
              </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-20"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
                What We <span className="text-teal-400">Specialize</span> In
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      isContentInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 50 }
                    }
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="cursor-target group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:bg-white/10"
                  >
                    <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
                Our <span className="text-orange-400">Core Values</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      isContentInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="cursor-target group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
