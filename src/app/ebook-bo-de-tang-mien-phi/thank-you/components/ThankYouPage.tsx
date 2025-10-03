'use client';

import Image from 'next/image';

export default function ThankYouPage() {
  return (
    <div className="h-screen bg-blue-prime flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-baillearn-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 py-4 sm:py-6 md:py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border border-white/20 text-center">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-3 sm:mb-4 font-inter font-bold leading-relaxed">
            THAM GIA GROUP CÙNG BAILEARN ĐỂ KHÔNG BỎ LỠ CÁC THÔNG TIN, LỊCH LIVESTREAM, VÀ TÀI LIỆU CHẤT LƯỢNG NHẤT VỀ…
          </p>

          <div className="mb-4 sm:mb-6 md:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-baillearn-yellow font-inter drop-shadow-2xl leading-tight">
              Kỳ thi ĐGNL HCM (V-ACT) 2026
            </h1>
          </div>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 border border-white/10">
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-inter mb-4 sm:mb-6">
              Tham gia bằng đường link:
            </p>
            <div className="z-10 flex justify-center items-center">
              <div className="cursor-pointer inline-flex relative overflow-visible rounded-[22.74px] shadow-none group">
                <a 
                  className="relative" 
                  href="https://zalo.me/g/neruyd958" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="relative bg-primary flex flex-row justify-center items-center h-[36px] sm:h-[40px] md:h-[42px] lg:h-[45px] py-0 px-4 sm:px-6 md:px-7 lg:px-8 rounded-[45.47px] shadow-none overflow-visible hover:shadow-[0_10px_30px_rgba(255,215,0,0.4)] transition-shadow duration-300">
                    <div className="outline-none flex flex-col justify-center flex-shrink-0 text-blue-prime font-inter font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.4em] z-20">
                      Tham gia ngay
                    </div>
                    
                    <div className="absolute -top-[15px] -right-[15px] w-[17px] h-[17px] z-30 overflow-visible pointer-events-none opacity-0 translate-x-[30px] translate-y-[-30px] scale-[0.2] -rotate-[30deg] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 transition-all duration-500">
                      <Image 
                        src="/bentocard-float2.png" 
                        alt="" 
                        width={17} 
                        height={17}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="absolute -top-[15px] -left-[15px] w-[20px] h-[20px] z-30 overflow-visible pointer-events-none opacity-0 translate-x-[-30px] translate-y-[-30px] scale-[0.2] rotate-[15deg] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 transition-all duration-500">
                      <Image 
                        src="/bentocard-float4.png" 
                        alt="" 
                        width={20} 
                        height={20}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="absolute -bottom-[10px] right-[35px] w-[14px] h-[14px] z-30 overflow-visible pointer-events-none opacity-0 translate-x-[-40px] translate-y-[50px] scale-[0.2] -rotate-[45deg] group-hover:opacity-100 group-hover:translate-x-[-15px] group-hover:translate-y-[15px] group-hover:scale-100 group-hover:rotate-[45deg] transition-all duration-500">
                      <Image 
                        src="/bentocard-float1.png" 
                        alt="" 
                        width={14} 
                        height={14}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-inter mb-3 sm:mb-4 md:mb-6">
              Hoặc quét mã QR dưới đây
            </p>
            <div className="inline-block bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl">
              <Image 
                src="/qr_zalo.png" 
                alt="QR Code Zalo Group" 
                width={300} 
                height={300}
                className="rounded-lg w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}