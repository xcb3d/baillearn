'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';

// Enhanced smooth scroll to section function with premium animations
const scrollToSection = (targetId: string) => {
  const target = document.getElementById(targetId);
  const lenis = (window as unknown as { lenis?: { scrollTo: (target: Element, options: { duration?: number; easing?: (t: number) => number; offset?: number; onComplete?: () => void }) => void } }).lenis;
  if (target && lenis) {
    // Add scroll progress indicator
    document.body.classList.add('scrolling');
    
    lenis.scrollTo(target, {
      duration: 2.2, // Longer duration for luxury feel
      easing: (t: number) => {
        // Premium cubic bezier with spring damping
        return 1 - Math.pow(1 - t, 4) * (1 + Math.sin(t * Math.PI * 2) * 0.08 * Math.pow(1 - t, 2));
      },
      offset: -80, // Account for header height
      onComplete: () => {
        document.body.classList.remove('scrolling');
        // Add gentle bounce effect on arrival
        target.style.transform = 'scale(1.01)';
        setTimeout(() => {
          target.style.transform = '';
        }, 200);
      }
    });
  } else if (target) {
    // Fallback with offset for header
    const targetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });
  }
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -80% 0px" // Trigger immediately when header enters viewport
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      ref={headerRef}
      className="bg-primary z-10 flex flex-row flex-none justify-center items-center gap-12 w-full h-20 px-4 sm:px-6 relative overflow-visible" 
      data-framer-name="Desktop bar">
      <div className="flex flex-row flex-1 justify-between items-center w-min lg:max-w-[1200px] h-min p-0 relative overflow-visible" 
           data-framer-name="Content">
        {/* Logo Stack */}
        <motion.div 
          className="flex flex-row flex-none justify-between items-center w-[120px] sm:w-[163px] h-min p-0 relative overflow-visible" 
          data-framer-name="Logo Stack"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a 
            className="flex flex-row justify-start items-start gap-12 w-min h-[40px] sm:h-[54px] p-0 relative overflow-visible" 
            href="./"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="aspect-[1.31673] h-[40px] sm:h-[54px] flex-none w-[53px] sm:w-[71px] relative"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/bailearn-logo2.png"
                alt="BaiLearn Logo"
                width={1322}
                height={1004}
                sizes="(min-width: 1200px) 71px, (min-width: 810px) and (max-width: 1199.98px) 71px, (max-width: 809.98px) 71px"
                className="block w-full h-full object-cover object-center rounded-inherit"
                priority
              />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Desktop Navigation - Hidden on mobile */}
        <motion.div 
          className="hidden min-[1024px]:flex flex-row flex-none justify-center items-center gap-2 xl:gap-4 w-min h-min p-0 relative overflow-visible"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Khóa học FREE */}
          <motion.button
            className="flex flex-row flex-none justify-center items-center gap-12 w-[180px] xl:w-[222px] h-[40px] xl:h-[48px] p-0 rounded-3xl relative overflow-visible shadow-none hover:shadow-none"
            onClick={() => scrollToSection('khoa-free')}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="bg-blue-prime z-10 flex flex-row flex-1 justify-center items-center gap-12 w-min h-full px-4 xl:px-6 rounded-full relative overflow-visible"
              whileHover={{ 
                backgroundColor: "#1e40af",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: { duration: 0.2 }
              }}
            >
              <p className="font-inter font-medium text-white-framer leading-tight text-sm xl:text-base">Khóa học FREE</p>
            </motion.div>
          </motion.button>

          {/* Thành tựu BAILEARN */}
          <motion.button
            className="flex flex-row flex-none justify-center items-center gap-12 w-[180px] xl:w-[222px] h-[40px] xl:h-[48px] p-0 rounded-3xl relative overflow-visible shadow-none hover:shadow-none"
            onClick={() => scrollToSection('stats-upd')}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="bg-blue-prime z-10 flex flex-row flex-1 justify-center items-center gap-12 w-min h-full px-4 xl:px-6 rounded-full relative overflow-visible"
              whileHover={{ 
                backgroundColor: "#1e40af",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: { duration: 0.2 }
              }}
            >
              <p className="font-inter font-medium text-white-framer leading-tight text-sm xl:text-base">Thành tựu BAILEARN</p>
            </motion.div>
          </motion.button>

          {/* Khóa học XPS */}
          <motion.button
            className="flex flex-row flex-none justify-center items-center gap-12 w-[180px] xl:w-[222px] h-[40px] xl:h-[48px] p-0 rounded-3xl relative overflow-visible shadow-none hover:shadow-none"
            onClick={() => scrollToSection('xps')}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="bg-blue-prime z-10 flex flex-row flex-1 justify-center items-center gap-12 w-min h-full px-4 xl:px-6 rounded-full relative overflow-visible"
              whileHover={{ 
                backgroundColor: "#1e40af",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: { duration: 0.2 }
              }}
            >
              <p className="font-inter font-medium text-white-framer leading-tight text-sm xl:text-base">Khóa học XPS</p>
            </motion.div>
          </motion.button>

          {/* Đội ngũ giảng viên */}
          <motion.button
            className="flex flex-row flex-none justify-center items-center gap-12 w-[180px] xl:w-[222px] h-[40px] xl:h-[48px] p-0 rounded-3xl relative overflow-visible shadow-none hover:shadow-none"
            onClick={() => scrollToSection('doi-ngu-upd')}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="bg-blue-prime z-10 flex flex-row flex-1 justify-center items-center gap-12 w-min h-full px-4 xl:px-6 rounded-full relative overflow-visible"
              whileHover={{ 
                backgroundColor: "#1e40af",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: { duration: 0.2 }
              }}
            >
              <p className="font-inter font-medium text-white-framer leading-tight text-sm xl:text-base">Đội ngũ giảng viên</p>
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="max-[1023px]:flex hidden flex-col justify-center items-center w-8 h-8 p-0 relative overflow-visible"
          onClick={toggleMobileMenu}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="w-6 h-0.5 bg-white-framer rounded-full"
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white-framer rounded-full mt-1"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white-framer rounded-full mt-1"
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="max-[1023px]:block hidden absolute top-full left-0 right-0 bg-primary border-t border-gray-200 shadow-lg z-20"
        initial={{ opacity: 0, height: 0 }}
        animate={isMobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="flex flex-col py-4 px-4 space-y-2">
          <motion.button
            className="flex items-center justify-center w-full h-12 bg-blue-prime rounded-lg text-white-framer font-inter font-medium text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              scrollToSection('khoa-free');
              setIsMobileMenuOpen(false);
            }}
          >
            Khóa học FREE
          </motion.button>
          <motion.button
            className="flex items-center justify-center w-full h-12 bg-blue-prime rounded-lg text-white-framer font-inter font-medium text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              scrollToSection('stats-upd');
              setIsMobileMenuOpen(false);
            }}
          >
            Thành tựu BAILEARN
          </motion.button>
          <motion.button
            className="flex items-center justify-center w-full h-12 bg-blue-prime rounded-lg text-white-framer font-inter font-medium text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              scrollToSection('xps');
              setIsMobileMenuOpen(false);
            }}
          >
            Khóa học XPS
          </motion.button>
          <motion.button
            className="flex items-center justify-center w-full h-12 bg-blue-prime rounded-lg text-white-framer font-inter font-medium text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              scrollToSection('doi-ngu-upd');
              setIsMobileMenuOpen(false);
            }}
          >
            Đội ngũ giảng viên
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
}
