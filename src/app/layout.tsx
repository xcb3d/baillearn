import type { Metadata } from "next";
import { Roboto_Flex, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin", "vietnamese"],
  weight: "variable", // Use variable font
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BaiLearn - Luyện thi ĐGNL HCM",
  description: "Luyện thi Đánh giá năng lực ĐH Quốc gia TP.HCM - BaiLearn | \"Học để hiểu - Hiểu để sáng tạo\"",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${robotoFlex.variable} ${inter.variable} box-border m-0 p-0 antialiased font-inter text-sm`}
      >
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
