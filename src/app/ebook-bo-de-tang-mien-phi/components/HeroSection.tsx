'use client';

import Image from 'next/image';
import RegistrationForm from './RegistrationForm';

interface HeroSectionProps {
  onFormSuccess: () => void;
}

export default function HeroSection({ onFormSuccess }: HeroSectionProps) {
  const benefits = [
    {
      icon: '👉',
      text: 'Hoàn toàn miễn phí, không cần lo "mất phí ẩn".',
      highlight: 'miễn phí'
    },
    {
      icon: '👉',
      text: 'Đề bám sát cấu trúc chính thức - không lo học lệch, học thiếu.',
      highlight: 'cấu trúc chính thức'
    },
    {
      icon: '👉',
      text: 'Trích dẫn từ thủ khoa, giúp bạn hiểu cách tư duy giải quyết chứ không chỉ chọn đúng đáp án.',
      highlight: 'cách tư duy'
    }
  ];

  return (
    <div className="min-h-[calc(95vh-80px)] flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-center">
          {/* Left Column - Content */}
          <div className="space-y-3 max-w-lg">
            {/* Main Headline */}
            <div className="animate-fade-in text-center">
              <p className="text-white/90 text-base mb-2 font-inter italic">
                ✨ Dành cho các sĩ tử 2k8 muốn tối đa hóa cơ hội vào các trường đại học mơ ước…
              </p>

              <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold leading-tight font-inter">
                <span className="text-white font-bold font-inter">Bộ đề 5 thực chiến </span>
                <span className="text-baillearn-yellow font-bold font-inter drop-shadow-lg">ĐGNL HCM 2026 </span>
                <span className="text-white font-bold font-inter">chuẩn form có đáp án và trích dẫn chi tiết từ </span>
                <span className="text-baillearn-yellow font-bold font-inter drop-shadow-lg">
                  thủ khoa có điểm ĐGNL cao nhất lịch sử
                </span>
              </h1>
            </div>

            {/* Key Benefits */}
            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-baillearn-yellow text-xl">{benefit.icon}</span>
                  <span className="text-white/90 font-inter leading-relaxed text-base">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Form Section */}
            <div className="mt-3">
              <RegistrationForm onSuccess={onFormSuccess} />
            </div>
          </div>

          {/* Right Column - Ebook Cover Image */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[280px] lg:w-[320px]">
              <Image
                src="/bia-sach-4.png"
                alt="Bộ Đề Thực Chiến ĐGNL HCM 2026"
                width={350}
                height={466}
                className="w-full h-auto  rounded-xl"
                priority
              />
              {/* Glow effect behind image */}
              <div className="absolute inset-[-1rem] bg-[linear-gradient(to_right,rgb(var(--baillearn-yellow)/0.3),rgb(var(--baillearn-yellow)/0.2),rgb(var(--baillearn-blue)/0.3))] rounded-2xl blur-2xl opacity-75 animate-pulse z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
