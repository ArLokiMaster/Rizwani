"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type AiChatModalProps = {
  open: boolean;
  onClose: () => void;
  initialQuery?: string;
};

type Msg = { id: string; role: "user" | "assistant"; content: string };

export default function AiChatModal({ open, onClose, initialQuery }: AiChatModalProps) {
  // Safe UUID generator for environments where crypto.randomUUID isn't available (older mobile browsers)
  const safeId = () => {
    try {
      if (typeof crypto !== "undefined" && "randomUUID" in crypto && typeof crypto.randomUUID === "function") {
        return crypto.randomUUID();
      }
      if (typeof crypto !== "undefined" && typeof (crypto as any).getRandomValues === "function") {
        const buf = new Uint8Array(16);
        (crypto as any).getRandomValues(buf);
        // Set version and variant bits for RFC4122 v4
        buf[6] = (buf[6] & 0x0f) | 0x40;
        buf[8] = (buf[8] & 0x3f) | 0x80;
        const toHex = (n: number) => n.toString(16).padStart(2, "0");
        const hex = Array.from(buf, toHex).join("");
        return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
      }
    } catch {}
    // Fallback: timestamp + random
    return `id_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
  };
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [pendingAssistant, setPendingAssistant] = useState("");
  const [typedContent, setTypedContent] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);

  // Lock scroll + close on ESC when open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  // Initialize conversation when opened
  useEffect(() => {
    if (!open) return;
    // Fresh session each time
    const seed: Msg[] = [];
    if (initialQuery && initialQuery.trim()) {
      seed.push({ id: safeId(), role: "user", content: initialQuery.trim() });
    }
    setMessages(seed);
    setTypedContent("");
    setPendingAssistant(seed.length
      ? "Hi, I’m Riz (Model 3.5) — your in‑house AI. Here’s how I can help with that:\n• Clarify your goal\n• Propose options\n• Draft content or code\n\nTell me your constraints (budget, timeline, style) and I’ll tailor the solution."
      : "Hi, I’m Riz (Model 3.5). Ask me anything about our products, pricing, or to draft content and code.");
    setTyping(true);
    setInput("");
  }, [open, initialQuery]);

  // Typing effect for assistant
  useEffect(() => {
    if (!open || !typing) return;
    if (!pendingAssistant) {
      setTyping(false);
      return;
    }
    let i = 0;
    setTypedContent("");
    const chars = Array.from(pendingAssistant);
    const interval = setInterval(() => {
      i += 1;
      setTypedContent(chars.slice(0, i).join(""));
      if (i >= chars.length) {
        clearInterval(interval);
        // Commit full assistant message
        setMessages((prev) => [
          ...prev,
          { id: safeId(), role: "assistant", content: chars.join("") },
        ]);
        setTyping(false);
        setPendingAssistant("");
      }
    }, 10); // fast, chatgpt-like
    return () => clearInterval(interval);
  }, [open, typing, pendingAssistant]);

  // Auto-scroll to bottom when messages or typing update
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typedContent, typing]);

  const send = (q?: string) => {
    const text = (q ?? input).trim();
    if (!text) return;
    setMessages((prev) => [...prev, { id: safeId(), role: "user", content: text }]);
    setInput("");
    // Simulate assistant planning and response
    const response = `Got it. I’m Riz (Model 3.5). I’ll help with: "${text}".\nHere’s a quick plan:\n1) Understand context\n2) Generate best options\n3) Deliver a clear answer`;
    setPendingAssistant(response);
    setTyping(true);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Dim + blur background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Centered chat modal */}
      <AnimatePresence>
        <motion.aside
          initial={{ y: 16, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 16, opacity: 0, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          className="absolute inset-0 flex items-center justify-center p-4"
        >
          <div className="relative w-[96vw] max-w-[680px] h-[78vh] max-h-[760px] rounded-2xl border border-white/10 bg-zinc-900/85 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-indigo-600/20 via-purple-600/10 to-cyan-600/20">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-bold shadow">
                R
              </div>
              <div>
                <div className="text-white font-semibold leading-tight">Riz (Model 3.5)</div>
                <div className="text-xs text-white/60">Your in‑house AI assistant</div>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="h-8 w-8 rounded-md bg-white/10 hover:bg-white/20 text-white/90"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div ref={listRef} className="h-[calc(100%-56px-72px)] overflow-y-auto px-4 py-3 space-y-3 custom-scroll">
            {messages.map((m) => (
              <div key={m.id} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed " +
                    (m.role === "user"
                      ? "bg-indigo-600 text-white rounded-br-md shadow"
                      : "bg-white/5 text-white border border-white/10 backdrop-blur-sm")
                  }
                >
                  {m.content.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Live typing bubble */}
            {typing && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed bg-white/5 text-white border border-white/10 backdrop-blur-sm">
                  {typedContent || (
                    <span className="inline-flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:120ms]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:240ms]" />
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="absolute bottom-0 left-0 right-0 px-3 py-3 border-t border-white/10 bg-zinc-900/70 backdrop-blur-md"
          >
            <div className="relative flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type to chat with Riz…"
                className="flex-1 h-11 rounded-xl bg-white/5 border border-white/10 px-3.5 pr-12 text-white placeholder-white/50 outline-none focus:border-white/20"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 px-3 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-sm disabled:opacity-40"
              >
                Send
              </button>
            </div>
            <p className="mt-1 text-[10px] text-white/40">Riz is our own AI. Responses may be AI‑generated.</p>
          </form>
          </div>
        </motion.aside>
      </AnimatePresence>
    </div>
  );
}
