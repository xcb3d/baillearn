'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const BentoSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.2,
    margin: "-50px 0px" 
  });

  return (
    <motion.section
      ref={sectionRef}
      id="xps"
      className="border-[3px] border-primary bg-blue-prime flex flex-col justify-center items-center gap-12 w-full min-h-[879px] py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title: KHÓA HỌC LUYỆN THI ĐGNL HCM 2026 */}
      <motion.div
        className="z-10 flex flex-col justify-start flex-shrink-0 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Desktop/Tablet Title */}
        <div className="hidden lg:block">
          <p className="font-inter font-bold text-center text-primary" style={{ fontSize: '48px' }}>KHÓA HỌC</p>
          <p className="font-inter font-bold text-center text-primary" style={{ fontSize: '60px' }}>LUYỆN THI ĐGNL HCM 2026</p>
        </div>
        {/* Mobile Title - Simplified responsive approach */}
        <div className="block lg:hidden">
          <p className="font-inter font-bold text-center text-primary"
             style={{ fontSize: 'clamp(32px, 5vw, 40px)' }}>KHÓA HỌC</p>
          <p className="font-inter font-bold text-center text-primary"
             style={{ fontSize: 'clamp(42px, 7vw, 52px)' }}>LUYỆN THI ĐGNL HCM 2026</p>
        </div>
      </motion.div>

      {/* Call to Action Button with Pop-out Image Decorations - Natural flow */}
      <motion.div
        className="z-10 flex justify-center items-center"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 150 }}
      >
        <motion.div
          className="cursor-pointer inline-flex relative overflow-visible rounded-[22.74px] shadow-none"
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          <motion.a
            className="relative"
            href="https://www.facebook.com/bailearn"
            target="_blank"
            rel="noopener"
            tabIndex={0}
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
                  filter: "blur(20px)",
                  transition: { duration: 0.3 }
                }
              }}
            />
            
            {/* Main Button Content */}
            <div className="relative bg-primary flex flex-row justify-center items-center
                            h-[50px] py-0 px-[40px] rounded-[45.47px] shadow-none overflow-visible
                            hover:shadow-[0_10px_30px_rgba(255,215,0,0.4)] transition-shadow duration-300">
              
              {/* Button Text */}
              <div className="outline-none flex flex-col justify-center flex-shrink-0
                             text-blue-prime font-inter font-semibold text-2xl leading-[1.4] z-20">
                Xem chi tiết
              </div>
              
              {/* Decorative Image 1 - Top Right (Frame 339) - Flies out on hover */}
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
                    y: -8,
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }
                  }
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
              
              {/* Decorative Image 2 - Top Left (Frame 340) - Flies out on hover */}
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
                    y: -10,
                    transition: {
                      duration: 0.5,
                      delay: 0.05,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }
                  }
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
              
              {/* Decorative Image 3 - Bottom Right (Frame 341) - Flies out on hover */}
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
                    y: 8,
                    transition: {
                      duration: 0.5,
                      delay: 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }
                  }
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
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }
                }}
              >
                <motion.div
                  className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  initial={{ x: "-100%" }}
                  variants={{
                    hover: {
                      x: "200%",
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }
                  }}
                />
              </motion.div>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bento Card Grid - Custom CSS Grid with grid-template-areas */}
      <motion.div
        className="bento-grid z-10 p-0 w-full max-w-[1000px] h-[593px] flex-shrink-0 relative"
        style={{
          width: 'min(1000px, 90vw)',
          '--width-mobile': '362px',
          '--width-tablet': '760px',
          '--width-desktop': '1000px'
        } as React.CSSProperties}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >

        {/* Card 1: Lộ trình học - Chiếm 2 cột, 2 hàng (góc trên trái) */}
        <motion.div 
          className="bento-card-1 border-2 border-primary bg-blue-prime will-change-transform z-10 rounded-xl flex flex-row justify-start items-start gap-2.5 w-full h-full p-5 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgba(255, 215, 0, 0.8)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          {/* Heading & Supporting Text - Luôn ở góc trái trên cùng */}
          <div className="z-10 flex flex-col justify-start items-start gap-[5px] w-[300px] h-min p-0 absolute top-[10px] left-[15px] overflow-hidden
                          sm:w-[300px] sm:top-[16px] sm:left-[20px] sm:gap-[4.12px]
                          md:w-[500px] md:top-8 md:left-8 md:gap-[5px]
                          lg:w-[600px] lg:top-8 lg:left-8">
            <div className="outline-none flex flex-col justify-start flex-shrink-0 w-full">
              {/* Desktop/Tablet Title */}
              <div className="hidden lg:block">
                <h2 className="font-inter font-bold tracking-[-0.02em] leading-[1.1] text-left text-primary" style={{ fontSize: '42px' }}>Lộ trình học</h2>
              </div>
              {/* Mobile Title */}
              <div className="block lg:hidden">
                <h2 className="font-inter font-bold tracking-[-0.02em] leading-[1.1] text-left text-primary
                               text-[32px] sm:text-[36px]">
                  Lộ trình học
                </h2>
              </div>
            </div>
            {/* Description - Responsive width */}
            <div className="outline-none flex flex-col justify-start flex-shrink-0 w-[220px] sm:w-[280px] md:w-full">
              {/* Desktop/Tablet Description */}
              <div className="hidden lg:block">
                <p className="text-[16px] font-normal leading-[20.8px] text-left text-white-framer opacity-80">Lộ trình &ldquo;TỪ CƠ BẢN ĐẾN CHUYÊN SÂU&rdquo; với hơn 300 buổi học, chia thành 3 giai đoạn chiến lược</p>
              </div>
              {/* Mobile Description */}
              <div className="block lg:hidden">
                <p className="text-[13px] sm:text-[15px] font-normal leading-[1.3] text-left text-white-framer opacity-80">Lộ trình &ldquo;TỪ CƠ BẢN ĐẾN CHUYÊN SÂU&rdquo; với hơn 300 buổi học, chia thành 3 giai đoạn chiến lược</p>
              </div>
            </div>
          </div>
          {/* Visual (Chart) - Bottom half on mobile/tablet, bottom aligned on desktop */}
          <div className="absolute overflow-visible
                          bottom-0 left-0 right-0 h-[55%]
                          sm:bottom-0 sm:h-[55%] sm:overflow-visible
                          lg:bottom-[-50px] lg:left-0 lg:right-0 lg:h-[85%] lg:overflow-hidden">
            <motion.img 
              src="/chart.svg" 
              alt="Learning progress chart"
              className="absolute opacity-95
                         w-full h-auto min-h-full
                         -translate-x-[120px] translate-y-[45px] scale-[1.8]
                         sm:translate-x-0 sm:-translate-y-[60px] sm:scale-100
                         lg:absolute lg:inset-0 lg:translate-x-0 lg:translate-y-0 lg:scale-100 lg:min-h-0
                         object-cover object-top
                         lg:object-cover lg:object-[center_bottom]"
              style={{ 
                filter: 'brightness(1.5)'
              }}
              loading="lazy"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={isInView ? { opacity: 0.95, scale: 1 } : { opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
            
            {/* Chart Cursor - Nằm trên SVG với width thoải mái - Desktop only */}
            <div className="hidden lg:flex absolute w-[150px] h-[255px] flex-col justify-center items-center gap-[10px] overflow-visible z-10"
                 style={{
                   top: 'calc(65% - 142.5px)',
                   left: 'calc(75% - 75px)'
                 }}>
               {/* Marker Container */}
               <div className="absolute top-[1px] w-[104px] h-[104px] flex flex-col justify-center items-center gap-[13px] overflow-hidden"
                    style={{ left: 'calc(48.4375% - 94px)',
                      top: 'calc(65% - 185.5px)'
                     }}>
                
                {/* Marker 1 - Largest circle */}
                <div className="absolute bottom-0 left-0 right-0 aspect-square h-[104px] bg-primary opacity-35 flex-none overflow-hidden"
                     style={{
                       WebkitMask: 'radial-gradient(50% 50%, #000 99.99%, #0000 100%)',
                       mask: 'radial-gradient(50% 50%, #000 99.99%, #0000 100%)'
                     }}></div>
                
                {/* Marker 2 - Medium circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[65px] h-[65px] bg-primary opacity-40 flex-none overflow-hidden"
                     style={{
                       WebkitMask: 'radial-gradient(50% 50%, #000 99.99%, #0000 100%)',
                       mask: 'radial-gradient(50% 50%, #000 99.99%, #0000 100%)'
                     }}></div>
                
                {/* Marker 3 - Small white circle */}
                <div className="relative aspect-square w-[26px] h-[26px] bg-white flex-none overflow-hidden"
                     style={{
                       WebkitMask: 'radial-gradient(50% 50%, #000 99.99%, #0000 100%)',
                       mask: 'radial-gradient(50% 50%, #000 99.99%, #0000 100%)'
                     }}></div>
              </div>
              
              {/* Tracking Line - Nhỏ gọn hơn */}
              <div className="absolute flex-none overflow-hidden w-[3px] left-1/2 -translate-x-1/2"
                   style={{
                     background: 'linear-gradient(180deg, #fff 0%, transparent 100%)',
                     top: '30px',
                     left: '29.75px',
                     height: 'calc(100% + 50px)'
                   }}>              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Quà tặng - Chiếm cột 3, 2 hàng đầu */}
        <motion.div 
          className="bento-card-2 border-2 border-primary bg-blue-prime will-change-transform z-10 rounded-xl flex flex-row justify-start items-start gap-2.5 w-full h-full p-5 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgba(255, 215, 0, 0.8)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          {/* Heading & Supporting Text - Luôn ở góc trái trên cùng */}
          <div className="z-10 flex flex-col justify-start items-start gap-[5px] w-[300px] h-min p-0 absolute top-[8px] left-[10px] overflow-visible
                          sm:w-[550px] sm:top-[10px] sm:left-[15px] sm:gap-[4.12px]
                          md:w-[500px] md:top-8 md:left-8 md:gap-[5px]
                          lg:w-[600px] lg:top-8 lg:left-8">
            <div className="outline-none flex flex-col justify-start flex-shrink-0 w-full">
              {/* Desktop/Tablet Title */}
              <div className="hidden lg:block">
                <h2 className="font-inter font-bold tracking-[-0.02em] leading-[1.1] text-left text-primary" style={{ fontSize: '36px' }}>Quà tặng</h2>
              </div>
              {/* Mobile Title */}
              <div className="block lg:hidden">
                <h2 className="font-inter font-bold tracking-[-0.02em] leading-[1.1] text-left text-primary
                               text-[28px] sm:text-[32px]">
                  Quà tặng
                </h2>
              </div>
            </div>
            {/* Description - Responsive width */}
            <div className="outline-none flex flex-col justify-start flex-shrink-0 w-[260px] sm:w-[280px] md:w-full">
              {/* Desktop/Tablet Description */}
              <div className="hidden lg:block">
                <p className="text-[14px] font-normal leading-[18px] text-left text-white-framer opacity-80">Tặng kèm bộ EBook 4 Cẩm nang Toán – Tiếng Việt – Tiếng Anh – Tư duy Khoa học và EBook Thực Chiến Đề Thi kèm lời giải chi tiết</p>
              </div>
              {/* Mobile Description */}
              <div className="block lg:hidden">
                <p className="text-[13px] sm:text-[15px] font-normal leading-[1.3] text-left text-white-framer opacity-80">Tặng kèm bộ EBook 4 Cẩm nang Toán – Tiếng Việt – Tiếng Anh – Tư duy Khoa học và EBook Thực Chiến Đề Thi kèm lời giải chi tiết</p>
              </div>
            </div>
          </div>
          {/* Bentocard2 Images - Framer Style (Swapped) */}
          <div className="absolute overflow-visible z-10 flex-none"
               style={{
                 aspectRatio: '1',
                 width: '139px',
                 height: '145px',
                 bottom: '-55px',
                 right: '-42px',
                 transform: 'rotate(5deg)'
               }}>
            <div className="absolute inset-0 rounded-inherit">
              <motion.img 
                src="/bentocard2-png1.png" 
                alt="Bento card 1"
                className="block w-full h-full rounded-inherit object-cover object-center"
                loading="lazy"
                initial={{ opacity: 0, scale: 1.1, rotate: 0 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 5 } : { opacity: 0, scale: 1.1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, rotate: 8 }}
              />
            </div>
          </div>
          
          <div className="hidden lg:block absolute overflow-visible z-20 flex-none"
               style={{
                 aspectRatio: '0.818947',
                 height: '165px',
                 width: '135px',
                 bottom: '-68px',
                 left: '46%',
                 transform: 'translateX(-50%) rotate(-15deg)'
               }}>
            <div className="absolute inset-0 rounded-inherit">
              <motion.img 
                src="/bentocard2-png2.png" 
                alt="Bento card 2"
                className="block w-full h-full rounded-inherit object-cover object-center"
                loading="lazy"
                initial={{ opacity: 0, scale: 1.1, rotate: 0 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: -15 } : { opacity: 0, scale: 1.1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ scale: 1.05, rotate: -18 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Card 3: Học phí - Chiếm ô cuối cùng (cột 3, hàng 3) */}
        <motion.div 
          className="bento-card-3 border-2 border-primary bg-blue-prime will-change-transform z-10 rounded-xl flex flex-col justify-center items-center gap-2.5 w-full h-full p-5 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgba(255, 215, 0, 0.8)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          {/* Heading & Supporting Text */}
          <div className="absolute top-[15px] left-[15px] right-[15px] flex flex-col justify-start items-start gap-[5px] w-auto h-min p-0 overflow-hidden
                          sm:z-10 sm:gap-[3.73px] sm:absolute sm:top-[17px] sm:left-[19px] sm:right-[19px]">
            <div className="outline-none flex flex-col justify-start flex-shrink-0 w-full">
              {/* Desktop/Tablet Title */}
              <div className="hidden lg:block">
                <h5 className="font-inter font-bold text-left text-primary" style={{ fontSize: '40px' }}>Học phí</h5>
              </div>
              {/* Mobile Title */}
              <div className="block lg:hidden">
                <h5 className="font-inter font-bold text-left text-primary" style={{ fontSize: '30px' }}>Học phí</h5>
              </div>
            </div>
            {/* Description */}
            <div className="outline-none flex flex-col justify-start flex-shrink-0 w-[220px] sm:w-full">
              {/* Desktop/Tablet Description */}
              <div className="hidden sm:block">
                <p className="text-[16px] font-normal leading-[1.3] text-left text-white-framer opacity-80">Học phí ưu đãi chỉ từ 2.690.000 VNĐ cho trọn khóa học đến khi thi Đợt 2</p>
              </div>
              {/* Mobile Description */}
              <div className="block sm:hidden">
                <p className="text-[13px] font-normal leading-[1.2] text-left text-white-framer opacity-80">Học phí ưu đãi chỉ từ 2.690.000 VNĐ cho trọn khóa học đến khi thi Đợt 2</p>
              </div>
            </div>
          </div>
          {/* Visual */}
          <div className="bento-card-3-image absolute -translate-x-1/2 -translate-y-1/2 overflow-visible">
            <div className="aspect-[0.639024] h-[235px] flex-none w-[150px] relative overflow-visible rotate-[10deg]
                            md:h-auto md:w-[150px]
                            sm:h-auto sm:w-[150px]">
              <motion.img 
                src="/bentocard3-png.png" 
                alt="Học phí card visual"
                className="w-full h-full rounded-lg"
                loading="lazy"
                initial={{ opacity: 0, scale: 1.1, rotate: 0 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 10 } : { opacity: 0, scale: 1.1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ scale: 1.05, rotate: 15 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Card 4: Mục tiêu - Chiếm 2 cột cuối (hàng 3) */}
        <motion.div 
          className="bento-card-4 border-2 border-primary bg-blue-prime will-change-transform z-10 rounded-xl flex flex-row justify-start items-start gap-0 w-full h-full p-5 pl-[142px] relative overflow-hidden
                          md:pl-5 sm:pl-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgba(255, 215, 0, 0.8)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          {/* Heading & Supporting Text */}
          <div className="flex flex-col justify-start items-start gap-[5px] w-[380px] h-min p-0 relative overflow-visible z-30
                          sm:z-30 sm:gap-[3.73px] sm:w-[280px] sm:absolute sm:top-[11px] sm:left-[19px]">
            <div className="outline-none flex flex-col justify-start flex-shrink-0 w-[200px]">
              {/* Desktop/Tablet Title */}
              <div className="hidden lg:block">
                <h5 className="font-inter font-bold text-left text-primary" style={{ fontSize: '40px' }}>Mục tiêu</h5>
              </div>
              {/* Mobile Title */}
              <div className="block lg:hidden">
                <h5 className="font-inter font-bold text-left text-primary" style={{ fontSize: '30px' }}>Mục tiêu</h5>
              </div>
            </div>
            {/* Description */}
            <div className="outline-none flex flex-col justify-start flex-shrink-0 w-[350px]">
              <p className="text-[16px] font-normal leading-[1.3] text-left text-white-framer opacity-80 whitespace-normal">Giúp học viên xây nền vững – ôn cấp tốc – luyện đề thực chiến – tối ưu điểm số cả 2 đợt thi</p>
            </div>
          </div>
          {/* Lightning 1 - Ở góc dưới phải cardbento với glow effect */}
          <div className="absolute z-20 w-[800px] h-[600px] bottom-[-220px] right-[-140px] overflow-visible
                          md:w-[550px] md:h-[415px] md:bottom-[-160px] md:right-[-100px]
                          sm:w-[430px] sm:h-[320px] sm:bottom-[-125px] sm:right-[-75px]">
            {/* Glow effect background cho lightning 1 */}
            <div className="absolute inset-0 w-full h-full opacity-20"
                 style={{
                   background: 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.25) 0%, rgba(255, 215, 0, 0.12) 40%, rgba(255, 215, 0, 0.06) 70%, transparent 90%)',
                   filter: 'blur(20px)',
                   transform: 'scale(1.2)'
                 }}></div>
            <motion.img 
              src="/lighting1.svg" 
              alt="Lightning effect 1"
              className="relative z-10 w-full h-full object-contain opacity-90"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3)) drop-shadow(0 0 40px rgba(255, 215, 0, 0.18)) drop-shadow(0 0 60px rgba(255, 215, 0, 0.12))'
              }}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={isInView ? { opacity: 0.9, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 50 }}
              transition={{ duration: 1.0, delay: 1.1 }}
              whileHover={{ scale: 1.05, opacity: 1 }}
            />
          </div>
          
          {/* Lightning 2 - Chồng gần lightning 1 ở góc dưới phải với glow effect */}
          <div className="absolute z-19 w-[800px] h-[600px] bottom-[-250px] right-[-160px] overflow-visible
                          md:w-[550px] md:h-[415px] md:bottom-[-185px] md:right-[-115px]
                          sm:w-[430px] sm:h-[320px] sm:bottom-[-145px] sm:right-[-90px]">
            {/* Glow effect background cho lightning 2 */}
            <div className="absolute inset-0 w-full h-full opacity-15"
                 style={{
                   background: 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.1) 40%, rgba(255, 215, 0, 0.05) 70%, transparent 90%)',
                   filter: 'blur(18px)',
                   transform: 'scale(1.1)'
                 }}></div>
            <motion.img 
              src="/lighting2.svg" 
              alt="Lightning effect 2"
              className="relative z-10 w-full h-full object-contain opacity-80"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.25)) drop-shadow(0 0 30px rgba(255, 215, 0, 0.15)) drop-shadow(0 0 45px rgba(255, 215, 0, 0.1))'
              }}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.8, x: 30 }}
              animate={isInView ? { opacity: 0.8, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 30 }}
              transition={{ duration: 1.0, delay: 1.2 }}
              whileHover={{ scale: 1.05, opacity: 0.9 }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Assets - Positioned relative to section */}
      
      {/* Top Right Corner - bentocard-float2 */}
      <motion.div
        className="aspect-square h-[115px] z-5 flex-none w-[115px] absolute top-[-10px] right-[-40px] overflow-visible rotate-[55deg]
                        sm:h-[200px] sm:w-[200px] sm:top-[-80px] sm:right-[-100px] sm:rotate-[50deg]
                        md:h-[300px] md:w-[300px] md:top-[-45px] md:right-[-95px] md:rotate-[45deg]"
        initial={{ opacity: 0, x: 100, rotate: 0 }}
        animate={isInView ? { opacity: 0.9, x: 0, rotate: 45 } : { opacity: 0, x: 100, rotate: 0 }}
        transition={{ duration: 1.2, delay: 1.3, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1, rotate: 50 }}
      >
        <motion.img
          src="/bentocard-float2.png"
          alt="Floating decoration 2"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </motion.div>

      {/* Top Left Corner - bentocard-float3 */}
      <motion.div
        className="aspect-square h-[80px] z-5 flex-none w-[80px] absolute top-[20px] left-[-30px] overflow-visible -rotate-[45deg]
                        sm:h-[130px] sm:w-[130px] sm:top-[0px] sm:left-[-55px] sm:-rotate-[45deg]
                        md:h-[200px] md:w-[200px] md:top-[-10px] md:left-[-70px] md:-rotate-[45deg]"
        initial={{ opacity: 0, x: -100, rotate: 0 }}
        animate={isInView ? { opacity: 1, x: 0, rotate: -45 } : { opacity: 0, x: -100, rotate: 0 }}
        transition={{ duration: 1.2, delay: 1.4, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1, rotate: -50 }}
      >
        <motion.img
          src="/bentocard-float3.png"
          alt="Floating decoration 3"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </motion.div>

      {/* Bottom Left Corner - bentocard-float3 */}
      <motion.div
        className="aspect-[1.14841] h-0 z-5 flex-none gap-2.5 w-0 absolute bottom-0 left-0 overflow-visible
                        sm:h-[140px] sm:w-[161px] sm:bottom-[-55px] sm:left-[-50px] sm:rotate-[145deg]
                        md:h-[220px] md:w-[253px] md:bottom-[-90px] md:left-[-80px] md:rotate-[140deg]"
        initial={{ opacity: 0, y: 100, rotate: 100 }}
        animate={isInView ? { opacity: 0.85, y: 0, rotate: 140 } : { opacity: 0, y: 100, rotate: 100 }}
        transition={{ duration: 1.2, delay: 1.5, type: "spring", stiffness: 90 }}
        whileHover={{ scale: 1.1, rotate: 145 }}
      >
        <motion.img
          src="/bentocard-float3.png"
          alt="Floating decoration 3"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </motion.div>

      {/* Bottom Right Corner - bentocard-float1 */}
      <motion.div
        className="aspect-square h-[70px] z-5 flex-none w-[70px] absolute bottom-[-20px] right-[-25px] overflow-visible rotate-[20deg]
                        sm:h-[110px] sm:w-[110px] sm:bottom-[-30px] sm:right-[-35px]
                        md:h-[160px] md:w-[160px] md:bottom-[-50px] md:right-[-60px]"
        initial={{ opacity: 0, x: 100, y: 100, rotate: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.95, x: 0, y: 0, rotate: 20, scale: 1 } : { opacity: 0, x: 100, y: 100, rotate: 0, scale: 0.5 }}
        transition={{ duration: 1.3, delay: 1.6, type: "spring", stiffness: 85 }}
        whileHover={{ scale: 1.15, rotate: 25 }}
      >
        <motion.img
          src="/bentocard-float1.png"
          alt="Floating decoration bottom"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </motion.div>
    </motion.section>
  );
};

export default BentoSection;

