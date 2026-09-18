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
  title: "Yashu — Salon & Beauty Parlour",
  description: "Yashu is a premier Salon & Beauty Parlour offering professional hair styling, hair care, facials, bridal makeup, mehendi, eyebrow shaping, and skin care.",
  openGraph: {
    title: "Yashu — Salon & Beauty Parlour",
    description: "Full-service salon and beauty parlour offering professional hair styling, skin care, bridal makeup, and beauty rituals.",
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
