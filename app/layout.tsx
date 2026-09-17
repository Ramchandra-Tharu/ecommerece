import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Yashu - Beauty Parlour & Aesthetic Care",
  description: "Beauty parlour & aesthetic clinic website for skincare, bridal makeup, hair care, and aesthetic treatments.",
  openGraph: {
    title: "Yashu - Beauty Parlour & Aesthetic Care",
    description: "Subtle treatments. Natural results. Timeless beauty care tailored to your goals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${instrumentSerif.variable} ${instrumentSans.variable} font-sans antialiased text-[#2D1F17] bg-[#FAF6F3] selection:bg-[#EBD5C8] selection:text-[#522714]`}
      >
        {children}
      </body>
    </html>
  );
}
