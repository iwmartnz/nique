import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'brand-black': '#050505',
                'brand-accent': '#face8d',
                'brand-gray-dark': '#8b8b8b',
                'brand-gray-light': '#f1f1f1',
                'brand-white': '#FFFFFF',
            },
        },
    },
    plugins: [],
};
export default config;
