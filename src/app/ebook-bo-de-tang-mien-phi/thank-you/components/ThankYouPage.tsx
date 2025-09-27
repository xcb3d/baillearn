'use client';

import { CheckCircleIcon, EnvelopeIcon, BookOpenIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextSteps = [
    {
      icon: <EnvelopeIcon className="w-8 h-8 text-baillearn-yellow" />,
      title: 'Kiểm tra Email',
      description: 'Chúng tôi vừa gửi bộ đề qua email của bạn. Hãy kiểm tra cả hộp thư spam nếu không thấy.',
      time: 'Ngay bây giờ'
    },
    {
      icon: <BookOpenIcon className="w-8 h-8 text-baillearn-yellow" />,
      title: 'Làm Đề Thử',
      description: 'Tải xuống và làm thử 5 đề thực chiến để đánh giá trình độ hiện tại của bạn.',
      time: 'Trong 30 phút'
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8 text-baillearn-yellow" />,
      title: 'Ôn Tập Hiệu Quả',
      description: 'Sử dụng lời giải chi tiết để hiểu rõ cách giải và nâng cao kỹ năng làm bài thi.',
      time: 'Hôm nay'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-prime via-blue-prime/80 to-blue-prime/60">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-baillearn-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6 animate-bounce">
              <CheckCircleIcon className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-roboto-flex">
              Cảm ơn bạn!
            </h1>
            
            <p className="text-xl text-white/80 font-inter mb-2">
              Bộ đề đã được gửi qua email của bạn
            </p>
            
            <div className="inline-block px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-300 text-sm font-medium border border-green-500/30">
              ✅ Đăng ký thành công
            </div>
          </div>

          {/* Email Check Alert */}
          <div className="bg-baillearn-yellow/10 border border-baillearn-yellow/30 rounded-2xl p-6 mb-12 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <EnvelopeIcon className="w-8 h-8 text-baillearn-yellow flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-2 font-inter">
                  Quan trọng: Kiểm tra email của bạn!
                </h3>
                <p className="text-white/80 font-inter">
                  Chúng tôi vừa gửi <strong>&ldquo;Bộ Đề Thực Chiến ĐGNL HCM 2026&rdquo;</strong> tới email của bạn.
                  Nếu không thấy trong hộp thư chính, hãy kiểm tra thư mục <strong>Spam/Promotional</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center mb-12">
            <button className="bg-gradient-to-r from-baillearn-yellow to-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg hover:from-yellow-400 hover:to-baillearn-yellow transform hover:scale-105 transition-all duration-300 font-inter text-lg">
              📧 Mở Email Ngay
            </button>
            <p className="text-white/60 text-sm mt-2 font-inter">
              Hoặc kiểm tra email trên điện thoại của bạn
            </p>
          </div>

          {/* Next Steps */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8 font-roboto-flex">
              Bước tiếp theo của bạn
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2 font-inter">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3 font-inter">
                    {step.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-baillearn-blue/20 rounded-full text-baillearn-yellow text-xs font-medium">
                    {step.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus Content */}
          <div className="bg-gradient-to-r from-baillearn-blue/20 to-baillearn-yellow/20 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-baillearn-yellow/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-roboto-flex">
                🎁 Bonus Đặc Biệt
              </h3>
              <p className="text-white/80 font-inter mb-6">
                Chúng tôi cũng sẽ gửi cho bạn những tips luyện thi hiệu quả qua email. 
                Hãy theo dõi hộp thư để không bỏ lỡ!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-inter">
                  📝 Phương pháp giải nhanh
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-inter">
                  💡 Mẹo làm bài hiệu quả
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-inter">
                  🚀 Chiến lược phân bổ thời gian
                </span>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-white mb-6 font-roboto-flex">
              Hơn 8,000+ thí sinh đã sử dụng bộ đề này
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: '8,000+', label: 'Lượt tải bộ đề', icon: '📚' },
                { number: '4.8/5', label: 'Đánh giá trung bình', icon: '⭐' },
                { number: '92%', label: 'Đậu đại học', icon: '🎯' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-baillearn-yellow mb-1 font-roboto-flex">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm font-inter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Auto redirect notice */}
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-white/70 font-inter">
              Trang này sẽ tự động chuyển về trang chủ sau {countdown} giây
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="mt-3 px-4 py-2 bg-baillearn-blue/20 text-baillearn-yellow rounded-lg hover:bg-baillearn-blue/30 transition-colors font-inter"
            >
              Về trang chủ ngay
            </button>
          </div>

          {/* Footer */}
          <footer className="text-center mt-12 pt-8 border-t border-white/20">
            <div className="text-2xl font-bold text-white mb-4 font-roboto-flex">
              <span className="text-baillearn-yellow">Bai</span>Learn
            </div>
            <p className="text-white/60 text-sm font-inter">
              © 2025 BaiLearn. All rights reserved. | &ldquo;Học để hiểu - Hiểu để sáng tạo&rdquo;
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}