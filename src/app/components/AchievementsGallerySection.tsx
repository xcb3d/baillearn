'use client';

import { motion, useTransform, useMotionValue } from 'framer-motion';
import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import Image from 'next/image';

// Achievement images data with their initial transform states
const achievementImages = [
  {
    id: 1,
    name: "Công bố điểm 1000+",
    src: "/achi1.png",
    initialTransform: { x: -185.144, y: 173.516, scale: 0.552793 }
  },
  {
    id: 2,
    name: "Công bố điểm 1000+-2",
    src: "/achi2.png",
    initialTransform: { x: -359.554, y: 609.096, scale: 0.552793 }
  },
  {
    id: 3,
    name: "Công bố điểm 1000+-5",
    src: "/achi3.png",
    initialTransform: { x: -523.232, y: 601.94, scale: 0.552793 }
  },
  {
    id: 4,
    name: "Công bố điểm 1000+-12",
    src: "/achi4.png",
    initialTransform: { x: 543.803, y: -148.473, scale: 0.552793 }
  },
  {
    id: 5,
    name: "Công bố điểm 1000+-16",
    src: "/achi5.png",
    initialTransform: { x: 177.094, y: -148.473, scale: 0.552793 }
  },
  {
    id: 6,
    name: "Công bố điểm 1000+-19",
    src: "/achi6.png",
    initialTransform: { x: 543.803, y: 669.916, scale: 0.552793 }
  },
  {
    id: 7,
    name: "Công bố điểm 1000+-6",
    src: "/achi7.png",
    initialTransform: { x: -350.61, y: 400.697, scale: 0.552793 }
  },
  {
    id: 8,
    name: "Công bố điểm 1000+-7",
    src: "/achi8.png",
    initialTransform: { x: -364.921, y: -144.001, scale: 0.552793 }
  },
  {
    id: 9,
    name: "Công bố điểm 1000+-17",
    src: "/achi9.png",
    initialTransform: { x: -501.766, y: 457.045, scale: 0.552793 }
  },
  {
    id: 10,
    name: "Công bố điểm 1000+-20",
    src: "/achi10.png",
    initialTransform: { x: 51.876, y: -258.485, scale: 0.552793 }
  },
  {
    id: 11,
    name: "Công bố điểm 1000+-1",
    src: "/achi11.png",
    initialTransform: { x: -271.007, y: -290.684, scale: 0.552793 }
  },
  {
    id: 12,
    name: "Công bố điểm 1000+-8",
    src: "/achi12.png",
    initialTransform: { x: 228.97, y: 248.647, scale: 0.552793 }
  },
  {
    id: 13,
    name: "Công bố điểm 1000+-21",
    src: "/achi13.png",
    initialTransform: { x: 516.971, y: 270.113, scale: 0.552793 }
  },
  {
    id: 14,
    name: "Công bố điểm 1000+-3",
    src: "/achi14.png",
    initialTransform: { x: -386.387, y: 411.43, scale: 0.552793 }
  },
  {
    id: 15,
    name: "Công bố điểm 1000+-9",
    src: "/achi15.png",
    initialTransform: { x: 55.4536, y: 254.013, scale: 0.552793 }
  },
  {
    id: 16,
    name: "Công bố điểm 1000+-18",
    src: "/achi16.png",
    initialTransform: { x: 544.698, y: 188.721, scale: 0.552793 }
  },
  {
    id: 17,
    name: "Công bố điểm 1000+-13",
    src: "/achi17.png",
    initialTransform: { x: 470.461, y: -542.909, scale: 0.552793 }
  },
  {
    id: 18,
    name: "Công bố điểm 1000+-4",
    src: "/achi18.png",
    initialTransform: { x: 396.225, y: 553.642, scale: 0.552793 }
  },
  {
    id: 19,
    name: "Công bố điểm 1000+-10",
    src: "/achi19.png",
    initialTransform: { x: 183.355, y: 152.945, scale: 0.552793 }
  },
  {
    id: 20,
    name: "Công bố điểm 1000+-14",
    src: "/achi20.png",
    initialTransform: { x: -484.772, y: 84.9693, scale: 0.552793 }
  },
  {
    id: 21,
    name: "Công bố điểm 1000+-15",
    src: "/achi21.png",
    initialTransform: { x: 568.847, y: -475.828, scale: 0.552793 }
  },
  {
    id: 22,
    name: "Công bố điểm 1000+-11",
    src: "/achi22.png",
    initialTransform: { x: -346.138, y: 76.9196, scale: 0.552793 }
  }
];

// Preload images để tránh lag lần đầu load
const preloadImages = () => {
  if (typeof window === 'undefined') return;
  
  achievementImages.forEach((img) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = img.src;
    document.head.appendChild(link);
    
    // Also create Image objects for browser caching
    const image = new window.Image();
    image.src = img.src;
  });
};

// Individual achievement image component with scroll-driven animation
const AchievementImage = React.memo(({
  image,
  scrollYProgress,
  groupIndex,
  priority = false
}: {
  image: typeof achievementImages[0],
  scrollYProgress: ReturnType<typeof useMotionValue<number>>,
  groupIndex: number,
  indexInGroup: number,
  priority?: boolean
}) => {
  // Calculate stagger timing for groups
  const groupDelay = groupIndex * 0.05;
  const maxDelay = 0.2;
  const actualDelay = Math.min(groupDelay, maxDelay);
  
  // Animation range for this specific image - Extended for smoother desktop experience
  const startPoint = actualDelay;
  const endPoint = Math.min(actualDelay + 0.65, 1);
  
  // Transform values with smoother, more gradual calculations
  const x = useTransform(
    scrollYProgress,
    [startPoint, startPoint + 0.15, startPoint + 0.35, startPoint + 0.5, endPoint],
    [image.initialTransform.x, image.initialTransform.x * 0.7, image.initialTransform.x * 0.4, image.initialTransform.x * 0.15, 0]
  );
  
  const y = useTransform(
    scrollYProgress,
    [startPoint, startPoint + 0.15, startPoint + 0.35, startPoint + 0.5, endPoint],
    [image.initialTransform.y, image.initialTransform.y * 0.7, image.initialTransform.y * 0.4, image.initialTransform.y * 0.15, 0]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [startPoint, startPoint + 0.15, endPoint],
    [image.initialTransform.scale, 0.8, 1]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [startPoint, startPoint + 0.05, endPoint],
    [0, 1, 1]
  );

  return (
    <motion.div
      data-framer-name={image.name}
      className="aspect-square h-[171px] flex-shrink-0 w-[171px] relative overflow-hidden rounded-lg"
      style={{
        x,
        y,
        scale,
        opacity,
        willChange: 'auto',
        contain: 'layout style paint',
      }}
    >
      <Image
        src={image.src}
        alt={image.name}
        width={171}
        height={171}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        quality={85}
        className="object-cover w-full h-full"
        sizes="171px"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
      />
    </motion.div>
  );
}, (prevProps, nextProps) => {
  return prevProps.image.id === nextProps.image.id &&
         prevProps.groupIndex === nextProps.groupIndex;
});

AchievementImage.displayName = 'AchievementImage';

// Mobile achievement image component with brick stacking animation
const MobileAchievementImage = React.memo(({
  image,
  scrollYProgress,
  rowIndex,
  indexInRow,
  priority = false
}: {
  image: typeof achievementImages[0],
  scrollYProgress: ReturnType<typeof useMotionValue<number>>,
  rowIndex: number,
  indexInRow: number,
  totalRows: number,
  priority?: boolean
}) => {
  // Progressive reveal: từ trên xuống, scroll tới đâu xuất hiện tới đó
  const progressiveDelay = rowIndex * 0.1; // Hàng trên xuất hiện trước
  const brickDelay = indexInRow * 0.03; // Trong hàng thì từ trái qua phải
  const totalDelay = Math.min(progressiveDelay + brickDelay, 0.8);
  
  const startPoint = totalDelay;
  const midPoint = startPoint + 0.12;
  const endPoint = Math.min(startPoint + 0.2, 1);
  
  // Drop from top effect với bounce nhẹ
  const y = useTransform(
    scrollYProgress,
    [startPoint, midPoint, endPoint],
    [-60, 8, 0] // Rơi từ trên, bounce nhẹ, vào vị trí
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [startPoint, startPoint + 0.1, endPoint],
    [0, 1, 1]
  );

  // Scale bounce effect khi rơi
  const scale = useTransform(
    scrollYProgress,
    [startPoint, midPoint, endPoint],
    [0.8, 1.1, 1] // Nhỏ -> to hơn -> về bình thường (bounce)
  );

  // Rotation nhẹ khi rơi để tự nhiên hơn
  const rotate = useTransform(
    scrollYProgress,
    [startPoint, endPoint],
    [indexInRow % 2 === 0 ? -3 : 3, 0] // Xoay nhẹ rồi về 0
  );

  return (
    <motion.div
      data-framer-name={image.name}
      className="aspect-square h-[150px] md:h-[160px] flex-shrink-0 w-[150px] md:w-[160px] relative overflow-hidden rounded-lg shadow-lg"
      style={{
        y,
        scale,
        opacity,
        rotate,
        willChange: 'auto',
        contain: 'layout style paint',
      }}
    >
      <Image
        src={image.src}
        alt={image.name}
        width={160}
        height={160}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        quality={85}
        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 768px) 150px, 160px"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
      />
    </motion.div>
  );
});

MobileAchievementImage.displayName = 'MobileAchievementImage';

// Main achievements gallery section component
export default function AchievementsGallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useMotionValue(0);
  const [isFixed, setIsFixed] = useState(false);
  const [containerTop, setContainerTop] = useState(0);
  const [animationFrozen, setAnimationFrozen] = useState(false);
  const frozenProgress = useRef(0);
  const lastScrollTop = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesPerRow, setImagesPerRow] = useState(2);
  
  // Dampening for smooth scroll
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const rafId = useRef<number | null>(null);
  
  // Preload images on mount
  useEffect(() => {
    preloadImages();
  }, []);
  
  // Group images into batches of 5 for desktop
  const imageGroups = useMemo(() => {
    const groups: Array<{
      image: typeof achievementImages[0],
      groupIndex: number,
      indexInGroup: number
    }> = [];
    
    achievementImages.forEach((image, index) => {
      groups.push({
        image,
        groupIndex: Math.floor(index / 5),
        indexInGroup: index % 5
      });
    });
    
    return groups;
  }, []);

  // Group images into rows based on screen width
  const mobileRows = useMemo(() => {
    const rows: Array<typeof achievementImages[0][]> = [];
    
    for (let i = 0; i < achievementImages.length; i += imagesPerRow) {
      const row = achievementImages.slice(i, i + imagesPerRow);
      rows.push(row);
    }
    
    return rows;
  }, [imagesPerRow]);
  
  // Optimized scroll handler with memoization
  const handleScrollOptimized = useCallback(() => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionBottom = rect.bottom;
    const sectionHeight = rect.height;
    const windowHeight = window.innerHeight;
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingUp = currentScrollTop < lastScrollTop.current;
    
    // Animation trigger points - mobile xuất hiện sớm hơn
    const animationTriggerPoint = isMobile ? windowHeight * 0.8 : windowHeight * 0.25;
    const fixedTriggerPoint = 0;
    
    // Unfreeze animation when scrolling up (desktop only)
    if (!isMobile && isScrollingUp && sectionBottom > windowHeight && animationFrozen) {
      setAnimationFrozen(false);
    }
    
    // Handle fixed positioning (only for desktop)
    if (!isMobile) {
      if (sectionTop <= fixedTriggerPoint && sectionBottom > windowHeight && !animationFrozen) {
        setIsFixed(true);
        setContainerTop(0);
      } else if (sectionTop > fixedTriggerPoint && !animationFrozen) {
        setIsFixed(false);
        setContainerTop(0);
      } else if (sectionBottom <= windowHeight) {
        setIsFixed(false);
        setContainerTop(sectionHeight - windowHeight);
        
        if (!animationFrozen && !isScrollingUp) {
          setAnimationFrozen(true);
          frozenProgress.current = scrollYProgress.get();
        }
      }
    } else {
      setIsFixed(false);
      setContainerTop(0);
    }
    
    // Handle animation progress
    if (isMobile) {
      // Mobile: Bidirectional animation like desktop (scroll up = rollback)
      if (sectionTop <= animationTriggerPoint && sectionTop > -(sectionHeight - windowHeight + animationTriggerPoint)) {
        const scrolled = Math.abs(sectionTop - animationTriggerPoint);
        const scrollableDistance = sectionHeight - windowHeight + animationTriggerPoint;
        const rawProgress = scrolled / scrollableDistance;
        const easedProgress = Math.min(1, Math.max(0,
          rawProgress < 0.5
            ? 2 * rawProgress * rawProgress
            : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2
        ));
        scrollYProgress.set(easedProgress);
      } else if (sectionTop > animationTriggerPoint) {
        scrollYProgress.set(0);
      } else {
        scrollYProgress.set(1);
      }
    } else {
      if (!animationFrozen) {
        if (sectionTop <= animationTriggerPoint && sectionTop > -(sectionHeight - windowHeight + animationTriggerPoint)) {
          const scrolled = Math.abs(sectionTop - animationTriggerPoint);
          const scrollableDistance = sectionHeight - windowHeight + animationTriggerPoint;
          const rawProgress = scrolled / scrollableDistance;
          
          // Enhanced easing with smoothstep
          const smoothstep = (x: number) => {
            x = Math.max(0, Math.min(1, x));
            return x * x * x * (x * (x * 6 - 15) + 10);
          };
          
          const easedProgress = smoothstep(rawProgress);
          targetProgress.current = easedProgress;
          
        } else if (sectionTop > animationTriggerPoint) {
          targetProgress.current = 0;
        } else {
          targetProgress.current = 1;
        }
      } else {
        targetProgress.current = frozenProgress.current;
      }
    }
    
    lastScrollTop.current = currentScrollTop;
  }, [scrollYProgress, animationFrozen, isMobile]);
  
  // Smooth animation loop with dampening
  useEffect(() => {
    if (isMobile) return; // Skip dampening on mobile
    
    const animateProgress = () => {
      // Lerp (linear interpolation) for smooth transition
      const dampeningFactor = 0.12; // Lower = smoother/slower
      currentProgress.current += (targetProgress.current - currentProgress.current) * dampeningFactor;
      
      // Only update if there's significant change
      if (Math.abs(targetProgress.current - currentProgress.current) > 0.001) {
        scrollYProgress.set(currentProgress.current);
      }
      
      rafId.current = requestAnimationFrame(animateProgress);
    };
    
    rafId.current = requestAnimationFrame(animateProgress);
    
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [scrollYProgress, isMobile]);
  
  useEffect(() => {
    let scrollRafId: number | null = null;
    
    // Check mobile and calculate images per row
    const checkResponsive = () => {
      const width = window.innerWidth;
      const wasMobile = isMobile;
      const newIsMobile = width < 810;
      setIsMobile(newIsMobile);
      
      // Reset any mobile-specific states when switching between mobile/desktop
      if (wasMobile !== newIsMobile) {
        // Any cleanup can go here if needed
      }
      
      if (width >= 810) {
        setImagesPerRow(5);
      } else if (width >= 640) {
        setImagesPerRow(3);
      } else {
        setImagesPerRow(2);
      }
    };
    checkResponsive();
    
    const handleResize = () => {
      checkResponsive();
    };
    window.addEventListener('resize', handleResize);
    
    // Optimized scroll event with RAF throttling
    const handleScrollEvent = () => {
      if (scrollRafId) return;
      
      scrollRafId = requestAnimationFrame(() => {
        handleScrollOptimized();
        scrollRafId = null;
      });
    };
    
    window.addEventListener('scroll', handleScrollEvent, { passive: true });
    handleScrollEvent();
    
    // Lenis support
    const lenis = (window as unknown as { lenis?: { on: (event: string, handler: () => void) => void; off: (event: string, handler: () => void) => void } }).lenis;
    if (lenis) {
      lenis.on('scroll', handleScrollEvent);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
      window.removeEventListener('resize', handleResize);
      if (lenis) {
        lenis.off('scroll', handleScrollEvent);
      }
      if (scrollRafId) {
        cancelAnimationFrame(scrollRafId);
      }
    };
  }, [handleScrollOptimized, isMobile]);

  const sectionHeight = isMobile ? '2200px' : '1500px';

  return (
    <section
      ref={sectionRef}
      className="relative bg-[gold] w-full"
      style={{
        height: sectionHeight,
        minHeight: sectionHeight,
        maxHeight: 'none',
      }}
      id="thanhtich"
      data-lenis-prevent-touch
    >
      {/* Container that switches between fixed and absolute positioning */}
      <div
        ref={containerRef}
        className={`z-10 w-full flex justify-center items-center overflow-hidden bg-[gold] transition-none ${
          isMobile ? 'h-auto relative py-12' : 'h-screen'
        }`}
        style={{
          position: isMobile ? 'relative' : (isFixed ? 'fixed' : 'absolute'),
          top: isMobile ? 'auto' : (isFixed ? 0 : `${containerTop}px`),
          left: isMobile ? 'auto' : 0,
          right: isMobile ? 'auto' : 0,
          willChange: isMobile ? 'auto' : 'transform',
        }}
      >
        <div className={`w-full h-full flex justify-center content-center p-6 ${
          isMobile ? 'flex-col items-center gap-4' : 'flex-wrap gap-1'
        }`}>
          {isMobile ? (
            /* Mobile: Row-based layout with stagger reveal animation */
            <>
              {mobileRows.map((rowImages, rowIndex) => (
                <div key={`row-${rowIndex}`} className="flex gap-4 justify-center mb-6 w-full max-w-md">
                  {rowImages.map((image, indexInRow) => (
                    <MobileAchievementImage
                      key={image.id}
                      image={image}
                      scrollYProgress={scrollYProgress}
                      rowIndex={rowIndex}
                      indexInRow={indexInRow}
                      totalRows={mobileRows.length}
                      priority={rowIndex === 0}
                    />
                  ))}
                </div>
              ))}
            </>
          ) : (
            /* Desktop: Original grid with flying animation */
            <>
              {imageGroups.map(({ image, groupIndex, indexInGroup }) => (
                <AchievementImage
                  key={image.id}
                  image={image}
                  scrollYProgress={scrollYProgress}
                  groupIndex={groupIndex}
                  indexInGroup={indexInGroup}
                  priority={groupIndex === 0}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}