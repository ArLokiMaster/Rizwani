import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, useState } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Whether to pause the animation on touch (tap and hold)
   * @default false
   */
  pauseOnTouch?: boolean;
  /**
   * Align items to start to make marquee begin flush-left instead of spaced around
   * @default false
   */
  startFromLeft?: boolean;
  /**
   * Remove default internal padding on the marquee container
   * @default false
   */
  noPadding?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  pauseOnTouch = false,
  startFromLeft = false,
  noPadding = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const [paused, setPaused] = useState(false);
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        noPadding ? "p-0" : "p-2",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
      data-paused={paused ? "true" : undefined}
      onMouseEnter={pauseOnHover ? () => setPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setPaused(false) : undefined}
      onTouchStart={pauseOnTouch ? () => setPaused(true) : undefined}
      onTouchEnd={pauseOnTouch ? () => setPaused(false) : undefined}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 [gap:var(--gap)]", {
              "justify-start": startFromLeft,
              "justify-around": !startFromLeft,
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "group-[data-paused=true]:[animation-play-state:paused]": true,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
