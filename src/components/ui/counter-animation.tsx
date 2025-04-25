'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterAnimationProps {
  end: number;
  duration: number;
  suffix?: string;
  className?: string;
}

export function CounterAnimation({ end, duration, suffix = '', className = '' }: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const startAnimation = () => {
      // Reset count to 0 when starting animation
      setCount(0);
      
      const startTime = Date.now();
      const endTime = startTime + duration;
      
      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min(1, (now - startTime) / duration);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);
        
        if (now < endTime) {
          animationFrameId.current = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      
      // Cancel any existing animation
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      // Start new animation
      animationFrameId.current = requestAnimationFrame(updateCount);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start animation when element enters viewport
          startAnimation();
        } else {
          // Reset count when element leaves viewport
          setCount(0);
          if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [end, duration]);

  return (
    <div ref={countRef} className={className}>
      {count}
      {suffix}
    </div>
  );
} 