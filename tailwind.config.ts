import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/fsd/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        BackgroundColor: 'var(--bg-color)',
        TextColor: 'var(--text-color)',
      },
      boxShadow: {
        card: '1px 1px 10px 1px rgba(34, 60, 80, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
