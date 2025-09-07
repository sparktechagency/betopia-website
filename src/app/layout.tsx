import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "antd/dist/reset.css";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const metadata: Metadata = {
  title: "Betopia Limited"
};

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <div>
          <Navbar />
          <AntdRegistry>{children}</AntdRegistry>
        </div>

        <Footer />
      </body>
    </html>
  );
}
