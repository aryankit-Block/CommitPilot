"use client";

import { motion, AnimatePresence } from "framer-motion";

interface CrystalBackgroundProps {
  className?: string;
  color?: 'blue' | 'green' | 'purple';
  isHovered?: boolean;
}

export function CrystalBackground({ className = "", color = 'blue', isHovered = false }: CrystalBackgroundProps) {
  const colorClasses = {
    blue: 'from-blue-500/20 via-blue-400/10 to-blue-500/20',
    green: 'from-green-500/20 via-green-400/10 to-green-500/20',
    purple: 'from-purple-500/20 via-purple-400/10 to-purple-500/20',
  };

  return (
    <AnimatePresence>
      {isHovered && (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
          {/* Crystal shapes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {/* Top left crystal */}
            <motion.div
              className={`absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br ${colorClasses[color]} rounded-full blur-3xl`}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Bottom right crystal */}
            <motion.div
              className={`absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl ${colorClasses[color]} rounded-full blur-3xl`}
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [45, 0, 45],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Center crystal */}
            <motion.div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-br ${colorClasses[color]} rounded-full blur-2xl`}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Overlay gradient */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-[#1a2433]/50 to-[#1a2433]/80 backdrop-blur-sm" 
          />
        </div>
      )}
    </AnimatePresence>
  );
} 