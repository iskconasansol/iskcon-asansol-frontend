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
  description:
    'Iskcon Project is an initiate of Iskcon Asansol. It is a non-profit organization. It is a project to spread the teachings of Lord Krishna and Srila Prabhupada.',
  metadataBase: new URL('https://iskconasansol.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iskconasansol.com',
    images: [
      {
        url: './images/logo/icon.svg',
        width: 1200,
        height: 630,
        alt: 'Iskcon Project Asansol',
      },
    ],
  },
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
      </body>
    </html>
  );
}
