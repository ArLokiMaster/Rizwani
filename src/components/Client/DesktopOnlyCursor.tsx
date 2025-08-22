"use client";

import { useEffect, useState } from "react";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";

export default function DesktopOnlyCursor() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      const coarse = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
      const narrow = typeof window !== "undefined" && window.innerWidth <= 768;
      setIsMobile(coarse || narrow);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile === null) return null; // avoid flash on first paint
  if (isMobile) return null;
  return <SmoothCursor />;
}
