import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";  // ✅ import your Navbar
import Footer from "../components/Footer";
const jost = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenHaven",
  description: "A real estate platform for modern homes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>
        {/* ✅ Navbar here */}
        <Navbar />

        {/* ✅ Page content */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
