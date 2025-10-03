'use client';

import { CheckCircleIcon, ArrowUpIcon } from '@heroicons/react/24/solid';

interface CTASectionProps {
  onScrollToTop: () => void;
}

export default function CTASection({ onScrollToTop }: CTASectionProps) {
  return (
    <section className="px-6 py-16 bg-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white mb-6 font-inter text-center leading-tight">
          Vậy cuốn ebook này có gì mà BailLearn tin bạn sẽ cần?
        </h2>

        {/* Subheading */}
        <p className="text-white/90 mb-8 font-inter text-lg leading-relaxed text-center max-w-2xl mx-auto">
          Đây sẽ bài những bài test thật giúp bạn biết rõ mình đang ở đâu, thiếu những gì để từ đó ôn đúng trọng tâm, nắm chắc kiến thức và tự tin bước vào kỳ thi.
        </p>

        {/* Book Content Description */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20 mb-8">
          <p className="text-baillearn-yellow text-xl font-bold mb-6 font-inter text-center">
            Cuốn sách <span className="text-white">&ldquo;Thực chiến đề thi – ĐGNL HCM&rdquo;</span> được biên soạn dành riêng cho các bạn 2k8 bao gồm:
          </p>

          <div className="space-y-5 max-w-2xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-baillearn-yellow/20 rounded-full flex items-center justify-center mt-1">
                <CheckCircleIcon className="w-5 h-5 text-baillearn-yellow" />
              </div>
              <div>
                <p className="text-white text-base leading-relaxed">
                  5 đề thực chiến, chuẩn form đề thi thật – khỏi lo ôn lan man, bỏ sót bất kì phần nào
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-baillearn-yellow/20 rounded-full flex items-center justify-center mt-1">
                <CheckCircleIcon className="w-5 h-5 text-baillearn-yellow" />
              </div>
              <div>
                <p className="text-white text-base leading-relaxed">
                  Lời giải cực chi tiết, rõ ràng giúp bạn tự check và sửa lỗi nhanh, không cần mất thời gian mò đáp án trên mạng
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-baillearn-yellow/20 rounded-full flex items-center justify-center mt-1">
                <CheckCircleIcon className="w-5 h-5 text-baillearn-yellow" />
              </div>
              <div>
                <p className="text-white text-base leading-relaxed">
                  Luyện tập kỹ năng phân bổ thời gian và thử các chiến lược làm bài để tự tin hơn khi bước vào phòng thi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6 font-inter">
            Nhận Bộ 5 Đề Thực Chiến ĐGNL HCM 2026
          </h3>

          <button
            onClick={onScrollToTop}
            className="inline-flex items-center gap-3 bg-baillearn-yellow text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:scale-105 transition-all duration-300 text-lg shadow-lg"
          >
            TẢI EBOOK MIỄN PHÍ
          </button>
        </div>
      </div>
    </section>
  );
}
