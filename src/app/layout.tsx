import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const font = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: "Pokédex",
  description:
    "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-100 text-black">
      <body className={`${font.className} h-full `}>
        <Navigation />
        <main className="-mt-32">
          <div className="mx-auto max-w-7xl pb-4 sm:pb-6 sm:px-6">
            <div className="rounded-lg bg-white sm:pb-4 shadow sm:px-6">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
