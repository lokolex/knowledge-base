import type { Metadata, Viewport } from 'next';
import { roboto } from '@/fsd/app/fonts/fonts';
import { oswald } from '@/fsd/app/fonts/fonts';
import { ThemeProvider } from 'next-themes';
import Header from '@/fsd/widgets/Header/Header';

import '@/fsd/app/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'База Ф',
  description: 'Фронтенд - база знаний',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${roboto.variable} ${oswald.variable}`}>
      <body>
        <ThemeProvider enableSystem={false} disableTransitionOnChange defaultTheme="dark">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
