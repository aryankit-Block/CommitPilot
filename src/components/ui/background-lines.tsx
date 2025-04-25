"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BackgroundLines = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-50/5 to-transparent" />
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute h-full w-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
              style={{
                top: `${(i + 1) * 5}%`,
                opacity: 0,
                transform: "translateX(-100%)",
              }}
              animate={{
                opacity: [0, 1, 0],
                transform: ["translateX(-100%)", "translateX(100%)"],
              }}
              transition={{
                duration: 4,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};
