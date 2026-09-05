import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/lib/auth/authContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CASEFILE | Online Detective & Mystery Solving Platform',
  description:
    'Every clue matters. Examine physical evidence, forensic documents, digital communications, suspect dossiers, and timelines in interactive, logically consistent investigations.',
  keywords: [
    'detective game',
    'mystery game',
    'case file',
    'forensics',
    'deduction game',
    'crime mysteries',
    'logic puzzles',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-detective-950 text-neutral-200 antialiased">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
