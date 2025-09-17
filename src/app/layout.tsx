import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";

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
      <head>
        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://framerusercontent.com" crossOrigin="anonymous" />
        
        {/* Roboto Flex Variable preloads */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/robotoflex/v30/NaPccZLOBv5T3oB7Cb4i0zu6RME.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/robotoflex/v30/NaPccZLOBv5T3oB7Cb4i0zu1RMH-CQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Inter fonts preloads */}
        <link
          rel="preload"
          href="https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} box-border m-0 p-0 antialiased font-inter text-sm`}
      >
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
