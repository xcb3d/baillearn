'use client';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
        <div className="bg-gradient-to-br from-blue-prime/90 to-blue-prime/80 backdrop-blur-xl border border-baillearn-yellow/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-up">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-baillearn-yellow mb-4">Cảm ơn bạn</h2>

            <div className="text-left space-y-4 text-white/90">
              <p>Bạn sẽ sớm nhận được email với tiêu đề là:</p>
              <p className="font-bold text-baillearn-yellow bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-baillearn-yellow/30">
                &ldquo;QUAN TRỌNG: Xác minh email của bạn&rdquo;
              </p>

              <p>Bạn bắt buộc phải mở email đó và bấm <span className="font-bold text-baillearn-yellow">&ldquo;Xác minh email ngay&rdquo;</span> để nhận thông báo chuỗi livestream miễn phí từ bọn mình.</p>

              <p>Mình sẽ chỉ liên hệ qua email bạn đã dùng để đăng ký nên hãy kiểm tra inbox nhé.</p>

              <p>Nếu bạn không thấy email thì hãy kiểm tra kỹ hòm thư <span className="font-bold text-baillearn-yellow">SPAM & QUẢNG CÁO</span>.</p>

              <p>Nếu bạn không nhận được mail confirm trong vòng 10 phút, hoặc có bất kỳ câu hỏi nào cho bọn mình...</p>

              <p>Hãy liên hệ bọn mình tại địa chỉ mail: <span className="font-bold text-baillearn-yellow">bai.learner@bailearn.vn</span></p>

              <p className="font-bold text-white">Cảm ơn bạn rất nhiều!</p>
            </div>

            <button
              onClick={onClose}
              className="mt-6 bg-baillearn-yellow text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
