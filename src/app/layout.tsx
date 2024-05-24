import type { Metadata, Viewport } from 'next';
import { roboto } from '@/fsd/app/fonts/fonts';
import { oswald } from '@/fsd/app/fonts/fonts';
import { ThemeProvider } from 'next-themes';
import Header from '@/fsd/widgets/Header/Header';
import BreadCrumbs from '@/fsd/shared/ui/BreadCrumbs/BreadCrumbs';

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
          <div className="container mx-auto px-3 pb-7">
            <BreadCrumbs />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
