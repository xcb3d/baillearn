'use client';

import Image from 'next/image';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

export default function AchievementsGallery() {
  return (
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
  );
}
