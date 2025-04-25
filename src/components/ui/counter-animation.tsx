'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterAnimationProps {
  end: number;
  duration: number;
  suffix?: string;
  className?: string;
}

export function CounterAnimation({ end, duration, suffix = '', className = '' }: CounterAnimationProps) {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const step = end / (duration / 16); // 16ms is roughly one frame at 60fps
            const timer = setInterval(() => {
              start += step;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);

            return () => clearInterval(timer);
          } else if (!entry.isIntersecting) {
            setHasAnimated(false);
            setCount(0);
          }
        });
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
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={countRef} className={className}>
      {count}
      {suffix}
    </div>
  );
} 