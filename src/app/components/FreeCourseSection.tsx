'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// SVG Components for decorative assets
const Frame341SVG = () => (
  <svg viewBox="0 0 1122 977" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="561 0, 1122 977, 0 977" fill="rgba(0,0,0,0.1)"/>
  </svg>
);

const Frame340SVG = () => (
  <svg viewBox="0 0 1227 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="613.5" cy="613.5" r="500" fill="rgba(0,0,0,0.1)"/>
  </svg>
);

const Icon339SVG = () => (
  <svg viewBox="0 0 1142 1142" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="571" cy="571" r="500" fill="gold"/>
  </svg>
);

// Interface for free course data
interface FreeCourse {
  id: string;
  title: string;
  shortDescription: React.ReactNode;
  fullDescription: React.ReactNode;
  imageUrl: string;
  buttonText: string;
}

// Sample free courses data
const freeCourses: FreeCourse[] = [
  {
    id: 'tuan-le-do',
    title: 'Manifest ĐGNL HCM Tuần Lễ Đỏ (FREE)',
    shortDescription: (
      <>
        🎯 TUẦN LỄ ĐỎ ĐÓN QUỐC KHÁNH - Manifest Điểm Cao ĐGNL HCM<br />
        🔥 Chuỗi livestream MIỄN PHÍ 1 tuần từ BaiLearn – xuất pháf, chuẩn bị kiến thức cho kỳ thi ĐGNL HCM 2026!<br />
        👉 Dành cho 2k8 muốn khởi động sớm<br />
        📌 Cơ hội vàng để học, luyện đề, và nhẫn bí kíp chiến thuật từ đội ngũ giáo viên chất lượng cao!
      </>
    ),
    fullDescription: (
      <>
        🎯 TUẦN LỄ ĐỎ ĐÓN QUỐC KHÁNH - Manifest Điểm Cao ĐGNL HCM<br />
        🔥 Chuỗi livestream MIỄN PHÍ 1 tuần từ BaiLearn – xuất phát, chuẩn bị kiến thức cho kỳ thi ĐGNL HCM 2026 – do đội ngũ giáo viên chất lượng từ BaiLearn trực tiếp giảng dạy.<br />
        📌 Thời gian livestream: từ 27/8 đến 2/9, mỗi tối từ 21h30 đến 23h00<br />
        📍 Nền tảng: Livestream trực tiếp trên kênh TikTok BaiLearn<br />
        👩‍🎓 Dành cho:<br />
        2k8: Khởi động sớm – làm quen cấu trúc đề, cách học thông minh để bứt tốc từ bây giờ.<br />
        <br />
        🎁 Bạn nhận được gì khi tham gia?<br />
        Ôn tập sớm kiến thức trọng tâm – bám sát đề thi ĐGNL HCM<br />
        Luyện đề trực tiếp cùng giáo viên – sửa chi tiết, chỉ cách phân tích và tránh bẫy<br />
        Tặng kèm tài liệu ôn tập, định hướng chiến thuật.<br />
        Cơ hội tương tác trực tiếp, hỏi - đáp ngay tại livestream
      </>
    ),
    imageUrl: 'https://framerusercontent.com/images/Awv7lLS5U3ZHJWvyiJbgvx1COEE.png?scale-down-to=1024',
    buttonText: 'Tham gia ngay'
  },
  {
    id: 'bootcamp-dgnl',
    title: 'Bootcamp ĐGNL HCM 2026 (FREE)',
    shortDescription: (
      <>
        🚀 BOOTCAMP ĐGNL HCM 2026 - Chiến lược đạt điểm cao<br />
        🎓 Khóa học miễn phí 3 ngày từ BaiLearn - Tập trung cao độ cho kỳ thi ĐGNL HCM!<br />
        🔥 Dành cho học sinh 2k8 định hướng đại học<br />
        ⚡ Cơ hội vàng để làm chủ kì thi và định hướng tương lai!
      </>
    ),
    fullDescription: (
      <>
        🚀 BOOTCAMP ĐGNL HCM 2026 - Chiến lược đạt điểm cao<br />
        🎓 Khóa học miễn phí 3 ngày từ BaiLearn - Tập trung cao độ với đội ngũ giáo viên kinh nghiệm.<br />
        📌 Thời gian: Cuối tuần 21-22/9, toàn thời gian từ 8h-17h<br />
        📍 Địa điểm: Online qua Zoom + Offline tại TP.HCM<br />
        🎯 Khối lượng: 18 tiết học yếu cầu cao<br />
        2k8: Bootcamp chuyên sâu - Làm chủ toàn bộ kiến thức cốt lõi.<br />
        <br />
        🎁 Nội dung Bootcamp:<br />
        Phương pháp giải nhanh toàn - lý - hóa chuyên sâu<br />
        Chiến thuật làm bài hiệu quả và quản lý thời gian<br />
        Tài liệu độc quyền và bộ đề thử sức thực tế.<br />
        Giải đáp thắc mắc 1-1 cùng giáo viên
      </>
    ),
    imageUrl: 'https://framerusercontent.com/images/Awv7lLS5U3ZHJWvyiJbgvx1COEE.png?scale-down-to=1024',
    buttonText: 'Đăng ký ngay'
  },
  {
    id: 'workshop-free',
    title: 'Workshop ĐGNL - Miễn Phí (FREE)',
    shortDescription: (
      <>
        🎨 WORKSHOP ĐGNL SPECIAL - Khám phá bí mật điểm cao<br />
        🎆 Sự kiện đặc biệt miễn phí 1 ngày từ BaiLearn - Trải nghiệm thực tế!<br />
        🏆 Dành cho mọi học sinh quan tâm đến ĐGNL<br />
        🔍 Khám phá cách học hiệu quả và chiến lược thi thâng!
      </>
    ),
    fullDescription: (
      <>
        🎨 WORKSHOP ĐGNL SPECIAL - Khám phá bí mật điểm cao<br />
        🎆 Sự kiện đặc biệt miễn phí 1 ngày từ BaiLearn - Trải nghiệm học tập thực tế với giáo viên.<br />
        📌 Thời gian: Chủ nhật 15/10, từ 14h-18h chiều<br />
        📍 Hình thức: Interactive Workshop - Tương tác trực tiếp<br />
        🎯 Đối tượng: Tất cả học sinh muốn tìm hiểu ĐGNL<br />
        Trải nghiệm: Workshop thực hành - Làm đề, thảo luận nhóm.<br />
        <br />
        🎁 Bạn sẽ trải nghiệm:<br />
        Phân tích cấu trúc đề thi ĐGNL chi tiết<br />
        Làm thử đề mẫu và nhận đánh giá trực tiếp<br />
        Tài liệu hướng dẫn chi tiết và lộ trình ôn thi.<br />
        Kết nối với cộng đồng học tập tại BaiLearn
      </>
    ),
    imageUrl: 'https://framerusercontent.com/images/Awv7lLS5U3ZHJWvyiJbgvx1COEE.png?scale-down-to=1024',
    buttonText: 'Tham gia Workshop'
  }
];

export default function FreeCourseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentCourse, setCurrentCourse] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  
  const AUTO_PLAY_INTERVAL = 6000; // 6 seconds

  // Scroll animation for content items
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = sectionRef.current?.querySelectorAll('[data-animate]');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (freeCourses.length <= 1 || isHovered || isExpanded) return;

    const timer = setInterval(() => {
      setCurrentCourse((prev) => (prev + 1) % freeCourses.length);
      // Reset states when auto-switching
      setIsExpanded(false);
      setHasJoined(false);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isHovered, isExpanded, lastInteraction]);

  // Swipe gesture handlers
  const handleSwipeEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 50;
    const swipeVelocity = 500;
    
    // Reset interaction timer
    setLastInteraction(Date.now());
    
    if (Math.abs(info.offset.x) > swipeThreshold || Math.abs(info.velocity.x) > swipeVelocity) {
      if (info.offset.x > 0) {
        // Swipe right - previous course
        goToPrevious();
      } else {
        // Swipe left - next course
        goToNext();
      }
    }
  };

  const goToNext = () => {
    setCurrentCourse((prev) => (prev + 1) % freeCourses.length);
    setIsExpanded(false);
    setHasJoined(false);
    setLastInteraction(Date.now());
  };

  const goToPrevious = () => {
    setCurrentCourse((prev) => (prev - 1 + freeCourses.length) % freeCourses.length);
    setIsExpanded(false);
    setHasJoined(false);
    setLastInteraction(Date.now());
  };

  const goToCourse = (index: number) => {
    setCurrentCourse(index);
    setIsExpanded(false);
    setHasJoined(false);
    setLastInteraction(Date.now());
  };

  return (
    <section 
      ref={sectionRef}
      className="
        flex flex-col lg:flex-row justify-start items-start 
        w-full min-h-min py-12 px-4 md:px-8 lg:px-12
        relative bg-cover bg-center rounded-3xl overflow-hidden
      "
      style={{
        backgroundImage: "url('https://framerusercontent.com/images/RkybyQc7REVuHhtMWjuHcc886PI.png?width=1200&height=1519')"
      }}
      data-framer-name="Khoa hoc Free Section" 
      id="khoa-free" 
      data-animate-on-scroll-section
    >
      {/* Carousel indicators - only show if multiple courses */}
      {freeCourses.length > 1 && (
        <div className="flex justify-center items-center gap-2 mb-6">
          {freeCourses.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCourse(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentCourse
                  ? 'bg-primary scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to course ${index + 1}`}
            />
          ))}
        </div>
      )}

      <motion.div 
        className="flex flex-col lg:flex-row items-center w-full max-w-7xl h-min mx-auto justify-start gap-6"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleSwipeEnd}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'grab' }}
        whileDrag={{ cursor: 'grabbing' }}
      >
        
        {/* Left Column - Content */}
        <div className="
          flex flex-col justify-start items-start lg:items-start 
          gap-8 lg:gap-12 w-full lg:w-[680px] h-min 
          py-0 pl-0 lg:pl-2.5 relative overflow-hidden
          text-left lg:text-left order-first lg:order-first
          opacity-0 translate-y-10 transition-all duration-700 ease-out
        " data-animate>
          
          {/* Title */}
          <div className="w-full lg:w-[620px] h-auto relative overflow-visible">
            <h1 className="
              font-inter font-bold 
              text-gray-800 leading-tight lg:leading-none
              tracking-tight lg:tracking-[-2px]
            " style={{ fontSize: '50px' }}>
              {freeCourses[currentCourse].title}
            </h1>
          </div>

          {/* Description with expand/collapse */}
          <div className="w-full h-auto relative overflow-visible opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200" data-animate>
            <div className="
              font-inter font-medium 
              text-lg sm:text-xl md:text-2xl
              leading-loose sm:leading-relaxed lg:leading-normal
              tracking-normal lg:tracking-[-0.5px]
            "
            style={{ color: '#888888' }}>
              {/* Animated content transition with Framer Motion */}
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isExpanded ? (
                    <motion.div
                      key={`short-${currentCourse}`}
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ 
                        duration: 0.4, 
                        ease: [0.25, 0.46, 0.45, 0.94],
                        height: { duration: 0.3 }
                      }}
                      className="overflow-hidden"
                    >
                      {freeCourses[currentCourse].shortDescription}
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`full-${currentCourse}`}
                      initial={{ opacity: 0, height: 0, y: 10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 10 }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.25, 0.46, 0.45, 0.94],
                        height: { duration: 0.4 }
                      }}
                      className="overflow-hidden"
                    >
                      {freeCourses[currentCourse].fullDescription}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="
            flex flex-col justify-center lg:justify-start items-center 
            gap-4 w-full h-min relative overflow-hidden
            opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300
          " data-animate>
            
            {/* Xem chi tiết button - simple text only */}
            <button 
              className="
                relative flex items-center justify-center gap-2 
                w-full md:w-auto min-h-[48px] p-3
                bg-transparent border-none
                transition-all duration-200 ease-out
                hover:opacity-80 focus:outline-none
              "
              onClick={() => setIsExpanded(!isExpanded)}
              type="button">
              
              <p className="font-inter font-medium text-lg leading-none text-gray-600 hover:text-gray-800 transition-colors duration-200">
                {isExpanded ? 'Thu gọn' : 'Xem thêm chi tiết'}
              </p>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} text-gray-600`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Tham gia ngay button - exact copy from BentoSection */}
            <motion.div
              className="cursor-pointer inline-flex relative overflow-visible rounded-[22.74px] shadow-none w-full md:w-auto"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                className="relative w-full"
                onClick={() => {
                  if (hasJoined) {
                    setIsExpanded(false);
                    setHasJoined(false);
                  } else {
                    setHasJoined(true);
                    setIsExpanded(true);
                  }
                }}
                type="button"
                variants={{
                  hover: { scale: 1.05 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Button Background with Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-primary rounded-[22.74px]"
                  initial={{ opacity: 0, scale: 1, filter: "blur(0px)" }}
                  variants={{
                    hover: {
                      opacity: 0.3,
                      scale: 1.1,
                      filter: "blur(20px)"
                    }
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    mass: 0.3
                  }}
                />
                
                {/* Main Button Content */}
                <div className="relative bg-primary flex flex-row justify-center items-center
                                h-[50px] py-0 px-[40px] rounded-[45.47px] shadow-none overflow-visible
                                hover:shadow-[0_10px_30px_rgba(255,215,0,0.4)] transition-shadow duration-300">
                  
                  {/* Button Text */}
                  <div className="outline-none flex flex-col justify-center flex-shrink-0
                                 text-blue-prime font-inter font-semibold text-2xl leading-[1.4] z-20">
                    {hasJoined ? 'Thu gọn' : freeCourses[currentCourse].buttonText}
                  </div>
                  
                  {/* Decorative Image 1 - Top Right */}
                  <motion.div
                    className="absolute -top-[8px] -right-[8px] w-[17px] h-[17px] z-30 overflow-visible pointer-events-none"
                    initial={{
                      opacity: 0,
                      scale: 0.2,
                      rotate: -30,
                      x: 15,
                      y: 15
                    }}
                    variants={{
                      hover: {
                        opacity: 1,
                        scale: 1.5,
                        rotate: 10,
                        x: 8,
                        y: -8
                      }
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      mass: 0.3
                    }}
                  >
                    <Image
                      src="/bentocard-float2.png"
                      alt=""
                      width={17}
                      height={17}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                  
                  {/* Decorative Image 2 - Top Left */}
                  <motion.div
                    className="absolute -top-[10px] -left-[10px] w-[20px] h-[20px] z-30 overflow-visible pointer-events-none"
                    initial={{
                      opacity: 0,
                      scale: 0.2,
                      rotate: 15,
                      x: 20,
                      y: 20
                    }}
                    variants={{
                      hover: {
                        opacity: 1,
                        scale: 1.4,
                        rotate: -15,
                        x: -10,
                        y: -10
                      }
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      mass: 0.3
                    }}
                  >
                    <Image
                      src="/bentocard-float4.png"
                      alt=""
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                  
                  {/* Decorative Image 3 - Bottom Right */}
                  <motion.div
                    className="absolute -bottom-[5px] right-[35px] w-[14px] h-[14px] z-30 overflow-visible pointer-events-none"
                    initial={{
                      opacity: 0,
                      scale: 0.2,
                      rotate: -4,
                      x: -10,
                      y: -10
                    }}
                    variants={{
                      hover: {
                        opacity: 1,
                        scale: 1.6,
                        rotate: 20,
                        x: 12,
                        y: 8
                      }
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      mass: 0.3
                    }}
                  >
                    <Image
                      src="/bentocard-float1.png"
                      alt=""
                      width={14}
                      height={14}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                  
                  {/* Shine Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-[45.47px] overflow-hidden pointer-events-none"
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: {
                        opacity: 1
                      }
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      mass: 0.3
                    }}
                  >
                    <motion.div
                      className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      initial={{ x: "-100%" }}
                      variants={{
                        hover: {
                          x: "200%"
                        }
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                        mass: 0.3
                      }}
                    />
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>
          </div>

          {/* Decorative Asset 1 - Only visible on desktop */}
          <div className="
            hidden lg:block absolute top-[11px] right-4 
            w-[65px] h-[110px] overflow-visible 
            transform rotate-[16deg] z-10
          " 
               data-framer-name="Asset 1@3x">
            <div className="absolute rounded-inherit inset-0">
              <Image 
                src="https://framerusercontent.com/images/rJEKBKuJTHkXk8IF73A6QLkTz30.png?width=157&height=265" 
                alt="Decorative asset" 
                width={157} 
                height={265}
                className="block w-full h-full object-cover object-center rounded-inherit"
              />
            </div>
          </div>
        </div>

        {/* Right Column / Image Area */}
        <div className="
          flex-1 flex flex-col justify-center items-center gap-5 
          w-full h-full min-h-[400px] lg:min-h-[600px]
          p-0 relative overflow-hidden order-last lg:order-last
          opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100
        " data-animate
             data-framer-name="Image">
          <div className="absolute inset-0" style={{ borderRadius: '20px' }}>
            <Image 
              src={freeCourses[currentCourse].imageUrl} 
              alt={`${freeCourses[currentCourse].title} illustration`} 
              width={2000} 
              height={2000}
              className="block w-full h-full object-cover object-center"
              style={{ borderRadius: '20px' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 507px"
              priority
            />
          </div>
        </div>

        {/* Decorative Assets - Only visible on desktop */}
        <div className="hidden lg:block">
          <div className="absolute top-[567px] left-[80%] w-[26px] h-[23px] z-10 overflow-visible transform rotate-[30deg]" 
               data-framer-name="Frame 341">
            <div className="absolute rounded-inherit inset-0 text-blue-600">
              <Frame341SVG />
            </div>
          </div>

          <div className="absolute top-[580px] right-4 w-[20px] h-[20px] z-10 overflow-visible transform rotate-[72deg]" 
               data-framer-name="Frame 340">
            <div className="absolute rounded-inherit inset-0 text-blue-600">
              <Frame340SVG />
            </div>
          </div>

          <div className="absolute top-0 right-4 w-[94px] h-[94px] z-10 overflow-visible" 
               data-framer-name="Frame 339">
            <div className="absolute rounded-inherit inset-0 text-blue-600">
              <Icon339SVG />
            </div>
          </div>

          <div className="absolute bottom-0 left-[75%] w-[20px] h-[20px] z-10 overflow-visible" 
               data-framer-name="Frame 339-2">
            <div className="absolute rounded-inherit inset-0 text-blue-600">
              <Icon339SVG />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}