'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

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
      {/* SVG Templates */}
      <svg className="absolute overflow-hidden bottom-0 left-0 w-0 h-0 z-0" aria-hidden="true">
        <defs>
          {/* Rounded Square */}
          <svg viewBox="0 0 104 105" id="svg-21295218_415">
            <path d="M 0 11 C 0 4.925 4.925 0 11 0 L 93 0 C 99.075 0 104 4.925 104 11 L 104 94 C 104 100.075 99.075 105 93 105 L 11 105 C 4.925 105 0 100.075 0 94 Z" fill="rgb(40, 100, 209)"/>
          </svg>
          {/* Triangle */}
          <svg viewBox="0 0 178 178" id="svg-63868773_455">
            <path d="M 84.67 29.75 C 86.594 26.417 91.406 26.417 93.33 29.75 L 161.746 148.25 C 163.671 151.583 161.265 155.75 157.416 155.75 L 20.584 155.75 C 16.735 155.75 14.329 151.583 16.254 148.25 Z" fill="rgb(40, 100, 209)"/>
          </svg>
          {/* Circle */}
          <svg viewBox="0 0 125 125" id="svg1932068932_402">
            <path d="M 62.5 0 C 97.018 0 125 27.982 125 62.5 C 125 97.018 97.018 125 62.5 125 C 27.982 125 0 97.018 0 62.5 C 0 27.982 27.982 0 62.5 0 Z" fill="rgb(40, 100, 209)"/>
          </svg>
        </defs>
      </svg>

      <footer
        ref={footerRef}
        className="bg-gradient-to-b from-[gold] via-[#ffeb3b] to-[#fff8dc] min-h-[400px] overflow-hidden
                   flex flex-row justify-start items-start gap-10 w-full px-5 py-20 relative z-20
                   md:px-10 md:py-20
                   max-sm:flex-col max-sm:justify-start max-sm:px-5 max-sm:py-[50px]"
        id="footer"
      >
        {/* Decorative SVG 1 - Rounded Square (kf991a) */}
        <div 
          className="absolute top-[78px] left-[323px] will-change-transform
                     select-none pointer-events-none
                     max-sm:top-[238px] max-sm:left-[161px]"
          data-animate-footer-icon="kf991a"
          style={{ transform: 'translateX(0px)' }}
        >
          <div className="w-[148px] h-[147px]">
            <div className="w-full h-full transform rotate-[37deg]">
              <svg preserveAspectRatio="none" width="100%" height="100%" className="opacity-20">
                <use href="#svg-21295218_415"></use>
              </svg>
            </div>
          </div>
        </div>

        {/* Decorative SVG 2 - Triangle (1avnz9h) */}
        <div 
          className="absolute bottom-[-15px] left-[422px] will-change-transform
                     select-none pointer-events-none
                     max-sm:bottom-[185px] max-sm:left-[146px]"
          data-animate-footer-icon="1avnz9h"
          style={{ transform: 'translateX(0px) translateY(0px)' }}
        >
          <div className="w-[178px] h-[178px]">
            <div className="w-full h-full">
              <svg preserveAspectRatio="none" width="100%" height="100%" className="opacity-20">
                <use href="#svg-63868773_455"></use>
              </svg>
            </div>
          </div>
        </div>

        {/* Decorative SVG 3 - Circle (k7prl1) */}
        <div 
          className="absolute top-[27px] left-[187px] will-change-transform
                     select-none pointer-events-none
                     max-sm:top-[27px] max-sm:left-[187px]"
          data-animate-footer-icon="k7prl1"
          style={{ transform: 'translateX(0px)' }}
        >
          <div className="w-[125px] h-[125px]">
            <div className="w-full h-full">
              <svg preserveAspectRatio="none" width="100%" height="100%" className="opacity-20">
                <use href="#svg1932068932_402"></use>
              </svg>
            </div>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="flex-1 flex flex-col justify-center items-center gap-2.5 w-full h-min p-0 relative overflow-hidden
                        max-sm:flex-none max-sm:w-full">
          <div className="flex flex-row justify-start items-start gap-10 w-full max-w-[1098px] h-min p-0 relative overflow-visible
                          max-sm:flex-col max-sm:order-0 max-sm:py-[73px]">
            
            {/* Logo and Tagline */}
            <div className="flex flex-col justify-start items-start gap-[33px] flex-1 w-full h-min p-0 relative overflow-visible
                            max-sm:flex-none max-sm:order-4 max-sm:w-full">
              <div className="aspect-[1.31673] h-[103px] flex-none w-[135px] relative
                              max-sm:h-[102px] max-sm:w-[135px]">
                <Image
                  src="/bailearn-logo2.png"
                  alt="BaiLearn Logo"
                  width={135}
                  height={103}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl leading-[1.1em] text-[#2864d1] whitespace-nowrap">
                  Học để hiểu, hiểu để chinh phục.
                </p>
                <p className="text-xl leading-[1.1em] text-[#2864d1] whitespace-nowrap">
                  BaiLearn cùng bạn đạt được mục tiêu mơ ước!
                </p>
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-1 w-full h-[188px] relative overflow-hidden max-sm:hidden"></div>

            {/* Social Media Links */}
            <div className="flex flex-col justify-start items-start gap-2.5 w-auto h-min p-0 relative overflow-visible
                            max-sm:order-0">
              <h3 className="font-inter font-bold text-[15px] tracking-[-0.01em] leading-[1em] text-[#2864d1] whitespace-nowrap">
                Mạng xã hội
              </h3>
              <div className="flex flex-col gap-2.5">
                <a
                  className="text-[15px] leading-[1em] hover:underline transition-colors"
                  href="https://www.facebook.com/bailearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0099ff',
                    fontWeight: 500,
                    fontVariationSettings: '"opsz" 24, "wght" 500',
                    fontFeatureSettings: '"cv01", "cv05", "cv09", "cv11"',
                    letterSpacing: '-0.15px'
                  }}
                >
                  Facebook
                </a>
                <a
                  className="text-[15px] leading-[1em] hover:underline transition-colors"
                  href="https://www.tiktok.com/@bailearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0099ff',
                    fontWeight: 500,
                    fontVariationSettings: '"opsz" 24, "wght" 500',
                    fontFeatureSettings: '"cv01", "cv05", "cv09", "cv11"',
                    letterSpacing: '-0.15px'
                  }}
                >
                  Tiktok
                </a>
                <a
                  className="text-[15px] leading-[1em] hover:underline transition-colors"
                  href="https://www.youtube.com/@BaiLearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0099ff',
                    fontWeight: 500,
                    fontVariationSettings: '"opsz" 24, "wght" 500',
                    fontFeatureSettings: '"cv01", "cv05", "cv09", "cv11"',
                    letterSpacing: '-0.15px'
                  }}
                >
                  Youtube
                </a>
                <a
                  className="text-[15px] leading-[1em] hover:underline transition-colors"
                  href="https://www.threads.com/@bailearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0099ff',
                    fontWeight: 500,
                    fontVariationSettings: '"opsz" 24, "wght" 500',
                    fontFeatureSettings: '"cv01", "cv05", "cv09", "cv11"',
                    letterSpacing: '-0.15px'
                  }}
                >
                  Threads
                </a>
              </div>
            </div>

            {/* Info Links */}
            <div className="flex flex-col justify-start items-start gap-2.5 w-auto h-min p-0 relative overflow-visible
                            max-sm:order-1">
              <h3 className="font-inter font-bold text-[15px] tracking-[-0.01em] leading-[1em] text-[#2864d1] whitespace-nowrap">
                Thông tin
              </h3>
              <div className="flex flex-col gap-2.5">
                <a
                  href="#"
                  className="text-[15px] leading-[1em] text-gray-600 hover:text-[#2864d1] hover:underline transition-colors"
                  style={{
                    fontWeight: 500,
                    fontVariationSettings: '"opsz" 24, "wght" 500',
                    fontFeatureSettings: '"cv01", "cv05", "cv09", "cv11"',
                    letterSpacing: '-0.15px'
                  }}
                >
                  Giới thiệu
                </a>
                <a
                  href="#"
                  className="text-[15px] leading-[1em] text-gray-600 hover:text-[#2864d1] hover:underline transition-colors"
                  style={{
                    fontWeight: 500,
                    fontVariationSettings: '"opsz" 24, "wght" 500',
                    fontFeatureSettings: '"cv01", "cv05", "cv09", "cv11"',
                    letterSpacing: '-0.15px'
                  }}
                >
                  Về chúng tôi
                </a>
                <a
                  href="#"
                  className="text-[15px] leading-[1em] text-gray-600 hover:text-[#2864d1] hover:underline transition-colors"
                  style={{
                    fontWeight: 500,
                    fontVariationSettings: '"opsz" 24, "wght" 500',
                    fontFeatureSettings: '"cv01", "cv05", "cv09", "cv11"',
                    letterSpacing: '-0.15px'
                  }}
                >
                  Thành tích
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-start items-start gap-2.5 w-auto h-min p-0 relative overflow-visible
                            max-sm:order-2">
              <h3 className="font-inter font-bold text-[15px] tracking-[-0.01em] leading-[1em] text-[#2864d1] whitespace-nowrap">
                Liên hệ
              </h3>
              <div className="flex flex-col gap-2.5">
                <p
                  className="text-[15px] leading-[1em] text-gray-600 whitespace-nowrap"
                  style={{
                    fontWeight: 500,
                    fontVariationSettings: '"opsz" 24, "wght" 500',
                    fontFeatureSettings: '"cv01", "cv05", "cv09", "cv11"',
                    letterSpacing: '-0.15px'
                  }}
                >
                  Phone: 0932755465
                </p>
                <p
                  className="text-[15px] leading-[1em] text-gray-600 whitespace-nowrap"
                  style={{
                    fontWeight: 500,
                    fontVariationSettings: '"opsz" 24, "wght" 500',
                    fontFeatureSettings: '"cv01", "cv05", "cv09", "cv11"',
                    letterSpacing: '-0.15px'
                  }}
                >
                  Email: bailearn.edu@gmail.com
                </p>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;