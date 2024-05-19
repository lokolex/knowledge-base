import { Oswald, Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['cyrillic'],
  variable: '--font-roboto',
});

export const oswald = Oswald({
  subsets: ['cyrillic'],
  variable: '--font-oswald',
});
