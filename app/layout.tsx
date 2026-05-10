import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GRIDLINE | HT & LT Line Materials Infrastructure",
  description:
    "GRIDLINE supplies HT & LT line materials including insulators, conductors, cables, fittings, and fabrications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <body
        className={` ${inter.className} ${inter.variable} ${spaceGrotesk.variable} ${spaceGrotesk.className} antialiased min-h-full flex flex-col bg-white text-[#14213D] selection:bg-[#FCA3114D] selection:text-[#14213D]`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
