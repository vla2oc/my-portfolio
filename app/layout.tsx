import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/providers/SmoothScroll";
import HeaderSection from "./components/section/HeaderSection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vladyslav Kurochka — Frontend Engineer",
  description:
    "Frontend Engineer specializing in React & TypeScript. Production experience with B2B platforms and interactive web apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <meta
        name="google-site-verification"
        content="avNQtDDmmyXulsxR1kXGLXBrtMnpkfwA0TWrzxvdVBM"
      />
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <HeaderSection />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
