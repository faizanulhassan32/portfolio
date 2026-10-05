import type { Metadata } from 'next';
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { personalInfo } from '@/lib/data';

const inter = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: `${personalInfo.name} — ${personalInfo.role}`,
  description: personalInfo.summary,
  authors: [{ name: personalInfo.name, url: personalInfo.portfolioUrl }],
  keywords: [
    'AI Full Stack Developer',
    'GenAI',
    'LangGraph',
    'LangChain',
    'RAG Systems',
    'Multi-Agent Architectures',
    'FastAPI',
    'Next.js',
    'Python',
    'Faizan Ul Hassan',
  ],
  openGraph: {
    title: `${personalInfo.name} — ${personalInfo.role}`,
    description: personalInfo.summary,
    type: 'website',
    url: personalInfo.portfolioUrl,
    siteName: `${personalInfo.name} Portfolio`,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper text-ink antialiased selection:bg-ink selection:text-card overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
