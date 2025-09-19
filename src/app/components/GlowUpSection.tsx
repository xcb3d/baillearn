'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Feedback images data
const feedbackImages = [
  {
    id: 1,
    src: '/feedback1.jpg',
    alt: 'Student feedback 1',
    width: 359,
    height: 359
  },
  {
    id: 2,
    src: '/feedback2.jpg',
    alt: 'Student feedback 2',
    width: 359,
    height: 359
  },
  {
    id: 3,
    src: '/feedback3.jpg',
    alt: 'Student feedback 3',
    width: 358,
    height: 358
  },
  {
    id: 4,
    src: '/feedback4.jpg',
    alt: 'Student feedback 4',
    width: 359,
    height: 359
  },
  {
    id: 5,
    src: '/feedback5.jpg',
    alt: 'Student feedback 5',
    width: 359,
    height: 359
  },
  {
    id: 6,
    src: '/feedback6.jpg',
    alt: 'Student feedback 6',
    width: 359,
    height: 359
  },
  {
    id: 7,
    src: '/feedback7.jpg',
    alt: 'Student feedback 7',
    width: 359,
    height: 359
  },
  {
    id: 8,
    src: '/feedback8.jpg',
    alt: 'Student feedback 8',
    width: 359,
    height: 359
  },
  {
    id: 9,
    src: '/feedback9.jpg',
    alt: 'Student feedback 9',
    width: 359,
    height: 359
  },
  {
    id: 10,
    src: '/feedback10.jpg',
    alt: 'Student feedback 10',
    width: 359,
    height: 359
  },
  {
    id: 11,
    src: '/feedback11.jpg',
    alt: 'Student feedback 11',
    width: 359,
    height: 359
  },
  {
    id: 12,
    src: '/feedback12.jpg',
    alt: 'Student feedback 12',
    width: 359,
    height: 359
  },
  {
    id: 13,
    src: '/feedback13.jpg',
    alt: 'Student feedback 13',
    width: 359,
    height: 359
  },
  {
    id: 14,
    src: '/feedback14.jpg',
    alt: 'Student feedback 14',
    width: 359,
    height: 359
  },
  {
    id: 15,
    src: '/feedback15.jpg',
    alt: 'Student feedback 15',
    width: 359,
    height: 359
  },
  {
    id: 16,
    src: '/feedback16.jpg',
    alt: 'Student feedback 16',
    width: 359,
    height: 359
  },
  {
    id: 17,
    src: '/feedback17.jpg',
    alt: 'Student feedback 17',
    width: 359,
    height: 359
  },
  {
    id: 18,
    src: '/feedback18.jpg',
    alt: 'Student feedback 18',
    width: 359,
    height: 359
  },
  {
    id: 19,
    src: '/feedback19.jpg',
    alt: 'Student feedback 19',
    width: 359,
    height: 359
  },
  {
    id: 20,
    src: '/feedback20.jpg',
    alt: 'Student feedback 20',
    width: 359,
    height: 359
  },
  {
    id: 21,
    src: '/feedback21.jpg',
    alt: 'Student feedback 21',
    width: 359,
    height: 359
  },
  {
    id: 22,
    src: '/feedback22.jpg',
    alt: 'Student feedback 22',
    width: 359,
    height: 359
  },
  {
    id: 23,
    src: '/feedback23.jpg',
    alt: 'Student feedback 23',
    width: 359,
    height: 359
  }
];

// Individual feedback image component
const FeedbackImage = ({ image, index, isInView }: { 
  image: typeof feedbackImages[0], 
  index: number, 
  isInView: boolean 
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      className="flex-shrink-0"
    >
      <div
        className="rounded-xl relative overflow-hidden shadow-lg"
        style={{
          aspectRatio: '1 / 1',
          height: `${image.height}px`,
          width: `${image.width}px`
        }}
      >
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={`${image.width}px`}
            className="block w-full h-full object-cover object-center rounded-inherit"
          />
        </div>
      </div>
    </motion.li>
  );
};

// Auto-scrolling carousel component
const AutoScrollCarousel = ({ isInView }: { isInView: boolean }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isInView || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationId: number;

    const scroll = () => {
      if (scrollContainer) {
        // Check if mobile
        const isMobile = window.innerWidth < 768;
        // Tốc độ cuộn: Mobile chậm hơn, desktop giữ nguyên
        const baseSpeed = isMobile ? 1.2 : 2.15;
        const scrollSpeed = isHovering ? (isMobile ? 0.6 : 1.0) : baseSpeed;
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Infinite scroll: Reset về giữa khi gần cuối để tạo hiệu ứng vĩnh cữu
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isInView, isHovering]);

  return (
    <div 
      className="relative w-full max-w-[1083px] h-[387px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.section 
        className="flex w-full h-full max-w-full max-h-full items-center m-0 p-2.5 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
        }}
        aria-roledescription="carousel"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div
          ref={scrollRef}
          className="flex w-full h-full max-w-full max-h-full items-center m-0 p-0 gap-2.5 relative overflow-x-hidden carousel-scrollbar"
          style={{
            scrollBehavior: 'auto',
            scrollSnapType: 'none',
            pointerEvents: 'none', // Vô hiệu hóa tương tác chuột
            userSelect: 'none' // Ngăn chọn text
          }}
        >
          {/* Triple duplicate để đảm bảo infinite scroll hoàn hảo */}
          {feedbackImages.map((image, index) => (
            <FeedbackImage
              key={`first-${image.id}`}
              image={image}
              index={index}
              isInView={isInView}
            />
          ))}
          {feedbackImages.map((image, index) => (
            <FeedbackImage
              key={`second-${image.id}`}
              image={image}
              index={index + feedbackImages.length}
              isInView={isInView}
            />
          ))}
          {feedbackImages.map((image, index) => (
            <FeedbackImage
              key={`third-${image.id}`}
              image={image}
              index={index + feedbackImages.length * 2}
              isInView={isInView}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

// Main GlowUp section component
export default function GlowUpSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.2,
    margin: "-50px 0px" 
  });

  return (
    <motion.section
      ref={sectionRef}
      className="bg-gradient-to-b from-white-framer to-primary overflow-clip flex flex-col justify-start items-center gap-10 w-full px-5 py-25 relative"
      id="doi-ngu-upd-1"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header section with decorative image and titles */}
      <motion.div 
        className="flex flex-col justify-center items-center gap-2.5 w-full h-min p-0 relative overflow-visible"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Decorative Group 64 Image - hidden on mobile/tablet */}
        <motion.div 
          className="hidden lg:block md:hidden sm:hidden mb-4"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -10 }}
          transition={{ 
            duration: 1, 
            delay: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
        >
          <div className="aspect-[1.6672] h-13 z-10 flex-none w-[88px] relative overflow-visible">
            <div className="absolute rounded-inherit inset-0">
              <Image
                src="/crown.png"
                alt="Decorative element"
                width={4198}
                height={2518}
                sizes="88px"
                className="block w-full h-full object-cover object-center rounded-inherit"
              />
            </div>
          </div>
        </motion.div>

        {/* Title & Subtitle */}
        <motion.div
          className="outline-none flex flex-col justify-start flex-shrink-0 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Crown Image */}
          <motion.div
            className="mb-2"
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: -20 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            <Image
              src="/crown.png"
              alt="Crown"
              width={88}
              height={73}
              className="object-contain"
            />
          </motion.div>

          <motion.p
            className="font-inter font-black text-center text-blue-prime mb-2"
            style={{ fontSize: '45px' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            GÓC GLOW-UP
          </motion.p>
          <motion.p
            className="font-inter font-semibold text-center text-blue-prime"
            style={{ fontSize: '27px' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Thành tựu, Feedback học viên
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Carousel Container for Feedback Images */}
      <motion.div 
        className="flex justify-center items-center w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <AutoScrollCarousel isInView={isInView} />
      </motion.div>
    </motion.section>
  );
}