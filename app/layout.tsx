import type { Metadata } from 'next';
import { Crimson_Pro, Inter, Spectral } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const crimsonPro = Crimson_Pro({ subsets: ['latin'], weight: '500' });

export const metadata: Metadata = {
  title: 'Defending Faith',
  description: 'Website that makes you feel safe and secure in your faith journey',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={crimsonPro.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
