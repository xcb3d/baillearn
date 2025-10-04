import type { Metadata } from 'next';
import ThankYouPage from './components/ThankYouPage';

export const metadata: Metadata = {
  title: 'Cảm ơn bạn đã tham gia! | BaiLearn',
  description: 'Cảm ơn bạn đã đăng ký. Vui lòng kiểm tra email và tham gia group để nhận tài liệu.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPageRoute() {
  return <ThankYouPage />;
}
