"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaRocket,
  FaClock,
  FaHandshake,
  FaBalanceScale,
  FaLeaf,
  FaGraduationCap,
  FaCogs,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";
// Removed DarkVeil to keep About aligned with main site theme

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroYValue = isMobile ? 0 : heroY;
  const heroOpacityValue = isMobile ? 1 : heroOpacity;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Helper to shorten long descriptions
  const truncate = (text: string, max = 120) => {
    if (!text) return "";
    return text.length > max ? `${text.slice(0, max).trim()}…` : text;
  };

  // Fetch services from API (same as ServicesPage)
  const fetchServices = async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch("/api/services-preview");
      if (!res.ok) {
        setServices([]);
        setError("We couldn't load services right now. Please try again.");
        return;
      }
      const items = await res.json();
      setServices(items);
    } catch (err) {
      console.error("Failed to fetch services:", err);
      setServices([]);
      setError(
        "A network error occurred. Please check your connection and retry."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

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
    {
      icon: <FaHandshake className="text-2xl text-pink-400" />,
      title: "Customer-Centric",
      description:
        "Your goals guide our roadmap. We measure success by the value we deliver to you.",
    },
    {
      icon: <FaBalanceScale className="text-2xl text-amber-300" />,
      title: "Transparency",
      description:
        "Clear communication, honest timelines, and full visibility throughout projects.",
    },
    {
      icon: <FaLeaf className="text-2xl text-emerald-300" />,
      title: "Sustainability",
      description:
        "We build efficient systems that conserve resources and reduce operational waste.",
    },
    {
      icon: <FaGraduationCap className="text-2xl text-cyan-300" />,
      title: "Continuous Learning",
      description:
        "We invest in upskilling to bring the latest best practices to every engagement.",
    },
    {
      icon: <FaCogs className="text-2xl text-fuchsia-300" />,
      title: "Quality by Design",
      description:
        "Automated checks, code reviews, and proven patterns ensure maintainable outcomes.",
    },
  ];

  return (
    <>
      <div
        ref={containerRef}
        className="min-h-screen text-white relative overflow-x-hidden bg-gradient-to-b from-black via-[#0b0f14] to-[#05080c]"
      >
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="mt-20 relative z-10 min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{ y: heroYValue, opacity: heroOpacityValue }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                isMobile
                  ? { opacity: 1, y: 0 }
                  : isHeroInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isMobile
                    ? { opacity: 1, y: 0 }
                    : isHeroInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block px-5 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm mb-6"
              >
                <span className="font-medium" style={{ color: "#46EBD3" }}>
                  ✨ About Us
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                Building digital products that grow your business
              </h1>

              <p className="text-base sm:text-lg text-gray-300/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                We craft fast, secure, and scalable software. From MVPs to
                enterprise platforms, our team ships with quality by design.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/70">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#46EBD3" }}
                  />
                  Product engineering
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#46EBD3" }}
                  />
                  Cloud & DevOps
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#46EBD3" }}
                  />
                  UI/UX at scale
                </span>
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
                className="cursor-target px-7 py-3 rounded-xl text-black font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 mx-auto"
                style={{ backgroundColor: "#46EBD3" }}
              >
                Learn more
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
                isMobile
                  ? { opacity: 1, y: 0 }
                  : isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
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
                isMobile
                  ? { opacity: 1, y: 0 }
                  : isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-20"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
                What We <span className="text-teal-400">Specialize</span> In
              </h2>

              {loading ? (
                <div className="flex justify-center items-center py-20">
                  <div className="w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center border border-white/10 rounded-2xl bg-white/5">
                  <p className="text-white/80">{error}</p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={fetchServices}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-xl text-white font-semibold transition-all"
                    >
                      Retry
                    </button>
                    <Link
                      href="/services"
                      className="px-6 py-3 border-2 border-white/30 hover:border-white/50 rounded-xl text-white transition-all"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              ) : services.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id || index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={
                        isMobile
                          ? { opacity: 1, y: 0 }
                          : isContentInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 50 }
                      }
                      transition={{
                        duration: 0.8,
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut",
                      }}
                      className="cursor-target group relative overflow-hidden rounded-2xl p-6 border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)] focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                      tabIndex={0}
                    >
                      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent opacity-60" />
                      <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {truncate(service.description, 140)}
                      </p>

                      {Array.isArray(service.keys) &&
                        service.keys.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {service.keys
                              .slice(0, 3)
                              .map((k: any, i: number) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-2 text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 group-hover:bg-white/10 transition-colors"
                                  title={k?.desc || k?.name}
                                >
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400" />
                                  {String(k?.name || "")}
                                </span>
                              ))}
                          </div>
                        )}

                      <div className="mt-6 flex items-center justify-between">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors"
                        >
                          Explore
                          <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>

                      <div className="pointer-events-none absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-600/10 to-teal-500/10 blur-2xl group-hover:opacity-100 opacity-70 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center border border-white/10 rounded-2xl bg-white/5">
                  <p className="text-white/80">
                    No services to display right now. Please check back soon.
                  </p>
                  <Link
                    href="/contact"
                    className="px-6 py-3 border-2 border-white/30 hover:border-white/50 rounded-xl text-white transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              )}

            {/* CTA Buttons */}
            {!loading && services.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isMobile
                    ? { opacity: 1, y: 0 }
                    : isContentInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center mt-16"
              >
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Ready to transform your business with our comprehensive services?
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/services">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-2xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center gap-3">
                      <FaRocket className="text-sm" />
                      View All Services
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-white/10 flex items-center gap-3">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}
            </motion.div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                isMobile
                  ? { opacity: 1, y: 0 }
                  : isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
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
                      isMobile
                        ? { opacity: 1, scale: 1 }
                        : isContentInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="cursor-target group relative overflow-hidden rounded-xl p-6 border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    tabIndex={0}
                  >
                    <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-60" />
                    <div className="mb-4 flex items-center gap-3">
                      <div className="grid place-items-center w-10 h-10 rounded-full bg-white/10 ring-1 ring-white/15 group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <span className="text-xs uppercase tracking-wider text-white/60 group-hover:text-white/80 transition-colors">
                        Core Value
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                    <div className="mt-5">
                      <span className="inline-flex items-center gap-2 text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 group-hover:bg-white/10 transition-colors">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                        Trusted Principle
                      </span>
                    </div>
                    <div className="pointer-events-none absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-600/10 to-teal-500/10 blur-2xl group-hover:opacity-100 opacity-70 transition-opacity" />
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
