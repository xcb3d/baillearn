'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Statistics data
const statsData = [
  {
    id: 'thu-khoa',
    number: '2+',
    label: 'Đạt thủ khoa',
    mobileHidden: false
  },
  {
    id: 'dat-1000',
    number: '55+',
    label: 'Đạt 1000+',
    mobileHidden: false
  },
  {
    id: 'followers-tiktok',
    number: '23N+',
    label: 'Followers Tiktok',
    mobileHidden: false
  },
  {
    id: 'hoc-vien',
    number: '2N+',
    label: 'Học viên',
    mobileHidden: false
  }
];

// Carousel images for mobile
const carouselImages = [
  {
    id: 1,
    src: '/banner1.png',
    alt: 'BaiLearn Achievement Banner 1'
  },
  {
    id: 2,
    src: '/banner2.png',
    alt: 'BaiLearn Achievement Banner 2'
  }
];

// Individual stat component
const StatItem = ({ stat, index, isInView }: { stat: typeof statsData[0], index: number, isInView: boolean }) => {
  return (
    <motion.div 
      className={`flex flex-col justify-center items-center gap-1 w-[120px] h-[100px] p-4 relative overflow-hidden ${
        stat.mobileHidden ? 'hidden md:flex' : 'flex'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Number */}
      <motion.div 
        className="flex flex-col justify-center items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <p className="font-inter font-bold text-[36px] md:text-[42px] text-primary leading-none text-center">
          {stat.number}
        </p>
      </motion.div>
      
      {/* Label */}
      <motion.div 
        className="flex flex-col justify-center items-center"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-[12px] md:text-[14px] text-white-framer leading-tight text-center whitespace-nowrap">
          {stat.label}
        </p>
      </motion.div>
    </motion.div>
  );
};

// Responsive carousel component
const ResponsiveCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  return (
    <div className="relative w-[750px] h-[280px]">
      <div className="flex overflow-hidden w-full h-full relative rounded-xl">
        <motion.div 
          className="flex w-full h-full"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 25,
            mass: 1,
            velocity: isTransitioning ? 2 : 0
          }}
        >
          {carouselImages.map((image, index) => (
            <div 
              key={image.id}
              className="w-full h-full flex-shrink-0"
            >
              <motion.div 
                className="w-full h-full relative"
                initial={{ opacity: 0, scale: 0.9, y: 30, rotateY: -15 }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0.7,
                  scale: index === currentSlide ? 1 : 0.95,
                  y: 0,
                  rotateY: 0,
                  filter: index === currentSlide ? "blur(0px)" : "blur(1px)"
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  mass: 0.9,
                  delay: index * 0.05
                }}
              >
                {/* Image with white border and rounded corners */}
                <motion.div
                  initial={{ filter: "brightness(0.8)", scale: 1 }}
                  animate={{
                    filter: index === currentSlide ? "brightness(1)" : "brightness(0.9)",
                    scale: index === currentSlide ? 1 : 0.98
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1920}
                    height={1440}
                    className="block w-full h-full object-cover object-center rounded-2xl border-4 border-white shadow-lg"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxWidth: 'none',
                      maxHeight: 'none'
                    }}
                  />
                </motion.div>
                
                {/* Depth overlay for non-active slides */}
                <motion.div
                  className="absolute inset-0 bg-black rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentSlide ? 0 : 0.15
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Navigation Buttons - Conditional display */}
      {currentSlide > 0 && (
        <motion.button
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center z-10 border-none cursor-pointer overflow-hidden backdrop-blur-sm"
          onClick={goToPrevious}
          disabled={isTransitioning}
          whileHover={{ 
            scale: 1.15, 
            backgroundColor: "rgba(0,0,0,0.5)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          whileTap={{ 
            scale: 0.85,
            transition: { duration: 0.1 }
          }}
          aria-label="Previous"
          initial={{ opacity: 0, scale: 0.3, x: -30, rotate: -180 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            x: 0,
            rotate: 0,
            transition: { 
              type: "spring", 
              stiffness: 200, 
              damping: 15, 
              mass: 1.2,
              delay: 0.1
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.3, 
            x: -30,
            rotate: -180,
            transition: { 
              duration: 0.3,
              ease: "easeInOut"
            }
          }}
          style={{
            border: 'none',
            margin: '0px',
            padding: '0px',
            pointerEvents: isTransitioning ? 'none' : 'auto'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </motion.button>
      )}

      {currentSlide < carouselImages.length - 1 && (
        <motion.button
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center z-10 border-none cursor-pointer overflow-hidden backdrop-blur-sm"
          onClick={goToNext}
          disabled={isTransitioning}
          whileHover={{ 
            scale: 1.15, 
            backgroundColor: "rgba(0,0,0,0.5)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          whileTap={{ 
            scale: 0.85,
            transition: { duration: 0.1 }
          }}
          aria-label="Next"
          initial={{ opacity: 0, scale: 0.3, x: 30, rotate: 180 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            x: 0,
            rotate: 0,
            transition: { 
              type: "spring", 
              stiffness: 200, 
              damping: 15, 
              mass: 1.2,
              delay: 0.1
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.3, 
            x: 30,
            rotate: 180,
            transition: { 
              duration: 0.3,
              ease: "easeInOut"
            }
          }}
          style={{
            border: 'none',
            margin: '0px',
            padding: '0px',
            pointerEvents: isTransitioning ? 'none' : 'auto'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </motion.button>
      )}

    </div>
  );
};

// Main achievements section component
export default function AchievementsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.2,
    margin: "-50px 0px" 
  });

  return (
    <motion.section 
      ref={sectionRef}
      className="bg-blue-prime flex flex-col gap-5 w-full min-h-[424px] relative overflow-hidden" 
      id="stats-upd"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main content container */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full min-h-[316px] px-2 py-12 md:py-16 relative gap-8 lg:gap-16">
        
        {/* Carousel - Left side on desktop, top on mobile */}
        <div className="flex-shrink-0 order-2 lg:order-1">
          <ResponsiveCarousel />
        </div>

        {/* Stats Grid - Right side on desktop, bottom on mobile */}
        <motion.div 
          className="flex flex-col justify-center items-center gap-6 lg:gap-8 order-1 lg:order-2 bg-blue-prime/20 rounded-2xl p-6 border border-white/10 backdrop-blur-sm shadow-xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.3
          }}
        >
          
          {/* Stats Row 1 */}
          <div className="flex flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8">
            <StatItem stat={statsData[0]} index={0} isInView={isInView} />
            <div className="w-px h-16 bg-white/20"></div>
            <StatItem stat={statsData[2]} index={2} isInView={isInView} />
          </div>

          {/* Horizontal separator */}
          <div className="w-full h-px bg-white/20"></div>

          {/* Stats Row 2 */}
          <div className="flex flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8">
            <StatItem stat={statsData[1]} index={1} isInView={isInView} />
            <div className="w-px h-16 bg-white/20"></div>
            <StatItem stat={statsData[3]} index={3} isInView={isInView} />
          </div>
        </motion.div>
      </div>

      {/* Decorative Assets - Only visible on large screens */}
      <div className="hidden lg:block">
        {/* Left decorative element */}
        <motion.div 
          className="absolute top-[-22px] left-[-50px] w-[156px] h-[136px] rotate-[28deg] overflow-visible"
          initial={{ opacity: 0, x: -100, rotate: 0 }}
          animate={isInView ? { opacity: 1, x: 0, rotate: 28 } : { opacity: 0, x: -100, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/bentocard-float1.png"
            alt="Decorative element 1"
            width={1122}
            height={977}
            className="block w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Right decorative element */}
        <motion.div 
          className="absolute top-[-91px] right-[-117px] w-[217px] h-[217px] -rotate-[25deg] overflow-visible"
          initial={{ opacity: 0, x: 100, rotate: 0 }}
          animate={isInView ? { opacity: 1, x: 0, rotate: -25 } : { opacity: 0, x: 100, rotate: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Image
            src="/bentocard-float2.png"
            alt="Decorative element 2"
            width={1142}
            height={1142}
            className="block w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
