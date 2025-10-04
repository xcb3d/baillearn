'use client';

import { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import SuccessModal from './SuccessModal';

export default function VactGroupLanding() {
  const [showModal, setShowModal] = useState(false);

  const benefits = [
    {
      icon: '✅',
      text: 'Tất tần tật thông tin mới nhất về các chuỗi series livestream của BaiLearn.'
    },
    {
      icon: '✅',
      text: 'Link tổng hợp toàn bộ tài liệu được dùng trong từng buổi live (liên tục cập nhật theo thời gian)'
    },
    {
      icon: '✅',
      text: 'Những phần quà bí mật mà chỉ các bạn trong group kín mới được bật mí.'
    }
  ];

  const handleFormSuccess = () => {
    setShowModal(true);
  };

  return (
    <>
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <div className="min-h-screen relative bg-blue-prime">
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-8">
        <div className="max-w-4xl mx-auto w-full">
          <div className="space-y-6">
            {/* Main Headline */}
            <div className="text-center space-y-4">
              <p className="text-baillearn-yellow text-2xl md:text-3xl lg:text-4xl font-inter font-extrabold max-w-[53rem] mx-auto">
                Dành cho các sĩ tử 2k8 mong muốn chinh phục kỳ thi ĐGNL HCM (V-ACT) trong năm 2026…
              </p>

              <p className="text-lg md:text-xl lg:text-2xl font-inter font-semibold">
                <span className="text-baillearn-yellow">ALL IN ONE</span>
                {' '}
                <span className="text-white">Chỉ với một nút bấm, bạn sẽ có:</span>
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3.5 border border-white/20">
                  <div className="flex-shrink-0 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#34D399', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      <circle cx="12" cy="12" r="10" fill={`url(#gradient-${index})`}/>
                      <path d="M8 12.5l2.5 2.5L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white font-inter text-base leading-relaxed">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Form Section */}
            <div className="mt-6">
              <RegistrationForm onSuccess={handleFormSuccess} />
            </div>

            {/* Social Proof */}
            <div className="text-center">
              <p className="text-white/90 font-inter text-base md:text-lg">
                <span className="font-bold text-baillearn-yellow">Hơn 500 bạn 2k8</span> đã tham gia và nhận được trọn bộ tài liệu học cực giá trị!
              </p>
            </div>

            {/* Important Notice */}
            <div className="bg-red-500/20 border-2 border-red-400/50 rounded-lg p-3.5 backdrop-blur-sm">
              <p className="text-white font-inter text-sm md:text-base leading-relaxed">
                <span className="font-bold text-red-200">Lưu ý:</span> Link chỉ mở trong 24 giờ trong buổi live, sau đó hệ thống sẽ tạm đóng để cập nhật dữ liệu mới.
                {' '}
                <span className="text-baillearn-yellow font-semibold">Hãy tranh thủ để không bỏ lỡ cơ hội vàng này nhé!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
