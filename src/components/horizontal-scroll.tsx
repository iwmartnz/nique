'use client';

import { useRef, useEffect, PropsWithChildren } from 'react';
import { cn } from '@src/lib/utils';

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function HorizontalScroll({ children, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      };
      container.addEventListener('wheel', handleWheel);
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, []);

  return (
    <div ref={containerRef} className={cn('scrollbar-hide', className)}>
      {children}
    </div>
  );
}
