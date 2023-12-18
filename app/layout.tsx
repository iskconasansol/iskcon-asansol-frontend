import type { Metadata } from 'next';
import { Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import MobileNav from '@/components/mobile_menu';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';

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
    <html lang="en">
      <body className={noto_sans_bengali.className}>
        <Navbar />
        {children}
        <Footer />
        <MobileNav />
        <Toaster />
      </body>
    </html>
  );
}
