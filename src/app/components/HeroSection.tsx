'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.3,
    margin: "-100px 0px" 
  });

  return (
    <>
    <section
      ref={sectionRef}
      id="khoa-free"
      className="bg-blue-prime flex flex-col gap-12 w-full h-[550px] md:h-[650px] lg:h-[720px] relative overflow-hidden"
      data-framer-name="Hero Section">
      <header className="flex flex-col justify-center items-center gap-5 w-full h-min p-4 md:p-6 lg:p-10 absolute top-[-35px] left-0 overflow-hidden" 
              id="home" 
              data-framer-name="Header"></header>
      
      {/* Images - Student Photos */}
      <motion.div 
        className="will-change-transform flex-none w-[170px] md:w-[200px] lg:w-[330px] h-[320px] md:h-[378px] lg:h-[620px] absolute bottom-[-50px] md:bottom-0 left-[-5px] md:left-[-5px] lg:left-[-5px] overflow-hidden"
        data-framer-name="Bảo"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover="hover"
      >
        <motion.div 
          className="aspect-[0.707847] h-[215px] md:h-[254px] lg:h-[419px] flex-none w-[155px] md:w-[185px] lg:w-[305px] absolute top-2 md:top-3 lg:top-5 right-[-7px] md:right-[-10px] lg:right-[-14px] overflow-visible"
          data-framer-name="Ảnh 3 (1) 1"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 9 } : { opacity: 0, scale: 0.8, rotate: 0 }}
          variants={{
            hover: {
              rotate: 15,
              scale: 1.05
            }
          }}
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.5
          }}
        >
          <Image
            src="/bao.png"
            alt="Student photo"
            width={2670}
            height={3772}
            className="block w-full h-full object-cover object-center rounded-inherit"
            priority
          />
        </motion.div>
        <motion.div 
          className="aspect-square h-[201px] md:h-[241px] lg:h-[402px] flex-none absolute bottom-[-71px] md:bottom-[-86px] lg:bottom-[-143px] left-[-49px] md:left-[-59px] lg:left-[-99px] right-[-1px] md:right-[-2px] lg:right-[-3px] overflow-visible" 
          data-framer-name="Frame 339"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: -25 } : { opacity: 0, scale: 0.8, rotate: 0 }}
          variants={{
            hover: {
              rotate: -35,
              scale: 1.1
            }
          }}
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.5
          }}
        >
          <Image
            src="/bentocard-float2.png"
            alt="Student photo"
            width={1142}
            height={1142}
            className="block w-full h-full object-cover object-center rounded-inherit"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="will-change-transform flex-none w-[175px] md:w-[206px] lg:w-[341px] h-[319px] md:h-[376px] lg:h-[618px] absolute bottom-[-66px] md:bottom-[-24px] lg:bottom-[-33px] right-[-9px] md:right-[-14px] lg:right-[-19px] overflow-hidden"
        data-framer-name="Hải"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover="hover"
      >
        <motion.div 
          className="flex-none w-[161px] md:w-[190px] lg:w-[313px] h-[220px] md:h-[260px] lg:h-[430px] absolute top-1 md:top-1 lg:top-2 left-[calc(50.8039%_-_80.5px)] md:left-[calc(50.8039%_-_95px)] lg:left-[calc(50.8039%_-_156.5px)] overflow-visible"
          data-framer-name="Hưng 1"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={isInView ? { 
            opacity: 1, 
            scale: 1, 
            rotate: -3
          } : { 
            opacity: 0, 
            scale: 0.8, 
            rotate: 0 
          }}
          variants={{
            hover: {
              rotate: 5,
              scale: 1.05
            }
          }}
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.5
          }}
        >
          <Image
            src="/hai.png"
            alt="Student photo"
            width={2542}
            height={3590}
            className="block w-full h-full object-cover object-center rounded-inherit"
            priority
          />
        </motion.div>
        <motion.div 
          className="z-10 flex-none gap-2.5 w-[128px] md:w-[154px] lg:w-[256px] h-[111px] md:h-[134px] lg:h-[223px] absolute bottom-5 md:bottom-7 lg:bottom-10 left-[calc(45.3376%_-_64px)] md:left-[calc(45.3376%_-_77px)] lg:left-[calc(45.3376%_-_128px)] overflow-visible" 
          data-framer-name="Frame 341"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={isInView ? { 
            opacity: 1, 
            scale: 1, 
            rotate: -75
          } : { 
            opacity: 0, 
            scale: 0.8, 
            rotate: 0 
          }}
          variants={{
            hover: {
              rotate: -85,
              scale: 1.1
            }
          }}
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.5
          }}
        >
          <Image
            src="/bentocard-float1.png"
            alt="Student photo"
            width={1122}
            height={977}
            className="block w-full h-full object-cover object-center rounded-inherit"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="hidden md:block aspect-square h-[57px] md:h-[86px] lg:h-[115px] flex-none w-[57px] md:w-[86px] lg:w-[115px] absolute top-[-1px] md:top-[-2px] lg:top-[-3px] left-[6px] md:left-[9px] lg:left-[13px] overflow-visible rotate-[15deg]" 
        data-framer-name="Frame 340"
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: 15 } : { opacity: 0, scale: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 20 }}
      >
        <Image
          src="/bentocard-float4.png"
          alt="Student photo"
          width={1227}
          height={1227}
          className="block w-full h-full object-cover object-center rounded-inherit"
          priority
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="flex-none w-full max-w-[1152px] h-auto md:h-[524px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 md:px-6 lg:px-0">
        
        {/* Header Content */}
        <div className="will-change-transform z-20 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-12 h-min px-0 py-4 md:py-8 lg:py-[57px] absolute top-1/2 -mt-20 md:mt-0 left-0 right-0 overflow-visible -translate-y-1/2" 
             data-framer-name="Header Content">
          <header className="flex flex-col justify-center items-center gap-3 md:gap-4 lg:gap-6 w-full h-min p-0 relative overflow-visible" 
                  data-framer-name="Header">
            <div className="flex flex-col justify-start flex-shrink-0 gap-2 md:gap-0" 
                 data-framer-component-type="RichTextContainer">
              <motion.div 
                className="inline-block bg-primary px-3 py-1 md:px-6 md:py-3 lg:px-8 lg:py-4 mb-1 md:mb-3 lg:mb-4 rounded-full"
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 50 }}
                transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 200 }}
              >
                <motion.p
                  className="font-roboto-flex-custom text-hero leading-[1.1em] text-center text-blue-prime"
                  style={{letterSpacing: '0.05em'}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >BAILEARN</motion.p>
              </motion.div>
              <motion.p 
                className="font-roboto-flex-custom text-hero leading-[0.95em] text-center text-white-framer -mt-2 md:-mt-2.5 lg:-mt-3"
                style={{letterSpacing: '0.05em'}}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >LUYỆN THI</motion.p>
              <motion.p 
                className="font-roboto-flex-custom text-hero leading-[0.95em] text-center text-white-framer mt-0.5 md:mt-1.5 lg:mt-1"
                style={{letterSpacing: '0.05em'}}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >ĐGNL HCM</motion.p>
            </div>
            <motion.div 
              className="flex flex-col justify-start flex-shrink-0 px-4 md:px-0" 
              data-framer-component-type="RichTextContainer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl tracking-[-0.04em] leading-[1.4em] text-center text-white-framer"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 2.0 }}
              >Học để hiểu, hiểu để chinh phục.</motion.p>
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl tracking-[-0.04em] leading-[1.4em] text-center text-white-framer"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >BaiLearn cùng bạn đạt được mục tiêu mơ ước!</motion.p>
            </motion.div>
          </header>

          {/* CTA Button with Enhanced Animations */}
          <motion.div
            className="z-10 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 40 }}
            transition={{ 
              duration: 0.4, 
              delay: 2.4, 
              type: "spring", 
              stiffness: 400,
              damping: 25
            }}
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
                                h-[36px] sm:h-[40px] md:h-[42px] lg:h-[45px] py-0 px-4 sm:px-6 md:px-7 lg:px-8
                                rounded-[45.47px] shadow-none overflow-visible
                                hover:shadow-[0_10px_30px_rgba(255,215,0,0.4)] transition-shadow duration-300">
                  
                  {/* Button Text */}
                  <div className="outline-none flex flex-col justify-center flex-shrink-0
                                 text-blue-prime font-inter font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.4em] z-20">
                    Liên hệ ngay
                  </div>
                  
                  {/* Decorative Image 1 - Top Right - Flies out on hover */}
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
                  
                  {/* Decorative Image 2 - Top Left - Flies out on hover */}
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
                  
                  {/* Decorative Image 3 - Bottom Right - Flies out on hover */}
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
        </div>
      </div>
    </section>

    {/* Logo Ticker Section */}
    <section className="bg-blue-prime py-6 overflow-hidden">
      <div className="flex items-center">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex items-center space-x-8 md:space-x-12 lg:space-x-16 flex-shrink-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <Image
                key={`set1-${i}`}
                src="/company-logo.png"
                alt="Company Logo"
                width={120}
                height={48}
                className="h-8 md:h-10 lg:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-8 md:space-x-12 lg:space-x-16 flex-shrink-0 ml-8 md:ml-12 lg:ml-16">
            {Array.from({ length: 8 }).map((_, i) => (
              <Image
                key={`set2-${i}`}
                src="/company-logo.png"
                alt="Company Logo"
                width={120}
                height={48}
                className="h-8 md:h-10 lg:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
