import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

const font = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Transparse — Electronic Data Interchange",
  description:
    "A Next.js-based parser for Transpas Enterprise EDI files, designed to transform digital transport order formats into a TPE-compatible XML structure. 🚛",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-asphalt text-marking`}>
        {children}
      </body>
    </html>
  );
}
