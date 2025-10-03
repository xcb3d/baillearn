'use client';

import { useState } from 'react';
import EbookHeader from './EbookHeader';
import SuccessModal from './SuccessModal';
import HeroSection from './HeroSection';
import TeachersSection from './TeachersSection';
import AchievementsGallery from './AchievementsGallery';
import CTASection from './CTASection';
import EbookFooter from './EbookFooter';

export default function CopywritingEbookLanding() {
  const [showModal, setShowModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSuccess = () => {
    setShowModal(true);
  };

  return (
    <>
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-prime via-blue-prime/80 to-blue-prime/60">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-baillearn-yellow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-baillearn-yellow/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10">
          <EbookHeader />
          <HeroSection onFormSuccess={handleFormSuccess} />
          <TeachersSection />
          <AchievementsGallery />
          <CTASection onScrollToTop={scrollToTop} />
        </div>
      </div>
    </>
  );
}
