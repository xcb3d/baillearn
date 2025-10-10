'use client';

export default function EbookFooter() {
  return (
    <footer className="px-6 py-8 border-t border-white/20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl font-bold text-white mb-4 font-roboto-flex">
          <span className="text-baillearn-yellow">Bai</span>Learn
        </div>
        <div className="flex flex-col items-center gap-2 text-white/60 text-sm font-inter">
          <p>📞 0932 755 465 | ✉️ bailearn.edu@gmail.com</p>
          <p>🏢 Phạm Hữu Lầu, xã Nhà Bè, TP HCM | 📄 MST: 8945840951-001</p>
        </div>
      </div>
    </footer>
  );
}
