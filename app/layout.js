import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hardware Hub - Quality Tools & Equipment',
  description: 'Your trusted source for professional-grade hardware tools and equipment. Shop power tools, hand tools, and storage solutions.',
  keywords: 'hardware store, power tools, hand tools, tool storage, professional tools',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
