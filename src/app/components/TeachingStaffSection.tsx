'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeacherCard {
  id: string;
  name: string;
  imageUrl: string;
  achievements: string[];
  detailedInfo?: string[];
}

const teachers: TeacherCard[] = [
  {
    id: 'bao',
    name: 'Phan Lê Thúc Bảo',
    imageUrl: '/phan-le-thuc-bao.webp',
    achievements: [
      'Phụ trách Tư Duy Khoa Học',
      'Kỉ lục 1133đ ĐGNL HCM',
      '2 lần thủ khoa ĐGNL HCM'
    ]
  },
  {
    id: 'hai',
    name: 'Trần Phước Hải',
    imageUrl: '/tran-phuoc-hai.webp',
    achievements: [
      'Phụ trách phần Toán',
      'Á Khoa A00 TP. Đà Nẵng',
      '3 lần 1000+ ĐGNL HCM'
    ],
    detailedInfo: [
      'Cựu chuyên Toán THPT Chuyên Lê Quý Đôn Đà Nẵng',
      'Á Khoa TP Đà Nẵng năm 2023',
      'Giải Nhất HSG Vật lý TP. Đà Nẵng 2022-2023',
      'Sở hữu 4 điểm 1000+ ĐGNL HCM',
      'Hơn hai năm kinh nghiệm dạy luyện thi ĐGNL HCM, có nhiều học trò đạt 900+, 1000+',
      'Đang theo học ngành Khoa học máy tính - Trường ĐH Khoa học Tự nhiên - ĐHQG HCM'
    ]
  },
  {
    id: 'nguyen',
    name: 'Hoàng Phước Nguyên',
    imageUrl: '/hoang-phuoc-nguyen.webp',
    achievements: [
      'Phụ trách phần Tiếng Việt',
      'Cử nhân xuất sắc CNTT HCMUS',
      'CTV Hội Văn học Nghệ thuật'
    ],
    detailedInfo: [
      'Đồng tác giả sách: IELTS Writing - Viết luận chất như nước cất',
      'Tốt nghiệp xuất sắc ngành công nghệ thông tin - đại học Khoa học Tự nhiên, ĐHQG thành phố Hồ Chí Minh',
      'Đồng tác giả bài báo nghiên cứu tại tạp chí EAAI, xếp Q1',
      'Từng là cộng tác viên tại hội Văn học nghệ thuật tỉnh Đồng Nai',
      'Giáo viên tại Dự án hỗ trợ cộng đồng học tập có hơn 10.000 thành viên',
      'Đang theo học ngành ngôn ngữ học - đại học Khoa học Xã hội và Nhân văn, ĐHQG thành phố Hồ Chí Minh'
    ]
  },
  {
    id: 'nam',
    name: 'Phan Bản Nhật Nam',
    imageUrl: '/phan-ban-nhat-nam.webp',
    achievements: [
      'Phụ trách phần Tiếng Việt',
      'Đạt 1087đ ĐGNL HCM 2024',
      'SV tài năng An toàn thông tin'
    ],
    detailedInfo: [
      'Cựu chuyên Lý THPT chuyên Quốc học Huế',
      '1087 điểm ĐGNL HCM 2024',
      'Đang theo học ngành An toàn thông tin - Trường ĐH Công nghệ thông tin - ĐHQG HCM'
    ]
  },
  {
    id: 'dieu',
    name: 'Đỗ Thị Minh Diệu',
    imageUrl: '/do-thi-minh-dieu.webp',
    achievements: [
      'Phụ trách phần Tiếng Anh',
      'Thủ khoa trường khối D07',
      'HSG Tỉnh môn Tiếng Anh'
    ],
    detailedInfo: [
      'Thủ khoa khối D01 THPT Số 2 Tư Nghĩa',
      'Giải 3 HSG Tiếng Anh Tỉnh Quảng Ngãi',
      '1 năm kinh nghiệm dạy Tiếng Anh',
      'Thành viên Ban chuyên môn CLB Anh văn tại UEH'
    ]
  },
  {
    id: 'hau',
    name: 'Nguyễn Duy Hậu',
    imageUrl: '/nguyen-duy-hau.webp',
    achievements: [
      'Trợ giảng',
      'Thủ khoa ĐH Y Dược TP.HCM',
      'Thủ khoa HSG Toán TP. Đà Nẵng'
    ],
    detailedInfo: [
      'Cựu chuyên Toán THPT Chuyên Lê Quý Đôn Đà Nẵng',
      'Á khoa khối B00 toàn quốc THPT Quốc gia 2023',
      'Thủ khoa HSG Toán TP Đà Nẵng 2023',
      'Thủ khoa đầu vào và đang theo học tại Đại học Y Dược TP.HCM ngành Y Đa khoa'
    ]
  },
  {
    id: 'quan',
    name: 'Nguyễn Minh Quân',
    imageUrl: '/nguyen-minh-quan.webp',
    achievements: [
      'Trợ giảng',
      'Đạt 1055đ ĐGNL HCM 2024',
      'Sinh viên APCS - HCMUS'
    ],
    detailedInfo: [
      'Cựu học sinh THPT Chuyên Lê Quý Đôn Bình Định',
      '1055 điểm ĐGNL HCM 2024',
      'Đang theo học ngành Khoa học Máy tính - Trường ĐH Khoa học Tự nhiên - ĐHQG HCM'
    ]
  }
];

const TeacherCardComponent = ({ teacher, index, isVisible }: { teacher: TeacherCard; index: number; isVisible: boolean }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowDetails(false);
      setIsClosing(false);
    }, 600); // Duration of close animation (updated for new dramatic timing)
  };

  return (
  <li 
    className={`snap-center flex-shrink-0 snap-always relative transition-all duration-200 ${
      isVisible ? 'animate-card-stagger-in' : 'opacity-0 translate-y-8 scale-95'
    }`}
    style={{ 
      animationDelay: isVisible ? `${0.8 + index * 0.12}s` : '0s',
      transitionDelay: isVisible ? '0s' : `${index * 0.05}s`
    }}
    aria-label={`${teacher.name} - ${teachers.findIndex(t => t.id === teacher.id) + 1} of ${teachers.length}`}>
    <div className="relative w-80 h-[485px]">
      <div className="flex flex-col justify-center items-center gap-0 w-full h-full p-0 relative overflow-hidden
                      bg-white rounded-[20px] border-2 border-gray-100 opacity-100">
        
        {/* Image Section */}
        <div className="aspect-[1.33333] h-0 flex-1 w-full relative overflow-hidden rounded-t-[20px] opacity-100">
          <div className="absolute rounded-inherit inset-0">
            <Image
              src={teacher.imageUrl}
              alt={teacher.name}
              width={320}
              height={240}
              className="block w-full h-full object-cover object-top rounded-inherit"
              sizes="320px"
            />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col justify-start items-start gap-[20px] w-full h-min p-[30px] relative opacity-100">
          {/* Name */}
          <div className="outline-none flex flex-col justify-start flex-shrink-0">
            <h3 className="font-inter font-semibold text-xl tracking-[-0.5px] leading-[1.4em] text-left text-[rgb(0,17,34)]">
              {teacher.name}
            </h3>
          </div>
          
          {/* Achievements */}
          <div className="flex flex-row flex-none justify-start items-center gap-[8px] w-full h-min p-0 relative overflow-visible opacity-100">
            <div className="flex flex-col flex-none justify-center items-center gap-[14px] w-min h-min p-0 relative overflow-visible opacity-100">
              {/* Decorative icons */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square h-[13px] z-10 flex-none w-[13px] relative overflow-visible -rotate-[25deg] opacity-100">
                  <Image
                    src="/bentocard-float2.png"
                    alt="Achievement icon"
                    width={14}
                    height={14}
                    className="block w-full h-full object-cover object-center rounded-inherit"
                    sizes="13px"
                  />
                </div>
              ))}
            </div>
            <div className="outline-none flex flex-col justify-start flex-shrink-0">
              {teacher.achievements.map((achievement, index) => (
                <p key={index} className="font-inter font-medium leading-[1.6em] text-left text-[rgb(102,102,102)]">
                  {achievement}
                </p>
              ))}
            </div>
          </div>
          
          {/* "Tìm hiểu thêm" button */}
          <button
            onClick={() => setShowDetails(true)}
            className="bg-[rgb(40,100,209)] rounded-[48px] opacity-100 will-change-transform w-full h-[42px] py-0 px-[24px] flex flex-row justify-center items-center gap-[48px] relative overflow-visible hover:bg-[rgb(40,100,209)]/90 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border-none outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            <div className="outline-none flex flex-col justify-center flex-shrink-0 text-white font-inter font-medium text-base leading-tight">
              <p>Tìm hiểu thêm</p>
            </div>
          </button>
        </div>
        
        {/* White Overlay Background with Details */}
        {showDetails && (
          <div
            className={`absolute inset-0 bg-white/90 backdrop-blur-sm rounded-[20px] z-40 flex flex-col justify-start ${
              isClosing ? 'animate-fade-out-overlay' : 'animate-fade-in-overlay'
            }`}
            data-lenis-prevent>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors duration-200 text-xl font-bold z-50"
            >
              ✕
            </button>
            
            {/* Details Content - Slide up from bottom */}
            <div
              className={`p-6 ${isClosing ? 'animate-slide-down-details' : 'animate-slide-up-details'} overflow-y-auto max-h-[calc(100%-60px)] teacher-details-scroll`}
              style={{
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch',
                touchAction: 'pan-y'
              }}>
              <div className="text-left">
                {/* Teacher Name */}
                <h4 className={`font-inter font-bold text-xl mb-4 leading-tight text-gray-800 ${
                  isClosing ? 'animate-cascade-up' : 'animate-cascade-down'
                }`} style={{ animationDelay: isClosing ? '0s' : '0.2s' }}>
                  {teacher.name}
                </h4>
                
                <div className="space-y-3 pr-2">
                  {(teacher.detailedInfo || teacher.achievements).map((info, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start gap-2 pl-4 ${
                        isClosing ? 'animate-cascade-up' : 'animate-cascade-down'
                      }`}
                      style={{ 
                        animationDelay: isClosing 
                          ? `${index * 0.1}s` 
                          : `${0.25 + index * 0.1}s` 
                      }}
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="font-inter font-medium text-sm leading-relaxed text-gray-700">
                        {info}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </li>
  );
};

export default function TeachingStaffSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLUListElement>(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Enhanced Scroll Trigger with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay to ensure smooth scroll trigger
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: '-100px 0px -50px 0px' // More precise trigger area
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowPrevButton(scrollLeft > 0);
      setShowNextButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

    const scrollTo = (direction: 'prev' | 'next') => {
      if (scrollRef.current) {
        // Dynamic calculation based on actual DOM measurements
        const getScrollAmount = () => {
          const firstCard = scrollRef.current?.querySelector('li');
          if (!firstCard) return 660; // fallback
          
          const cardRect = firstCard.getBoundingClientRect();
          const cardWidth = cardRect.width;
          const gap = 10; // gap-2.5 = 10px
          return 2 * (cardWidth + gap); // 2 cards + gaps
        };
        
        // Temporarily disable snap for smoother scrolling
        const originalSnapType = scrollRef.current.style.scrollSnapType;
        scrollRef.current.style.scrollSnapType = 'none';
        
        const scrollAmount = getScrollAmount();
        const newScrollLeft = direction === 'next' 
          ? scrollRef.current.scrollLeft + scrollAmount
          : scrollRef.current.scrollLeft - scrollAmount;
        
        scrollRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
        
        // Re-enable snap after smooth scroll animation completes
        setTimeout(() => {
          if (scrollRef.current) {
            scrollRef.current.style.scrollSnapType = originalSnapType || 'x mandatory';
          }
        }, 650); // Slightly longer than default smooth scroll duration
      }
    };

  return (
    <div 
      ref={sectionRef}
      className={`bg-white-framer flex flex-col justify-center items-center gap-15 w-full h-min px-4 md:px-8 lg:px-12 xl:px-16 py-25 relative overflow-hidden
                  md:py-20 sm:px-5 sm:py-15 ${isVisible ? 'animate-section-dramatic-in' : 'opacity-0'}`}
      data-framer-name="Teaching Staff" 
      id="doi-ngu-upd">


      {/* Title Section */}
      <div className={`bg-primary flex flex-row justify-center items-center gap-2.5 w-auto h-min px-4 py-6 relative overflow-hidden ${isVisible ? 'animate-title-dramatic-in' : 'opacity-0'}`}>
        {/* Single Title for all devices */}
        <div className="outline-none flex flex-col justify-start flex-shrink-0">
          <p className="font-roboto-flex-custom text-center text-blue-prime"
             style={{ fontSize: 'clamp(30px, 5vw, 60px)' }}>
            ĐỘI NGŨ GIẢNG DẠY - CHUYÊN MÔN
          </p>
        </div>
      </div>


      {/* Carousel Container for Teacher Cards */}
      <div className={`relative w-full max-w-[1000px] h-[524px] md:h-auto sm:h-auto ${isVisible ? 'animate-carousel-dramatic-in' : 'opacity-0'}`}>
        <section className="flex overflow-hidden w-full h-full relative p-2.5" aria-roledescription="carousel">
          <ul 
            ref={scrollRef}
            onScroll={handleScroll}
            className="carousel-container carousel-scrollbar p-0 m-0 list-none relative flex flex-1 w-full h-full gap-2.5 items-center flex-row overflow-x-auto overflow-y-visible snap-x snap-mandatory rounded-none" 
            data-show-scrollbar="true" 
            aria-atomic="false" 
            aria-live="polite"
          >
            {teachers.map((teacher, index) => (
              <TeacherCardComponent 
                key={teacher.id} 
                teacher={teacher} 
                index={index}
                isVisible={isVisible}
              />
            ))}
          </ul>
          
          {/* Carousel Controls */}
          <fieldset className="flex justify-between items-center absolute inset-0 pointer-events-none border-0 p-5 m-0 flex-row" 
                    aria-label="Carousel pagination controls" 
                    data-show-mouse-controls="true">
            <button 
              type="button" 
              aria-label="Previous" 
              tabIndex={showPrevButton ? 0 : -1}
              onClick={() => scrollTo('prev')}
              className={`carousel-nav-btn border-none block place-content-center place-items-center overflow-hidden bg-black/20 m-0 p-0 w-10 h-10 rounded-full transform-none pointer-events-auto transition-opacity duration-300 ${
                showPrevButton ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-default pointer-events-none'
              }`}
            >
              <Image
                alt="Previous"
                width={40}
                height={40}
                src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg"
              />
            </button>
            <button 
              type="button" 
              aria-label="Next" 
              tabIndex={showNextButton ? 0 : -1}
              onClick={() => scrollTo('next')}
              className={`carousel-nav-btn border-none block place-content-center place-items-center overflow-hidden bg-black/20 m-0 p-0 w-10 h-10 rounded-full transform-none pointer-events-auto transition-opacity duration-300 ${
                showNextButton ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-default pointer-events-none'
              }`}
            >
              <Image
                alt="Next"
                width={40}
                height={40}
                src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
              />
            </button>
          </fieldset>
        </section>
      </div>

      {/* Decorative Assets - Positioned relative to section */}
      
      {/* Top Right Corner - bentocard-float2 */}
      <motion.div
        className="aspect-square h-[300px] z-5 flex-none w-[300px] absolute top-[20px] right-[-80px] overflow-visible rotate-[35deg]
                        md:h-[240px] md:w-[240px] md:top-[15px] md:right-[-60px] md:rotate-[40deg]
                        sm:h-[180px] sm:w-[180px] sm:top-[10px] sm:right-[-45px] sm:rotate-[45deg]"
        initial={{ opacity: 0, x: 100, rotate: 0 }}
        animate={isVisible ? { opacity: 1, x: 0, rotate: 35 } : { opacity: 0, x: 100, rotate: 0 }}
        transition={{ duration: 1.2, delay: 1.5, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1, rotate: 40 }}
      >
        <motion.img
          src="/bentocard-float2.png"
          alt="Floating decoration 2"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </motion.div>

      {/* Top Left Corner - bentocard-float3 */}
      <motion.div
        className="aspect-square h-[220px] z-5 flex-none w-[220px] absolute top-[120px] left-[20px] overflow-visible
                        md:h-[180px] md:w-[180px] md:top-[100px] md:left-[15px]
                        sm:h-[140px] sm:w-[140px] sm:top-[80px] sm:left-[10px]"
        initial={{ opacity: 0, x: -100, rotate: 0 }}
        animate={isVisible ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -100, rotate: 0 }}
        transition={{ duration: 1.2, delay: 1.6, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          src="/bentocard-float3.png"
          alt="Floating decoration 3"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </motion.div>

      {/* Bottom Left Corner - bentocard-float1 */}
      <motion.div
        className="aspect-square h-[200px] z-5 flex-none w-[200px] absolute bottom-[20px] left-[-30px] overflow-visible rotate-[130deg]
                        md:h-[160px] md:w-[160px] md:bottom-[15px] md:left-[-25px] md:rotate-[135deg]
                        sm:h-[120px] sm:w-[120px] sm:bottom-[10px] sm:left-[-20px] sm:rotate-[140deg]"
        initial={{ opacity: 0, y: 100, rotate: 90 }}
        animate={isVisible ? { opacity: 1, y: 0, rotate: 130 } : { opacity: 0, y: 100, rotate: 90 }}
        transition={{ duration: 1.2, delay: 1.7, type: "spring", stiffness: 90 }}
        whileHover={{ scale: 1.1, rotate: 135 }}
      >
        <motion.img
          src="/bentocard-float1.png"
          alt="Floating decoration 1"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </motion.div>



    </div>
  );
}
