import type { Metadata } from 'next';
import CopywritingEbookLanding from './components/CopywritingEbookLanding';

export const metadata: Metadata = {
  title: 'Bộ Đề Thực Chiến ĐGNL HCM 2026 - Miễn Phí | BaiLearn',
  description: 'Bộ đề thực chiến ĐGNL HCM 2026 chuẩn form có đáp án chi tiết. Được biên soạn bởi những thủ khoa top đầu – không sợ ôn thiếu, sót kiến thức',
  keywords: 'ĐGNL HCM 2026, đề thi thực chiến, ôn thi đại học, bộ đề miễn phí, thủ khoa',
  openGraph: {
    title: 'Bộ Đề Thực Chiến ĐGNL HCM 2026 - Miễn Phí',
    description: '5 đề thực chiến chuẩn form, lời giải chi tiết, được biên soạn bởi thủ khoa top đầu',
    type: 'website',
    locale: 'vi_VN',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CopywritingEbookPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-prime via-blue-prime/80 to-blue-prime/60">
      <CopywritingEbookLanding />
    </main>
  );
}
