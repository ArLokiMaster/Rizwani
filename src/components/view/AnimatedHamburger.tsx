"use client";

import { motion } from "framer-motion";

interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({
  isOpen,
  onClick,
  className = "",
  ariaLabel = "Toggle menu",
}) => {
  const line1Variants = {
    closed: {
      rotate: 0,
      y: -6,
      opacity: 1,
    },
    open: {
      rotate: 45,
      y: 0,
      opacity: 1,
    },
  };

  const line2Variants = {
    closed: {
      opacity: 1,
      scaleX: 1,
    },
    open: {
      opacity: 0,
      scaleX: 0,
    },
  };

  const line3Variants = {
    closed: {
      rotate: 0,
      y: 6,
      opacity: 1,
    },
    open: {
      rotate: -45,
      y: 0,
      opacity: 1,
    },
  };

  const buttonVariants = {
    closed: {
      scale: 1,
    },
    open: {
      scale: 1.1,
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none${className}`}
      variants={buttonVariants}
      animate={isOpen ? "open" : "closed"}
      whileTap="tap"
      aria-label={ariaLabel}
      aria-pressed={isOpen}
      tabIndex={0}
      role="button"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Line 1 */}
      <motion.div
        className="absolute w-7 h-0.5 bg-white hamburger-line"
        variants={line1Variants}
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "center",
        }}
      />

      {/* Line 2 */}
      <motion.div
        className="absolute w-7 h-0.5 bg-white hamburger-line"
        variants={line2Variants}
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "center",
        }}
      />

      {/* Line 3 */}
      <motion.div
        className="absolute w-7 h-0.5 bg-white hamburger-line"
        variants={line3Variants}
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "center",
        }}
      />
    </motion.button>
  );
};

export default AnimatedHamburger;
