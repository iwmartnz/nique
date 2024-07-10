import React from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const bitterRoseFont = localFont({
    src: '../assets/fonts/Bitter-Rose.woff2',
    display: 'swap',
});

type HeadingProps = {
    children: React.ReactNode;
    className?: string;
    variant: 'h1' | 'h2';
};

export default function Heading({
    children,
    variant,
    className,
}: HeadingProps) {
    if (variant === 'h1') {
        return (
            <h1
                className={cn(
                    bitterRoseFont.className,
                    'animate-fade-down text-5xl text-brand-accent md:text-6xl lg:text-[80px]',
                    className
                )}
            >
                {children}
            </h1>
        );
    } else if (variant === 'h2') {
        return (
            <h1
                className={cn(
                    'animate-fade-up text-5xl font-medium md:text-6xl lg:text-7xl',
                    className
                )}
            >
                {children}
            </h1>
        );
    }
}
