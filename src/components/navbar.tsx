'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@src/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@src/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@src/components/ui/tooltip';
import { Button } from './ui/button';
import { useState } from 'react';
import { ArrowRight, Clock, Menu } from 'lucide-react';
import { hoursOfOperation, routes } from '@src/app/data';

export default function Navbar() {
  const activePath = usePathname();
  return (
    <header className='pointer-events-none fixed bottom-6 z-50 w-full'>
      <nav className='bg-brand-white/80 text-brand-black pointer-events-auto mx-auto flex w-fit items-center rounded-full p-2 backdrop-blur-sm md:gap-0'>
        <MobileMenu />
        <HoursTooltip />
        <ul className='hidden md:flex'>
          <li>
            <Link
              href='/menu'
              className={cn(
                'flex items-center rounded-full px-4 py-3 text-sm font-medium',
                activePath == '/menu' && 'bg-brand-gray-light shadow-sm'
              )}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href='/restaurant'
              className={cn(
                'flex items-center rounded-full px-4 py-3 text-sm font-medium',
                activePath == '/restaurant' && 'bg-brand-gray-light shadow-sm'
              )}
            >
              Restaurant
            </Link>
          </li>
          <li>
            <Link
              href='/classes'
              className={cn(
                'flex items-center rounded-full px-4 py-3 text-sm font-medium',
                activePath == '/classes' && 'bg-brand-gray-light shadow-sm'
              )}
            >
              Classes
            </Link>
          </li>
        </ul>

        <Link
          href='/booking'
          className='bg-brand-black text-brand-white flex items-center rounded-full px-4 py-3 text-sm'
        >
          BOOK A TABLE
        </Link>
      </nav>
    </header>
  );
}

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='rounded-full'>
          <Menu size={20} strokeWidth={3} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='z-50 mb-2 rounded-xl'>
        <DropdownMenuLabel>Pages</DropdownMenuLabel>
        {routes.map((route) => (
          <div key={route.id}>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                href={route.path}
                key={route.id}
                className='flex w-full items-center justify-between gap-4 font-medium'
              >
                {route.label} <ArrowRight size='16' />
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
            className='hover:bg-brand-gray-light rounded-full'
          >
            <Clock size={20} strokeWidth={3} />
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
                <span className='font-light'>{item.schedule}</span>
              </li>
            ))}
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
