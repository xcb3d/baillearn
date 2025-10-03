'use client';

import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

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
    type: 'success' | 'error' | null;
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

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/30 shadow-2xl">
      <h3 className="text-white text-lg font-bold mb-2 text-center">Nhận Bộ Đề Ngay!</h3>
      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Name Input */}
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Tên của bạn"
            className={`w-full px-3 py-2 rounded-lg bg-white/95 border-2 font-inter text-gray-900 shadow-sm
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
            className={`w-full px-3 py-2 rounded-lg bg-white/95 border-2 font-inter text-gray-900 shadow-sm
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
          className={`w-full py-2 px-4 rounded-lg font-bold font-inter text-sm transition-all duration-300 transform hover:scale-105 shadow-lg
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
            'NHẬN BỘ ĐỀ THỰC CHIẾN – ĐGNL HCM 2026 MIỄN PHÍ'
          )}
        </button>
      </form>
    </div>
  );
}
