'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowBackToTop(scrolled > 50); // Chỉ cần scroll 50px là xuất hiện
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    // Create style element for keyframes
    const styleId = 'footer-animations';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes footer-icon-kf991a {
          from { 
            transform: translateX(0px);
            opacity: 0;
          }
          to { 
            transform: translateX(-35.0392px);
            opacity: 1;
          }
        }
        
        @keyframes footer-icon-1avnz9h {
          from { 
            transform: translateX(0px) translateY(0px);
            opacity: 0;
          }
          to { 
            transform: translateX(-46.6831px) translateY(-15px);
            opacity: 1;
          }
        }
        
        @keyframes footer-icon-k7prl1 {
          from { 
            transform: translateX(0px);
            opacity: 0;
          }
          to { 
            transform: translateX(-19.989px);
            opacity: 1;
          }
        }
        
        .animate-in {
          opacity: 1 !important;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px 0 rgba(40, 100, 209, 0.2);
        }
        
        .glass-effect-dark {
          background: linear-gradient(135deg, 
                      rgba(40, 100, 209, 0.9) 0%,
                      rgba(30, 75, 168, 0.85) 100%);
          backdrop-filter: blur(10px) saturate(150%);
          -webkit-backdrop-filter: blur(10px) saturate(150%);
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 40px rgba(40, 100, 209, 0.3),
                      0 4px 12px rgba(0, 0, 0, 0.15),
                      inset 0 1px 2px rgba(255, 255, 255, 0.2);
        }
        
        .glass-effect-purple {
          background: linear-gradient(135deg, 
                      rgba(147, 51, 234, 0.95) 0%,
                      rgba(109, 40, 217, 0.9) 100%);
          backdrop-filter: blur(10px) saturate(150%);
          -webkit-backdrop-filter: blur(10px) saturate(150%);
          border: 2px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 10px 40px rgba(147, 51, 234, 0.4),
                      0 4px 12px rgba(0, 0, 0, 0.2),
                      inset 0 1px 2px rgba(255, 255, 255, 0.3);
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .tooltip {
          position: absolute;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          white-space: nowrap;
          pointer-events: none;
          z-index: 50;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }
        
        .tooltip.show {
          opacity: 1;
          transform: translateY(-30px);
        }
        
        .tooltip::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid #764ba2;
        }
        
      `;
      document.head.appendChild(style);
    }

    // Set up intersection observer for one-time animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const animationType = element.dataset.animateFooterIcon;
          
          if (animationType && !animatedElements.has(animationType)) {
            // Add animation class
            element.classList.add('animate-in');
            
            // Apply specific animation based on type
            switch (animationType) {
              case 'kf991a':
                element.style.animation = 'footer-icon-kf991a 1s ease-out forwards';
                break;
              case '1avnz9h':
                element.style.animation = 'footer-icon-1avnz9h 1s ease-out forwards';
                break;
              case 'k7prl1':
                element.style.animation = 'footer-icon-k7prl1 1s ease-out forwards';
                break;
            }
            
            // Mark as animated
            setAnimatedElements(prev => new Set(prev).add(animationType));
            
            // Unobserve after animation
            observer.unobserve(element);
          }
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    const elementsToAnimate = footer.querySelectorAll('[data-animate-footer-icon]');
    elementsToAnimate.forEach((element) => {
      // Set initial state
      const el = element as HTMLElement;
      el.style.opacity = '0';
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach((element) => {
        observer.unobserve(element);
      });
      // Clean up style element when component unmounts
      const style = document.getElementById(styleId);
      if (style) {
        style.remove();
      }
    };
  }, [animatedElements]);

  return (
    <>

      <motion.footer
        ref={footerRef}
        className="min-h-[400px] overflow-hidden w-full relative z-20"
        style={{
          background: 'linear-gradient(180deg, gold 0%, #FFD700 10%, #FFED4B 50%, #FFF8DC 100%)'
        }}
        id="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        {/* Smooth transition from gold background */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[gold] to-transparent pointer-events-none"></div>
        
        {/* Footer Main Content Container */}
        <div className="w-full px-5 pb-16 pt-8 md:px-10 lg:px-20 relative">
          
          {/* Logo and Tagline Section - Centered */}
          <motion.div 
            className="flex flex-col items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <Image
                src="/bailearn-logo2.png"
                alt="BaiLearn Logo"
                width={150}
                height={114}
                className="object-contain"
              />
            </div>
            <div className="text-center max-w-2xl">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2864d1] to-[#1e4ba8] bg-clip-text text-transparent mb-2">
                Học để hiểu, hiểu để chinh phục
              </p>
              <p className="text-lg md:text-xl text-[#2864d1]/80">
                BaiLearn cùng bạn đạt được mục tiêu mơ ước!
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="relative mb-12">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"></div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16 lg:gap-24 max-w-4xl mx-auto">

            {/* Top row on mobile: Social Media and Info side by side */}
            <div className="flex flex-row gap-6 justify-center md:gap-16 lg:gap-24 w-full md:w-auto">
              {/* Social Media Links with Icons */}
              <motion.div 
                className="flex flex-col gap-4 flex-1 md:flex-none items-center md:items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-lg text-[#2864d1] mb-2 text-center md:text-left">
                  Mạng xã hội
                </h3>
              <div className="flex flex-col gap-3">
                <motion.a
                  href="https://www.facebook.com/bailearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-3 text-[#4A80E8] hover:text-[#2864d1] transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <Image 
                    src="/facebook.svg" 
                    alt="Facebook" 
                    width={20} 
                    height={20} 
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Facebook</span>
                </motion.a>
                <motion.a
                  href="https://www.tiktok.com/@bailearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-3 text-[#4A80E8] hover:text-[#2864d1] transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <Image 
                    src="/tiktok-icon-white-1-1.svg" 
                    alt="TikTok" 
                    width={20} 
                    height={20} 
                    className="w-5 h-5"
                  />
                  <span className="font-medium">TikTok</span>
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@BaiLearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-3 text-[#4A80E8] hover:text-[#2864d1] transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <Image 
                    src="/youtube-icon-5.svg" 
                    alt="YouTube" 
                    width={20} 
                    height={20} 
                    className="w-5 h-5"
                  />
                  <span className="font-medium">YouTube</span>
                </motion.a>
                <motion.a
                  href="https://www.threads.com/@bailearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-3 text-[#4A80E8] hover:text-[#2864d1] transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <Image 
                    src="/threads-1.svg" 
                    alt="Threads" 
                    width={20} 
                    height={20} 
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Threads</span>
                </motion.a>
              </div>
            </motion.div>

              {/* Info Links with hover effects */}
              <motion.div 
                className="flex flex-col gap-4 flex-1 md:flex-none items-center md:items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-lg text-[#2864d1] mb-2 text-center md:text-left">
                  Thông tin
                </h3>
              <div className="flex flex-col gap-3">
                <motion.a
                  href="#"
                  className="text-gray-600 hover:text-[#2864d1] transition-all relative group font-medium"
                  whileHover={{ x: 5 }}
                >
                  <span className="relative">
                    Giới thiệu
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2864d1] group-hover:w-full transition-all"></span>
                  </span>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-600 hover:text-[#2864d1] transition-all relative group font-medium"
                  whileHover={{ x: 5 }}
                >
                  <span className="relative">
                    Về chúng tôi
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2864d1] group-hover:w-full transition-all"></span>
                  </span>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-600 hover:text-[#2864d1] transition-all relative group font-medium"
                  whileHover={{ x: 5 }}
                >
                  <span className="relative">
                    Thành tích
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2864d1] group-hover:w-full transition-all"></span>
                  </span>
                </motion.a>
              </div>
              </motion.div>
            </div>

            {/* Contact Info with icons - Separate row, centered on mobile */}
            <motion.div 
              className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start mt-4 md:mt-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg text-[#2864d1] mb-2 text-center md:text-left">
                Liên hệ
              </h3>
              <div className="flex flex-col gap-3">
                <motion.div 
                  className="flex items-center gap-3 text-gray-600 group"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">📞</span>
                  <span className="font-medium group-hover:text-[#2864d1] transition-colors">
                    0932 755 465
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-gray-600 group"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">✉️</span>
                  <span className="font-medium group-hover:text-[#2864d1] transition-colors">
                    bailearn.edu@gmail.com
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright Section */}
      </motion.footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Stacked images for icon effect */}
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              {/* Bottom layer - shifted down */}
              <Image
                src="/bentocard-float1.png"
                alt=""
                width={64}
                height={64}
                className="absolute top-6 left-0 w-full h-full object-contain"
              />
              {/* Top layer */}
              <Image
                src="/bentocard-float1.png"
                alt=""
                width={64}
                height={64}
                className="relative w-full h-full object-contain"
              />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

    </>
  );
};

export default Footer;
