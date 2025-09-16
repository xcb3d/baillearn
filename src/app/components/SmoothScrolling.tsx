'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface SmoothScrollingProps {
  children: React.ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with premium smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.8, // Longer duration for more luxurious feel
      easing: (t: number) => {
        // Custom cubic bezier easing for premium feel
        // Similar to ease-out-quart with spring damping
        return 1 - Math.pow(1 - t, 4) * (1 + Math.sin(t * Math.PI * 2) * 0.1 * Math.pow(1 - t, 2));
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduced for more controlled feel
      touchMultiplier: 1.5, // Optimized touch sensitivity
      infinite: false,
      lerp: 0.08, // Lower lerp for smoother interpolation (0.1 is default)
      syncTouch: true, // Better sync with touch gestures
      syncTouchLerp: 0.1, // Smooth touch lerp
    });

    // Animation frame loop for Lenis
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  // Expose lenis instance globally for other components to use
  useEffect(() => {
    if (lenisRef.current) {
      (window as unknown as { lenis?: Lenis }).lenis = lenisRef.current;
    }
  }, []);

  return <>{children}</>;
}