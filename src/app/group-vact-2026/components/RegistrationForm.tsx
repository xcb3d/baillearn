'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface RegistrationFormProps {
  onSuccess: () => void;
}

export default function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{name?: string; email?: string}>({});
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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
      const response = await fetch('/api/vact-group/submit', {
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
      onSuccess();

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

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/30 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name Input */}
        <div>
          <input
            type="text"
            id="vact-name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Nhập tên của bạn"
            className={`w-full px-4 py-2.5 rounded-lg bg-white/95 border-2 font-inter text-base text-gray-900 shadow-sm
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
            id="vact-email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Nhập email của bạn"
            className={`w-full px-4 py-2.5 rounded-lg bg-white/95 border-2 font-inter text-base text-gray-900 shadow-sm
              ${errors.email ? 'border-red-400' : 'border-transparent'}
              focus:border-baillearn-yellow focus:outline-none focus:shadow-lg transition-all duration-300`}
          />
          {errors.email && (
            <p className="text-red-300 text-sm font-inter mt-1">{errors.email}</p>
          )}
        </div>

        {/* Error Message */}
        {submitStatus.type && (
          <div className="p-3 rounded-lg bg-red-500/20 border border-red-400 text-red-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.334 18.5c-.77.833-.23 2.5 1.732 2.5z" />
              </svg>
              <span className="font-inter text-sm">{submitStatus.message}</span>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer inline-flex relative overflow-visible rounded-[22.74px] shadow-none"
            whileHover={!isSubmitting ? "hover" : undefined}
            whileTap={!isSubmitting ? { scale: 0.95 } : undefined}
          >
            {/* Button Background with Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-primary rounded-[22.74px]"
              initial={{ opacity: 0, scale: 1, filter: "blur(0px)" }}
              variants={{
                hover: {
                  opacity: 0.3,
                  scale: 1.1,
                  filter: "blur(20px)",
                  transition: { duration: 0.3 }
                }
              }}
            />
            
            {/* Main Button Content */}
            <div className={`relative bg-primary flex flex-row justify-center items-center
                            h-[40px] sm:h-[42px] py-0 px-6 sm:px-7
                            rounded-[45.47px] shadow-none overflow-visible
                            hover:shadow-[0_10px_30px_rgba(255,215,0,0.4)] transition-shadow duration-300
                            ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}>
            
            {/* Button Text */}
            <div className="outline-none flex flex-col justify-center flex-shrink-0
                           text-blue-prime font-inter font-medium text-base sm:text-lg md:text-xl leading-[1.4em] z-20">
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-blue-prime border-t-transparent rounded-full animate-spin"></div>
                  Đang xử lý...
                </div>
              ) : (
                'Tham gia ngay (Miễn phí)'
              )}
            </div>
            
            {/* Decorative Image 1 - Top Right */}
            <motion.div
              className="absolute -top-[8px] -right-[8px] w-[17px] h-[17px] z-30 overflow-visible pointer-events-none"
              initial={{
                opacity: 0,
                scale: 0.2,
                rotate: -30,
                x: 15,
                y: 15
              }}
              variants={{
                hover: {
                  opacity: 1,
                  scale: 1.5,
                  rotate: 10,
                  x: 8,
                  y: -8,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }
                }
              }}
            >
              <Image
                src="/bentocard-float2.png"
                alt=""
                width={17}
                height={17}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </motion.div>
            
            {/* Decorative Image 2 - Top Left */}
            <motion.div
              className="absolute -top-[10px] -left-[10px] w-[20px] h-[20px] z-30 overflow-visible pointer-events-none"
              initial={{
                opacity: 0,
                scale: 0.2,
                rotate: 15,
                x: 20,
                y: 20
              }}
              variants={{
                hover: {
                  opacity: 1,
                  scale: 1.4,
                  rotate: -15,
                  x: -10,
                  y: -10,
                  transition: {
                    duration: 0.5,
                    delay: 0.05,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }
                }
              }}
            >
              <Image
                src="/bentocard-float4.png"
                alt=""
                width={20}
                height={20}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </motion.div>
            
            {/* Decorative Image 3 - Bottom Right */}
            <motion.div
              className="absolute -bottom-[5px] right-[25px] w-[14px] h-[14px] z-30 overflow-visible pointer-events-none"
              initial={{
                opacity: 0,
                scale: 0.2,
                rotate: -4,
                x: -10,
                y: -10
              }}
              variants={{
                hover: {
                  opacity: 1,
                  scale: 1.6,
                  rotate: 20,
                  x: 18,
                  y: 10,
                  transition: {
                    duration: 0.5,
                    delay: 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }
                }
              }}
            >
              <Image
                src="/bentocard-float1.png"
                alt=""
                width={14}
                height={14}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </motion.div>
            
            {/* Shine Effect on Hover */}
            <motion.div
              className="absolute inset-0 rounded-[45.47px] overflow-hidden pointer-events-none"
              initial={{ opacity: 0 }}
              variants={{
                hover: {
                  opacity: 1,
                  transition: { duration: 0.3 }
                }
              }}
            >
              <motion.div
                className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                initial={{ x: "-100%" }}
                variants={{
                  hover: {
                    x: "200%",
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }
                }}
              />
            </motion.div>
            </div>
          </motion.button>
        </div>
      </form>
    </div>
  );
}
