import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: [
    { path: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: [
    { path: "../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "王昱航 | AI研发 & Agent应用开发",
  description: "浙江大学生物医学工程本科，专注AI编程工具、Agent应用开发与Prompt Engineering的个人主页",
  keywords: ["AI", "Agent", "Prompt Engineering", "Cursor", "Claude Code", "简历", "Portfolio"],
  openGraph: {
    title: "王昱航 | AI研发 & Agent应用开发",
    description: "浙江大学生物医学工程本科，专注AI编程工具、Agent应用开发与Prompt Engineering",
    type: "website",
    url: "https://resume-site-generator.vercel.app",
    siteName: "王昱航个人主页",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
