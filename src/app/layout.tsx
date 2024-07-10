import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const chillax = localFont({
    src: '../assets/fonts/Chillax-Variable.woff2',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Nique Restaurant',
    description: 'The pure taste of Thailand',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${chillax.className} bg-brand-black text-brand-white`}
            >
                {children}
            </body>
        </html>
    );
}
