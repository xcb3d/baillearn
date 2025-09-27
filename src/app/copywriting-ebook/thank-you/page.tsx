import type { Metadata } from 'next';
import ThankYouPage from './components/ThankYouPage';

export const metadata: Metadata = {
  title: 'Cảm ơn bạn! Kiểm tra email để nhận ebook | BaiLearn',
  description: 'Cảm ơn bạn đã đăng ký. Vui lòng kiểm tra email để nhận ebook Lộ Trình Copywriting 2025 miễn phí.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPageRoute() {
  return <ThankYouPage />;
}