'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { routes } from '@/app/data';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const activePath = usePathname();
    return (
        <header className='pointer-events-none fixed bottom-6 z-50 w-full'>
            <nav className='pointer-events-auto mx-auto flex w-fit items-center gap-2 rounded-full bg-brand-white/80 p-2 text-brand-black backdrop-blur-sm md:gap-0'>
                {/* <MobileNav />
                <HoursTooltip /> */}
                <ul className='hidden md:flex'>
                    {routes.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.path}
                                className={cn(
                                    'flex items-center rounded-full px-4 py-3 text-sm font-medium',
                                    activePath == link.path &&
                                        'bg-brand-gray-light shadow-sm'
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    href='/booking'
                    className='flex items-center rounded-full bg-brand-black px-4 py-3 text-sm text-brand-white'
                >
                    BOOK A TABLE
                </Link>
            </nav>
        </header>
    );
}
