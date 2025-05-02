"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState, useRef } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isTouching, setIsTouching] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    const touch = e.touches[0];
    if (touch) {
      touchStartY.current = touch.clientY;
      touchStartTime.current = Date.now();
      setIsTouching(true);
      setIsScrolling(false);
      
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(touch.clientX - left);
      mouseY.set(touch.clientY - top);
    }
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (!isTouching) return;
    
    const touch = e.touches[0];
    if (touch) {
      const deltaY = Math.abs(touch.clientY - touchStartY.current);
      const deltaTime = Date.now() - touchStartTime.current;
      
      // If the touch movement is fast and vertical, it's likely a scroll
      if (deltaY > 10 && deltaTime < 100) {
        setIsScrolling(true);
        setIsHovering(false);
        return;
      }

      if (!isScrolling) {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(touch.clientX - left);
        mouseY.set(touch.clientY - top);
      }
    }
  }

  function handleTouchEnd() {
    setIsTouching(false);
    setIsScrolling(false);
  }

  const [isHovering, setIsHovering] = useState(false);
  
  const handleInteractionStart = () => {
    if (!isScrolling) {
      setIsHovering(true);
    }
  };
  
  const handleInteractionEnd = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800 cursor-pointer",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      style={{ touchAction: 'pan-y' }}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100 group-active/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && !isScrolling && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};
