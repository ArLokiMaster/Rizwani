"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  HiHome,
  HiInformationCircle,
  HiCog,
  HiDocumentText,
  HiPencil,
  HiMail,
  HiArrowRight,
} from "react-icons/hi";
import ShinyText from "../ShinyText/ShinyText";

interface FuturisticSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "HOME", href: "/", icon: HiHome },
  { label: "ABOUT", href: "/about", icon: HiInformationCircle },
  { label: "SERVICES", href: "/services", icon: HiCog },
  { label: "PRICING", href: "/pricing", icon: HiDocumentText },
  { label: "BLOG", href: "/blog", icon: HiPencil },
];

const FuturisticSidebar: React.FC<FuturisticSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  // Lightweight variants (short durations, minimal motion)
  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const contentVariants = {
    closed: { opacity: 0, y: 8 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.22, ease: "easeInOut" as any },
    },
  };

  const menuVariants = {
    closed: { y: 8, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2, ease: "easeInOut" as any },
    },
  };

  const navVariants = {
    closed: { y: 8, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2, ease: "easeInOut" as any },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex flex-col lg:flex-row will-change-transform cursor-default"
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ duration: 0.18 }}
        >
          {/* Left Side - MENU and CONTACT */}
          <motion.div
            className="flex-1 max-md:flex-0 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-16"
            variants={contentVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* MENU Title */}
            <motion.div variants={menuVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tight menu-title">
                MENU.
              </h1>
            </motion.div>

            {/* CONTACT US */}
            <motion.div
              className="flex items-center text-white cursor-pointer group max-md:fixed max-md:bottom-4 max-md:right-4"
              variants={menuVariants}
              onClick={onClose}
            >
              <Link
                href="/contact"
                className="text-sm sm:text-base md:text-lg font-medium tracking-wide mr-3"
              >
                CONTACT US
              </Link>
              <HiArrowRight className="text-lg sm:text-xl group-hover:translate-x-2 transition-transform duration-300" />
              <div className="h-px bg-white flex-1 ml-4 group-hover:bg-white/60 transition-colors duration-300" />
            </motion.div>
          </motion.div>

          {/* Right Side - Navigation */}
          <motion.div
            className="flex-1 flex flex-col items-start lg:items-end justify-center p-4 sm:p-6 md:p-8 lg:p-16"
            variants={contentVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.nav
              className="space-y-4 sm:space-y-6 md:space-y-8 text-left lg:text-right w-full"
              variants={navVariants}
            >
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18, ease: "easeInOut" as any }}
                    className="group cursor-pointer"
                  >
                    <motion.a
                      href={item.href}
                      className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight hover:text-white/80 transition-colors duration-200 flex gap-5 items-center justify-start lg:justify-end group nav-item will-change-transform cursor-pointer"
                      onClick={onClose}
                    >
                      <ShinyText
                        text={item.label}
                        speed={2}
                        className="custom-class"
                      />
                      <IconComponent className="text-xl sm:text-2xl md:text-3xl mr-2 sm:mr-4 opacity-80" />
                    </motion.a>
                  </motion.div>
                );
              })}
            </motion.nav>
          </motion.div>

          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 text-white/60 hover:text-white transition-colors duration-200"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FuturisticSidebar;
