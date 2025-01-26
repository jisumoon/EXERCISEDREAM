import type { Metadata } from "next";
import { Noto_Sans_KR, Onest } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../styles/globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--notoSansKr",
  preload: false,
});

const onest = Onest({
  variable: "--onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "운동드림",
  description: "수백만 명의 건강을 책임질 플랫폼, 지금 시작합니다!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="ko">
        <body
          className={`${notoSansKr.variable} ${onest.variable} font-mainfont antialiased px-5`}
        >
          <header>
            <Header />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </AuthProvider>
  );
}
