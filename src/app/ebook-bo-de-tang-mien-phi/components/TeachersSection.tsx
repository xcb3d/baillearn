'use client';

import Image from 'next/image';
import { TrophyIcon, StarIcon } from '@heroicons/react/24/solid';

export default function TeachersSection() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-inter max-w-4xl mx-auto">
          <TrophyIcon className="w-10 h-10 text-baillearn-yellow inline-block mr-2" />
          Được biên soạn trực tiếp bởi những &ldquo;cao thủ&rdquo; từng làm nên kỷ lục ở kỳ thi ĐGNL HCM - VACT
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
  );
}
