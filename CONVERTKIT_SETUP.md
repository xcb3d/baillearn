# Hướng dẫn Setup ConvertKit

## Bước 1: Tạo tài khoản ConvertKit
1. Truy cập [ConvertKit.com](https://convertkit.com) và tạo tài khoản
2. Đăng nhập vào dashboard

## Bước 2: Lấy API Key
1. Vào **Settings** > **Advanced** > **API Keys**
2. Copy **API Secret** (không phải API Key)

## Bước 3: Tạo Form
1. Vào **Grow** > **Landing Pages & Forms**
2. Tạo một form mới hoặc sử dụng form có sẵn
3. Lưu ý **Form ID** (có thể tìm trong URL hoặc settings của form)

## Bước 4: Cấu hình Environment Variables
1. Tạo file `.env.local` trong root directory:
```bash
# ConvertKit Configuration
CONVERTKIT_API_KEY=your_api_secret_here
CONVERTKIT_FORM_ID=your_form_id_here
```

2. Thay thế `your_api_secret_here` bằng API Secret từ bước 2
3. Thay thế `your_form_id_here` bằng Form ID từ bước 3

## Bước 5: Restart Development Server
```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

## Bước 6: Test Form
1. Truy cập trang ebook: `http://localhost:3000/copywriting-ebook`
2. Điền form và submit
3. Kiểm tra ConvertKit dashboard để xem subscriber mới

## Tags được tự động thêm
- `DGNL-HCM-2026`: Để phân biệt với các campaign khác
- `Ebook-Download`: Để tracking những người download ebook

## Troubleshooting
- Nếu gặp lỗi "ConvertKit configuration missing": Kiểm tra lại file `.env.local`
- Nếu gặp lỗi "already subscribed": Email đã tồn tại trong ConvertKit, hệ thống sẽ tiếp tục bình thường
- Check console logs để debug chi tiết

## Automation tiếp theo (tùy chọn)
1. Tạo email sequence tự động gửi ebook
2. Setup webhook để sync dữ liệu
3. Tạo tags và segments để target marketing