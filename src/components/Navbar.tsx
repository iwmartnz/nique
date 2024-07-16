'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { hoursOfOperation, routes } from '@/app/data';
import { cn } from '@/lib/utils';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from './ui/button';
import { ArrowRightIcon, ClockIcon, MenuIcon } from './Icon';
import { useState } from 'react';

export default function Navbar() {
    const activePath = usePathname();
    return (
        <header className='pointer-events-none fixed bottom-6 z-50 w-full'>
            <nav className='pointer-events-auto mx-auto flex w-fit items-center gap-2 rounded-full bg-brand-white/80 p-2 text-brand-black backdrop-blur-sm md:gap-0'>
                <HoursTooltip />
                <MobileNav />

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

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger className='md:hidden' asChild>
                <Button variant='ghost' size='icon' className='rounded-xl'>
                    <MenuIcon size='20' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='z-50 mb-2 rounded-xl'>
                <DropdownMenuLabel>Pages</DropdownMenuLabel>
                {routes.map((route) => (
                    <div key={route.id}>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link
                                href={route.path}
                                key={route.id}
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                className='flex w-full items-center justify-between gap-4 font-medium'
                            >
                                {route.label} <ArrowRightIcon size='16' />
                            </Link>
                        </DropdownMenuItem>
                    </div>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

const HoursTooltip = () => {
    return (
        <TooltipProvider delayDuration={5}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant='ghost'
                        size='icon'
                        className='rounded-full hover:bg-brand-gray-light'
                    >
                        <ClockIcon size='20' />
                    </Button>
                </TooltipTrigger>
                <TooltipContent className='mb-2 rounded-xl p-3'>
                    <h3 className='pb-3 text-xl font-medium'>Opening Hours</h3>
                    <ul className='flex flex-col gap-2'>
                        {hoursOfOperation.map((item) => (
                            <li
                                key={item.day}
                                className='flex w-full items-center justify-between gap-12 text-base font-medium'
                            >
                                {item.day}
                                <span className='font-light'>
                                    {item.schedule}
                                </span>
                            </li>
                        ))}
                    </ul>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
