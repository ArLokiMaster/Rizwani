"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiSparkles } from "react-icons/hi";
import { IoSend } from "react-icons/io5";
import AiChatModal from "@/AI/AiChatModal";

const AiTextBox = () => {
  const [aiQuery, setAiQuery] = useState("");
  const [docked, setDocked] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [lastQuery, setLastQuery] = useState<string>("");

  // Scroll-dock behavior: when the box scrolls out of view, show a docked version at bottom center
  useEffect(() => {
    const onScroll = () => {
      const el = anchorRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const shouldDock = rect.top < 80 || rect.bottom < 120;
      setDocked(shouldDock);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleSend = () => {
    if (!aiQuery.trim()) return;
    // Open Chat modal with current query
    // Clear the text field BEFORE opening the popup as requested
    const query = aiQuery;
    setLastQuery(query);
    setAiQuery("");
    setChatOpen(true);
  };

  /* AI Text Box */

  return (
    <>
      {/* Chat Modal */}
      <AiChatModal
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        initialQuery={lastQuery}
      />

      {/* Inline anchor version */}
      <div ref={anchorRef} className="w-full flex justify-start">
        <AIInput
          aiQuery={aiQuery}
          setAiQuery={setAiQuery}
          onSend={handleSend}
          variant="inline"
        />
      </div>

      {/* Docked floating version */}
      <AnimatePresence>
        {docked && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] w-[92%] sm:w-[560px]"
          >
            <AIInput
              aiQuery={aiQuery}
              setAiQuery={setAiQuery}
              onSend={handleSend}
              variant="docked"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiTextBox;

function AIInput({
  aiQuery,
  setAiQuery,
  onSend,
  variant,
}: {
  aiQuery: string;
  setAiQuery: React.Dispatch<React.SetStateAction<string>>;
  onSend: () => void;
  variant: "inline" | "docked";
}) {
  const hasText = aiQuery.trim().length > 0;
  return (
    <div
      className={
        "relative mt-4 w-full " + (variant === "inline" ? "sm:max-w-xl" : "")
      }
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 pr-14">
        {/* Animated border */}
        <BorderBeam
          size={64}
          duration={8}
          colorFrom="#7c3aed"
          colorTo="#06b6d4"
          borderWidth={1.25}
        />

        {/* Left icon when empty */}
        <AnimatePresence initial={false}>
          {!hasText && (
            <motion.span
              key="sparkle"
              initial={{ opacity: 0, scale: 0.9, x: -4 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -4 }}
              transition={{ duration: 0.2 }}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300"
            >
              <HiSparkles className="h-5 w-5 animate-pulse" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Input */}
        <input
          type="text"
          value={aiQuery}
          onChange={(e) => setAiQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSend();
          }}
          placeholder=" "
          className="w-full bg-transparent outline-none text-white placeholder-transparent text-sm sm:text-base pl-8"
          aria-label="Ask our AI"
        />

        {/* Animated placeholder overlay (short, emotional) */}
        {!hasText && (
          <div className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 text-white/60">
            <TypingAnimation
              className="!text-sm sm:!text-base !leading-normal !tracking-normal"
              duration={38}
            >
              What's your vision today?
            </TypingAnimation>
          </div>
        )}

        {/* Right action button: send icon switches from sparkles to send */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={onSend}
          aria-label="Send"
          className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-sm hover:from-indigo-500 hover:to-cyan-500 transition-colors"
        >
          <AnimatePresence initial={false} mode="wait">
            {!hasText ? (
              <motion.span
                key="sparkle-btn"
                initial={{ opacity: 0, rotate: -15 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 15 }}
                transition={{ duration: 0.18 }}
                className="text-white"
              >
                <HiSparkles className="h-4 w-4" />
              </motion.span>
            ) : (
              <motion.span
                key="send-btn"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="text-white"
              >
                <IoSend className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
