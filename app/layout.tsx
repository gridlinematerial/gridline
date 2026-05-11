import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "sonner";

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
  title: {
    default: "GridLine | HT & LT Line Materials",
    template: "%s | GridLine",
  },
  description:
    "GridLine supplies premium HT & LT line materials with reliable engineering standards and quality assurance.",
  keywords: [
    "HT line materials",
    "LT line materials",
    "electrical materials",
    "power line products",
    "transmission materials",
    "GridLine",
    "GridLineMaterial",
  ],
  authors: [{ name: "GridLine" }],
  creator: "GridLine",
  metadataBase: new URL("https://gridlinematerial.com"),
  openGraph: {
    title: "GridLine | HT & LT Line Materials",
    description:
      "Premium HT & LT line materials with trusted engineering quality.",
    url: "https://gridlinematerial.com",
    siteName: "GridLine",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
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
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#ffffff",
            color: "#14213d",
            border: "1px solid rgba(20, 33, 61, 0.1)",
          },
          className: "font-grotesk shadow-2xl",
        }}
      />
    </html>
  );
}
