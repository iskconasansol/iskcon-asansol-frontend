import type { Metadata } from 'next';
import { Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import MobileNav from '@/components/mobile_menu';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';
import paytmConfig from './api/paytmConfig';

const noto_sans_bengali = Noto_Sans_Bengali({
  subsets: ['bengali', 'latin'],
  weight: 'variable',
});

export const metadata: Metadata = {
  title: 'Iskcon Asansol',
  description: 'Iskcon Asansol',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={noto_sans_bengali.className}>
        <Navbar />
        {children}
        <Footer />
        <MobileNav />
        <Toaster />

        <Script
          type="application/javascript"
          crossOrigin="anonymous"
          src={`https://${paytmConfig.ENV}/merchantpgpui/checkoutjs/merchants/${paytmConfig.MID}.js`}
        ></Script>
      </body>
    </html>
  );
}
