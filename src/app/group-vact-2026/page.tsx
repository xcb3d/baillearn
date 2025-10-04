import type { Metadata } from 'next';
import VactGroupLanding from './components/VactGroupLanding';

export const metadata: Metadata = {
  title: 'Tham Gia Group Kín V-ACT 2026 | BaiLearn',
  description: 'Tham gia group kín dành cho sĩ tử 2k8 mong muốn chinh phục kỳ thi ĐGNL HCM (V-ACT) 2026. Nhận tài liệu livestream và quà tặng độc quyền',
  keywords: 'V-ACT 2026, ĐGNL HCM, group học tập, livestream, tài liệu học tập, 2k8',
  openGraph: {
    title: 'Tham Gia Group Kín V-ACT 2026',
    description: 'ALL IN ONE - Toàn bộ tài liệu livestream và quà tặng độc quyền cho thành viên',
    type: 'website',
    locale: 'vi_VN',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VactGroupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-prime via-blue-prime/80 to-blue-prime/60">
      <VactGroupLanding />
    </main>
  );
}
