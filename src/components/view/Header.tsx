"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { usePathname } from "next/navigation";

import Logo from "@/assets/logo.svg";
import AnimatedHamburger from "./AnimatedHamburger";
import FuturisticSidebar from "./FuturisticSidebar";
import Link from "next/link";

// Types
interface HeaderState {
  isMenuOpen: boolean;
  isScrolled: boolean;
  isVisible: boolean;
}

// Constants
const SCROLL_THRESHOLD = 10;
const HIDE_THRESHOLD = 100;

const Header: React.FC = () => {
  const [state, setState] = useState<HeaderState>({
    isMenuOpen: false,
    isScrolled: false,
    isVisible: true,
  });

  const { scrollY } = useScroll();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Memoized event handlers for performance
  const toggleMenu = useCallback(() => {
    setState((prev) => ({ ...prev, isMenuOpen: !prev.isMenuOpen }));
    console.log(state.isMenuOpen);
  }, []);

  const closeMenu = useCallback(() => {
    setState((prev) => ({ ...prev, isMenuOpen: false }));
  }, []);

  // Advanced scroll behavior (no header hide on scroll)
  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;

      setState((prev) => ({
        ...prev,
        isScrolled: currentScrollY > SCROLL_THRESHOLD,
      }));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (state.isMenuOpen) {
      document.body.style.overflow = "hidden";
      // Ensure system cursor stays visible above the full-screen menu overlay
      document.body.style.cursor = "auto";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = "";
      document.body.style.cursor = "";
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.cursor = "";
      document.body.classList.remove("menu-open");
    };
  }, [state.isMenuOpen]);

  // Simplified animation variants
  const variants = useMemo(
    () => ({
      header: {
        initial: {
          y: -40,
          opacity: 0,
          scale: 0.98,
        },
        animate: {
          y: 0,
          opacity: 1,
          scale: 1,
        },
      },

      logo: {
        initial: {
          opacity: 0,
          x: -30,
          scale: 0.8,
        },
        animate: {
          opacity: 1,
          x: 0,
          scale: 1,
        },
      },

      hamburger: {
        initial: {
          opacity: 0,
          x: 30,
          scale: 0.8,
        },
        animate: {
          opacity: 1,
          x: 0,
          scale: 1,
        },
      },
    }),
    [shouldReduceMotion]
  );

  // Transform values based on scroll
  const backgroundOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  // Dynamic styles based on state
  const headerClasses = useMemo(() => {
    const baseClasses =
      "fixed top-0 left-0 right-0 z-[999] h-16 sm:h-20 md:h-20 flex items-center justify-center transition-all duration-300";
    const backgroundClasses = state.isScrolled
      ? "bg-black/80 backdrop-blur-xl shadow-lg shadow-black/20"
      : "bg-transparent";

    return `${baseClasses} ${backgroundClasses}`;
  }, [state.isScrolled]);

  return (
    <>
      <motion.header
        className={headerClasses}
        variants={variants.header}
        initial="initial"
        animate="animate"
      >
        {/* Dynamic Background Overlay */}
        <motion.div
          className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"
          style={{ opacity: backgroundOpacity }}
        />
        {/* Animated Border */}
        {state.isScrolled && (
          <motion.div
            className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            animate={{
              scaleX: [0.3, 1, 0.3],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
        {/* Content Container */}
        <div className="relative w-full max-w-7xl mx-auto flex px-4 sm:px-6 md:px-8 justify-between items-center">
          {/* Logo Section */}
          <motion.div
            className="flex items-center group"
            variants={variants.logo}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, 0],
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Rizwani Solutions - Digital Innovation Company"
                  width={120}
                  height={40}
                  className="w-24 max-sm:w-32 md:w-40 group-hover:scale-105 transition-transform duration-300 h-auto cursor-pointer relative z-10"
                  priority
                  loading="eager"
                />
              </Link>

              {/* Logo Glow Effect */}
              <motion.div
                className={` absolute inset-0 bg-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100`}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Floating Particles around Logo */}
            {!shouldReduceMotion && state.isScrolled && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                    animate={{
                      x: [0, 20, -10, 0],
                      y: [0, -15, 10, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut",
                    }}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Menu Button Section */}
          <AnimatedHamburger
            isOpen={state.isMenuOpen}
            onClick={toggleMenu}
            className="relative p-2"
            aria-label={state.isMenuOpen ? "Close menu" : "Open menu"}
          />
        </div>
        {/* Ambient Lighting Effect */}
        <motion.div
          className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-blue-500/5 to-transparent opacity-0"
          animate={{
            opacity: state.isScrolled ? [0, 0.3, 0] : 0,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.header>

      <FuturisticSidebar isOpen={state.isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
