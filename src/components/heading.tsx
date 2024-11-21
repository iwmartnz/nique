import React from 'react';
import localFont from 'next/font/local';
import { cn } from '@src/lib/utils';

const bitterRoseFont = localFont({
  src: '../../public/fonts/Bitter-Rose.woff2',
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  className?: string;
  variant: 'h1' | 'h2';
};

export default function Heading({ children, variant, className }: Props) {
  return variant === 'h1' ? (
    <h1
      className={cn(
        bitterRoseFont.className,
        'animate-fade-down text-brand-accent text-5xl md:text-6xl lg:text-[80px]',
        className
      )}
    >
      {children}
    </h1>
  ) : (
    <h2
      className={cn(
        'animate-fade-up text-5xl font-medium md:text-6xl lg:text-7xl',
        className
      )}
    >
      {children}
    </h2>
  );
}
