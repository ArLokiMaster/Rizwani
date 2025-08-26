"use client"

import React from "react"
import NumberFlow, { useCanAnimate } from "@number-flow/react"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

import { cn } from "@/lib/utils"

const MotionNumberFlow = motion.create(NumberFlow)
const MotionArrowUp = motion.create(ArrowUp)

export default function AnimatedNumberRandom({
  value,
  diff,
}: {
  value: number
  diff: number
}) {
  const canAnimate = useCanAnimate()
  const prevValue = React.useMemo(() => {
    // Avoid division by zero if diff === -1
    const denom = 1 + (Number.isFinite(diff) ? diff : 0)
    return denom !== 0 ? value / denom : value
  }, [value, diff])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeInOut" as any }}
      className="w-full flex flex-col items-center justify-center gap-2 text-center"
    >
      <div className="flex items-center justify-center gap-2">
        <NumberFlow
          value={value}
          className="text-5xl font-semibold"
          format={{ style: "currency", currency: "USD" }}
        />
        <motion.span
          className={cn(
            diff > 0 ? "bg-emerald-400" : "bg-red-500",
            "inline-flex items-center px-[0.3em] text-white"
          )}
          style={{ borderRadius: 999 }}
          layout={canAnimate}
          transition={{ layout: { duration: 2, bounce: 0, type: "spring" } }}
        >
          <MotionArrowUp
            className="mr-0.5 size-[0.75em]"
            absoluteStrokeWidth
            strokeWidth={3}
            transition={{ rotate: { type: "spring", duration: 2, bounce: 0 } }}
            animate={{ rotate: diff > 0 ? 0 : -180 }}
            initial={false}
          />
          <MotionNumberFlow
            value={diff}
            className="font-semibold"
            format={{ style: "percent", maximumFractionDigits: 2 }}
            layout={canAnimate}
            layoutRoot={canAnimate}
          />
        </motion.span>
      </div>
      <div className="text-xs text-white/70">
        Previous:
        <NumberFlow
          value={prevValue}
          className="ml-1"
          format={{ style: "currency", currency: "USD" }}
        />
      </div>
    </motion.div>
  )
}
