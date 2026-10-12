import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Akasha Bin Ali — Portfolio | Full-Stack, AI & IoT Developer",
  description:
    "Portofolio Akasha Bin Ali: Proyek Web Full-Stack (Next.js, React, Laravel), Integrasi AI & Computer Vision, serta Implementasi AIoT Cerdas.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
