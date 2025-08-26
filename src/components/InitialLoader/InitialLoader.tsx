"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import NumberFlow from "@number-flow/react";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, {
    damping: 30,
    stiffness: 100,
    restDelta: 0.001,
  });

  const displayProgress = useTransform(smoothProgress, [0, 100], ["0", "100"]);
  const strokeOffset = useTransform(smoothProgress, [0, 100], [1000, 0]);
  const logoOpacity = useTransform(
    smoothProgress,
    [0, 20, 80, 100],
    [0, 1, 1, 0.3]
  );
  const logoScale = useTransform(smoothProgress, [95, 100], [1, 0.95]);
  const barScaleX = useTransform(smoothProgress, [0, 100], [0, 1]);

  // Numeric progress for NumberFlow
  const [progressNumber, setProgressNumber] = useState(0);
  useEffect(() => {
    const unsub = smoothProgress.on("change", (v) => {
      const n = typeof v === "number" ? v : Number(v);
      setProgressNumber(Math.round(Math.max(0, Math.min(100, n))));
    });
    return () => {
      if (typeof unsub === "function") unsub();
    };
  }, [smoothProgress]);

  useEffect(() => {
    // Simulate loading with natural progression
    const duration = 900; // Total duration in ms (reduced to fit under 1.5s overall)
    const steps = 100;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      // Natural easing curve for more organic feel
      const easeProgress = Math.pow(currentStep / steps, 0.85) * 100;
      progress.set(Math.min(easeProgress, 100));

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          // Shorter exit delay to keep total under ~1.5s
          setTimeout(() => setIsVisible(false), 300);
        }, 200);
      }
    }, duration / steps);

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [progress]);

  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96],
            },
          }}
        >
          {/* Logo Container */}
          <motion.div className="relative mb-16" style={{ scale: logoScale }}>
            {/* Animated SVG Logo */}
            <motion.svg
              width="280"
              height="60"
              viewBox="0 0 238 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: logoOpacity }}
            >
              {/* Main R paths with stroke animation */}
              <motion.path
                d="M18.2383 23.9517C18.2383 28.7796 18.2383 33.6056 18.2383 38.4298C18.2383 39.1179 18.1051 39.8005 18.0551 40.4831C18.0297 40.9056 17.8718 41.3095 17.6037 41.6372C17.3357 41.9649 16.9711 42.1999 16.5619 42.3088C15.6648 42.6296 14.7087 42.7515 13.7598 42.6663C12.8109 42.581 11.8919 42.2905 11.0664 41.8149C10.3275 41.4226 9.66704 40.8978 9.11804 40.2666C8.4885 39.4987 7.66691 38.9109 6.73667 38.563C5.00915 37.9691 3.53013 36.8144 2.53521 35.2827C1.54029 33.7511 1.08672 31.9306 1.24674 30.1114C1.25985 29.5742 1.13364 29.0427 0.880371 28.5687C-0.651702 25.278 -0.179868 21.9428 2.26257 19.2958C2.89763 18.6172 3.28829 17.7463 3.37277 16.8208C3.68917 13.8742 5.03806 11.6211 7.76915 10.2782C8.26771 9.97436 8.72009 9.6006 9.11249 9.16834C9.40669 8.89088 9.62318 8.53017 9.90073 8.23051C10.8418 7.16513 12.1477 6.49055 13.5613 6.33957C14.975 6.18859 16.394 6.57216 17.5389 7.41476C17.7849 7.59206 17.9797 7.83119 18.1035 8.10795C18.2273 8.38471 18.2757 8.68927 18.2439 8.99076C18.2402 13.9666 18.2383 18.9536 18.2383 23.9517Z"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="1000"
                style={{ strokeDashoffset: strokeOffset }}
              />
              <motion.path
                d="M19.3485 24.5344C19.3485 19.3846 19.3485 14.2349 19.3485 9.08512C19.3485 7.79768 19.6705 7.32044 20.8639 6.8654C23.534 5.75553 26.0264 6.427 27.8249 8.75771C28.4151 9.52852 29.1748 10.1532 30.0453 10.5834C32.6431 11.9319 33.7478 14.2626 34.0142 17.0539C34.0753 17.8998 34.4516 18.6919 35.0689 19.2736C36.1784 20.4328 36.9229 21.8922 37.2101 23.4706C37.4973 25.0491 37.3144 26.677 36.6843 28.1525C36.3076 28.9502 36.1178 29.8232 36.1292 30.7052C36.157 32.3979 35.6567 34.0573 34.6977 35.4526C33.7387 36.8479 32.3686 37.9099 30.778 38.4909C29.8236 38.8595 28.9751 39.458 28.3078 40.2333C27.4613 41.2749 26.3155 42.0319 25.0251 42.402C23.7347 42.7722 22.3617 42.7377 21.0915 42.3032C19.7093 41.8981 19.3596 41.4098 19.3596 39.9781C19.3522 34.8283 19.3485 29.6804 19.3485 24.5344Z"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="1000"
                style={{ strokeDashoffset: strokeOffset }}
              />

              {/* IZWANI text - fade in after stroke */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <path
                  d="M72.4458 20.053C72.4458 23.7978 70.809 26.2592 67.5353 27.4373C69.3705 28.1193 70.7532 29.2291 71.6832 30.7667C72.4892 32.1307 72.8922 33.7179 72.8922 35.5284V37.5H61.8064V12.1478H62.7736C66.0473 12.1478 68.4591 12.7679 70.0091 14.0079C71.6336 15.3099 72.4458 17.3249 72.4458 20.053ZM48.7118 12.185H58.7188V37.5H48.7118V12.185ZM78.0259 12.185H88.0328V37.5H78.0259V12.185ZM92.8875 32.6081C92.8875 31.4797 93.3587 30.2769 94.3011 28.9997L95.0637 27.9953L108.493 12.185H117.607V17.5419C117.607 18.8935 116.857 20.4994 115.357 22.3594L101.667 37.5H92.8875V32.6081ZM92.8875 15.4587C92.8875 13.8591 93.0859 12.7679 93.4827 12.185H104.866L95.3055 22.3594H94.7475C93.5075 21.6402 92.8875 19.3399 92.8875 15.4587ZM117.607 34.2078C117.607 35.8322 117.421 36.9296 117.049 37.5H105.833L115.766 26.749C116.795 27.3319 117.39 28.7207 117.551 30.9155C117.601 31.5975 117.626 32.3167 117.626 33.0731L117.607 34.2078ZM150.399 12.1478H160.685V29.3717C160.685 32.1121 160.059 34.1272 158.807 35.4168C157.43 36.8056 155.18 37.5 152.055 37.5H150.399V12.1478ZM122.797 12.1478H133.083V37.5H131.427C126.852 37.5 124.124 35.95 123.243 32.8499C122.945 31.8455 122.797 30.6861 122.797 29.3717V12.1478ZM136.579 12.1664H146.921V37.5186H136.579V12.1664ZM179.955 12.185H181.629C186.193 12.185 188.914 13.7289 189.795 16.8165C190.092 17.8333 190.241 18.9989 190.241 20.3134V37.5H179.955V12.185ZM166.228 20.3134C166.228 17.5729 166.855 15.5641 168.107 14.2869C169.483 12.8857 171.728 12.185 174.84 12.185H176.514V37.5H166.228V20.3134ZM208.376 12.185H210.051C214.614 12.185 217.336 13.7289 218.216 16.8165C218.514 17.8333 218.662 18.9989 218.662 20.3134V37.5H208.376V12.185ZM194.873 12.185H204.88V37.5H194.873V12.185ZM224.001 12.185H234.008V37.5H224.001V12.185Z"
                  fill="white"
                />
              </motion.g>
            </motion.svg>

            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
              }}
            />
          </motion.div>

          {/* Percentage Counter */}
          <div className="relative">
            <motion.div className="flex items-baseline gap-1 justify-center">
              <NumberFlow
                value={progressNumber}
                className="text-7xl md:text-8xl font-light tracking-tighter text-white tabular-nums"
              />
              <motion.span
                className="text-2xl md:text-3xl font-light text-white/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                %
              </motion.span>
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="text-center mt-6 text-sm tracking-[0.3em] text-white/40 uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Loading Experience
            </motion.p>
          </div>

          {/* Progress bar (subtle) */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="h-full bg-white/40 origin-left"
              style={{ scaleX: barScaleX }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
