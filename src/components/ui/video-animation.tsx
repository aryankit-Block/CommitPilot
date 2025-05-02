"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { PlaceholderImage } from "./placeholder-image";

interface VideoAnimationProps {
  videoSrc: string;
  title: string;
  description: string;
  className?: string;
}

export function VideoAnimation({ 
  videoSrc, 
  title, 
  description, 
  className = ""
}: VideoAnimationProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasError) {
            videoRef.current?.play().catch(() => setHasError(true));
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasError]);

  const handleVideoError = () => {
    setHasError(true);
    setIsPlaying(false);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative group ${className}`}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      
      {/* Main Container */}
      <div className="relative p-8 rounded-2xl bg-[#1a2433] border border-neutral-800 overflow-hidden">
        {/* Video/Image Container */}
        <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
          {!hasError ? (
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              onError={handleVideoError}
            />
          ) : (
            <PlaceholderImage title={title} />
          )}
          
          {/* Play/Pause Overlay */}
          {!hasError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isPlaying ? 0 : 1 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer"
              onClick={() => {
                if (videoRef.current) {
                  if (isPlaying) {
                    videoRef.current.pause();
                  } else {
                    videoRef.current.play().catch(() => setHasError(true));
                  }
                  setIsPlaying(!isPlaying);
                }
              }}
            >
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-neutral-300">{description}</p>
        </div>

        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
          animate={{ opacity: isPlaying ? 1 : 0 }}
        />
      </div>
    </motion.div>
  );
} 