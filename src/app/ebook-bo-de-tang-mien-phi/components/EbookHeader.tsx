'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function EbookHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -80% 0px"
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

        {/* Mobile Menu Button (keep for consistency but simplified) */}
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

      {/* Mobile Menu - Simplified version */}
      <motion.div
        className="max-[1023px]:block hidden absolute top-full left-0 right-0 bg-primary border-t border-gray-200 shadow-lg z-20"
        initial={{ opacity: 0, height: 0 }}
        animate={isMobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="flex flex-col py-4 px-4 space-y-2">
          <motion.a
            href="/"
            className="flex items-center justify-center w-full h-12 bg-blue-prime rounded-lg text-white-framer font-inter font-medium text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Quay về Trang chủ
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
}
