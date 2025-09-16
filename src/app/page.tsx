import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BentoSection from './components/BentoSection';
import AchievementsSection from './components/AchievementsSection';
import GlowUpSection from './components/GlowUpSection';
import TeachingStaffSection from './components/TeachingStaffSection';
import AchievementsGallerySection from './components/AchievementsGallerySection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div id="main" className="min-h-screen w-auto">
      <Header />
      <HeroSection />
      <AchievementsSection />
      <BentoSection />
      <TeachingStaffSection />
      <GlowUpSection />
      <AchievementsGallerySection />
      <Footer />
    </div>
  );
}
