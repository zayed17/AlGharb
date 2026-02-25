import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import { Inter } from 'next/font/google';
import WhatsAppFloat from '../src/components/WhatsAppFloat';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://algharb.ae';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Al Gharb Management Consultants',
    template: '%s | Al Gharb Management Consultants',
  },
  description:
    'Expert consulting in Sharjah, UAE: accounting, tax, auditing assistance, business setup, and more.',
  keywords: [
    'Al Gharb',
    'management consultants',
    'Sharjah',
    'accounting',
    'tax',
    'audit assistance',
    'business setup',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Al Gharb Management Consultants',
    description:
      'Expert consulting in Sharjah, UAE: accounting, tax, auditing assistance, business setup, and more.',
    siteName: 'Al Gharb Management Consultants',
    images: [
      {
        url: '/Algharb.png',
        width: 1200,
        height: 630,
        alt: 'Al Gharb Management Consultants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Gharb Management Consultants',
    description:
      'Expert consulting in Sharjah, UAE: accounting, tax, auditing assistance, business setup, and more.',
    images: ['/Algharb.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <div className="pt-20">{children}</div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
