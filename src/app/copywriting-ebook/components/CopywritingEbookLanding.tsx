'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircleIcon, StarIcon, AcademicCapIcon, TrophyIcon, ArrowUpIcon } from '@heroicons/react/24/solid';
import Header from '../../components/Header';

export default function CopywritingEbookLanding() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{name?: string; email?: string}>({});
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    const newErrors: {name?: string; email?: string} = {};
    
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Tên phải có ít nhất 2 ký tự';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/copywriting-ebook/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Có lỗi xảy ra');
      }

      // Show success modal
      setShowModal(true);
      
      // Reset form and states
      setFormData({ name: '', email: '' });
      setSubmitStatus({ type: null, message: '' });
      setIsSubmitting(false);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Có lỗi xảy ra. Vui lòng thử lại!';
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
      
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-blue-prime/90 to-blue-prime/80 backdrop-blur-xl border border-baillearn-yellow/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-up">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-baillearn-yellow mb-4">Cảm ơn bạn</h2>
              
              <div className="text-left space-y-4 text-white/90">
                <p>Bạn sẽ sớm nhận được email với tiêu đề là:</p>
                <p className="font-bold text-baillearn-yellow bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-baillearn-yellow/30">
                  &ldquo;QUAN TRỌNG: Xác minh email của bạn&rdquo;
                </p>
                
                <p>Bạn bắt buộc phải mở email đó và bấm <span className="font-bold text-baillearn-yellow">&ldquo;Xác minh email ngay&rdquo;</span> để nhận Bộ đề thực chiến ĐGNL HCM 2026 miễn phí từ bọn mình.</p>
                
                <p>Mình sẽ chỉ liên hệ qua email bạn đã dùng để đăng ký nên hãy kiểm tra inbox nhé.</p>
                
                <p>Nếu bạn không thấy email thì hãy kiểm tra kỹ hòm thư <span className="font-bold text-baillearn-yellow">SPAM & QUẢNG CÁO</span>.</p>
                
                <p>Nếu bạn không nhận được mail confirm trong vòng 10 phút, hoặc có bất kỳ câu hỏi nào cho bọn mình...</p>
                
                <p>Hãy liên hệ bọn mình tại địa chỉ mail: <span className="font-bold text-baillearn-yellow">bai.learner@bailearn.vn</span></p>
                
                <p className="font-bold text-white">Cảm ơn bạn rất nhiều!</p>
              </div>
              
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 bg-baillearn-yellow text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-prime via-blue-prime/80 to-blue-prime/60">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-baillearn-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-baillearn-yellow/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <Header />

        {/* Main Content */}
        <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Content */}
              <div className="space-y-8">
                {/* Main Headline */}
                <div className="animate-fade-in">
                  <p className="text-white/90 text-lg mb-4 font-inter italic">
                    ✨ Dành cho các sĩ tử 2k8 muốn tối đa hóa cơ hội vào các trường đại học mơ ước…
                  </p>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-inter">
                    <span className="text-white font-bold font-inter">Bộ đề 5 thực chiến </span>
                    <span className="text-baillearn-yellow font-bold font-inter drop-shadow-lg">ĐGNL HCM 2026 </span>
                    <span className="text-white font-bold font-inter">chuẩn form </span>
                  </h1>
                  
                  <p className="text-white/90 text-lg mt-3 font-inter leading-relaxed">
                    có đáp án và trích dẫn chi tiết từ thủ khoa có điểm ĐGNL cao nhất lịch sử
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-4">
                  {[
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
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3">
                      <span className="text-baillearn-yellow text-2xl">{benefit.icon}</span>
                      <span className="text-white/90 font-inter leading-relaxed text-lg">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Form Section - Right under content */}
                <div className="mt-8">
                  <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-2xl">
                    <h3 className="text-white text-xl font-bold mb-4 text-center">🎯 Nhận Bộ Đề Ngay!</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name Input */}
                      <div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Tên của bạn"
                          className={`w-full px-5 py-4 rounded-xl bg-white/95 border-2 font-inter text-gray-900 shadow-sm
                            ${errors.name ? 'border-red-400' : 'border-transparent'} 
                            focus:border-baillearn-yellow focus:outline-none focus:shadow-lg transition-all duration-300`}
                        />
                        {errors.name && (
                          <p className="text-red-300 text-sm font-inter mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email Input */}
                      <div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email thường dùng nhất của bạn"
                          className={`w-full px-5 py-4 rounded-xl bg-white/95 border-2 font-inter text-gray-900 shadow-sm
                            ${errors.email ? 'border-red-400' : 'border-transparent'} 
                            focus:border-baillearn-yellow focus:outline-none focus:shadow-lg transition-all duration-300`}
                        />
                        {errors.email && (
                          <p className="text-red-300 text-sm font-inter mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Status Message */}
                      {submitStatus.type && (
                        <div className={`p-4 rounded-lg ${
                          submitStatus.type === 'success'
                            ? 'bg-green-500/20 border border-green-400 text-green-100'
                            : 'bg-red-500/20 border border-red-400 text-red-100'
                        }`}>
                          <div className="flex items-center gap-2">
                            {submitStatus.type === 'success' ? (
                              <CheckCircleIcon className="w-5 h-5 text-green-400" />
                            ) : (
                              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.334 18.5c-.77.833-.23 2.5 1.732 2.5z" />
                              </svg>
                            )}
                            <span className="font-inter text-sm">{submitStatus.message}</span>
                          </div>
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting || submitStatus.type === 'success'}
                        className={`w-full py-5 px-6 rounded-xl font-bold font-inter text-lg transition-all duration-300 transform hover:scale-105 shadow-lg
                          ${submitStatus.type === 'success'
                            ? 'bg-green-500 text-white cursor-default'
                            : 'bg-gradient-to-r from-baillearn-yellow via-yellow-400 to-baillearn-yellow text-gray-900 hover:from-yellow-400 hover:via-baillearn-yellow hover:to-yellow-400'
                          }
                          ${(isSubmitting || submitStatus.type === 'success') ? 'opacity-75 cursor-not-allowed' : ''}
                        `}
                      >
                        {submitStatus.type === 'success' ? (
                          <div className="flex items-center justify-center gap-2">
                            <CheckCircleIcon className="w-5 h-5" />
                            Đang chuyển hướng...
                          </div>
                        ) : isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                            Đang xử lý...
                          </div>
                        ) : (
                          '🎁 NHẬN BỘ ĐỀ THỰC CHIẾN – ĐGNL HCM 2026 MIỄN PHÍ'
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right Column - Ebook Cover Image */}
              <div className="relative lg:sticky lg:top-8">
                <div className="relative">
                  <Image
                    src="/bia-sach.png"
                    alt="Bộ Đề Thực Chiến ĐGNL HCM 2026"
                    width={600}
                    height={800}
                    className="w-full h-auto shadow-2xl rounded-xl"
                    priority
                  />
                  {/* Glow effect behind image */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-baillearn-yellow/30 via-baillearn-yellow/20 to-baillearn-blue/30 rounded-2xl blur-2xl opacity-75 animate-pulse -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teachers Section */}
        <section className="px-6 py-20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-inter">
              <TrophyIcon className="w-10 h-10 text-baillearn-yellow inline-block mr-2" />
              Được biên soạn trực tiếp bởi những &ldquo;cao thủ&rdquo; từng làm nên kỷ lục ở kỳ thi ĐGNL
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              {/* Left - Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/haivabao.png"
                    alt="Thủ khoa ĐGNL"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Right - Content */}
              <div className="space-y-6 text-white">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <p className="font-inter text-lg leading-relaxed">
                    <StarIcon className="w-5 h-5 text-baillearn-yellow inline mr-2" />
                    <span className="font-bold text-baillearn-yellow text-xl">Phan Lê Thúc Bảo:</span>
                    <br />
                    <span className="text-white/90">2 lần Thủ khoa V-ACT. Kỷ lục điểm số cao nhất lịch sử kì thi ĐGNL HCM với <span className="text-2xl font-bold text-baillearn-yellow">1133 điểm</span> - cho đến nay vẫn chưa có thí sinh nào vượt qua.</span>
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <p className="font-inter text-lg leading-relaxed">
                    <StarIcon className="w-5 h-5 text-baillearn-yellow inline mr-2" />
                    <span className="font-bold text-baillearn-yellow text-xl">Trần Phước Hải:</span>
                    <br />
                    <span className="text-white/90">4 lần đạt điểm trên <span className="text-xl font-bold text-baillearn-yellow">1000+</span> với kỳ thi V-ACT. Á Khoa khối A00 - TP Đà Nẵng</span>
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <p className="font-inter text-lg leading-relaxed text-white/90">
                    💡 Sau mỗi đề, bạn sẽ nhìn thấy rõ <span className="text-baillearn-yellow font-semibold">điểm mạnh & điểm yếu</span> của mình để điều chỉnh kịp thời và quan trọng nhất: càng làm nhiều, bạn sẽ càng bớt run, bớt lo và tự tin hơn trong kỳ thi sắp tới.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur rounded-2xl p-10 border border-white/20">
                <div className="space-y-4 text-white/90">
                  <p className="font-inter text-lg leading-relaxed">
                    💭 Mình ở đây để nói với bạn rằng, chúng mình cũng từng giống như bạn…
                  </p>
                  
                  <p className="font-inter text-lg leading-relaxed">
                    📚 Càng ôn càng thấy kiến thức mênh mông, không biết mình đã ôn đúng trọng tâm hay vẫn đang lạc hướng.
                  </p>
                  
                  <p className="font-inter text-lg leading-relaxed">
                    😰 Càng đến gần ngày thi, cảm giác thiếu tự tin càng lớn: lỡ đâu đề thi rơi trúng phần mình chưa chạm tới thì sao?
                  </p>
                  
                  <p className="font-inter text-xl leading-relaxed font-bold text-white bg-gradient-to-r from-baillearn-yellow to-yellow-400 bg-clip-text text-transparent">
                    ✨ Nhưng bằng một phương pháp đặc biệt.
                  </p>
                  
                  <p className="font-inter text-lg leading-relaxed">
                    🎯 BaiLearn và các bạn học viên đã bứt phá và đạt được những thành tích ngoạn mục trong kỳ thi V-ACT 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Gallery */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3 font-inter">
              <AcademicCapIcon className="w-10 h-10 text-baillearn-yellow inline-block mr-2" />
              Thành Tích Nổi Bật
            </h2>
            <p className="text-center text-white/70 mb-12 text-lg">Những kết quả thực tế từ học viên BaiLearn</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="relative overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src={`/achi${num}.png`}
                    alt={`Thành tích học viên ${num}`}
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-6 py-12 bg-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3 font-inter">
              Vậy cuốn ebook này có gì mà BaiLearn tin bạn sẽ cần?
            </h2>
            
            <p className="text-white/90 mb-6 font-inter">
              Đây sẽ là những bài test thật giúp bạn biết rõ mình đang ở đâu, thiếu những gì để từ đó ôn đúng trọng tâm, nắm chắc kiến thức và tự tin bước vào kỳ thi.
            </p>
            
            <div className="mb-6">
              <h3 className="text-baillearn-yellow mb-3 font-inter font-semibold">
                Cuốn sách &ldquo;Thực chiến đề thi – ĐGNL HCM&rdquo; được biên soạn dành riêng cho các bạn 2k8 bao gồm:
              </h3>
              
              <div className="space-y-2 text-left max-w-xl mx-auto text-sm">
                <div className="flex gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-baillearn-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-white">5 đề thực chiến, chuẩn form đề thi thật - khỏi lo ôn lan man, bỏ sót bất kì phần nào</span>
                </div>
                
                <div className="flex gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-baillearn-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-white">Lời giải cực chi tiết, rõ ràng - giúp bạn tự check và sửa lỗi nhanh, không cần mất thời gian mò đáp án trên mạng</span>
                </div>
                
                <div className="flex gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-baillearn-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-white">Luyện tập kỹ năng phân bổ thời gian - và thử các chiến lược làm bài để tự tin hơn khi bước vào phòng thi</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-3 font-inter">
                Nhận Bộ 5 Đề Thực Chiến ĐGNL HCM 2026
              </h3>
              
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 bg-baillearn-yellow text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
              >
                📥 TẢI EBOOK MIỄN PHÍ
                <ArrowUpIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 border-t border-white/20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-2xl font-bold text-white mb-4 font-roboto-flex">
              <span className="text-baillearn-yellow">Bai</span>Learn
            </div>
            <p className="text-white/60 text-sm font-inter">
              © 2025 BaiLearn. All rights reserved. | &ldquo;Học để hiểu - Hiểu để sáng tạo&rdquo;
            </p>
          </div>
        </footer>
        </div>
      </div>
    </>
  );
}