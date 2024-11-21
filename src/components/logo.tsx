import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { cn } from '@src/lib/utils';
import logo from '@public/logo.svg';

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <div className={cn('fixed inset-x-0 mx-auto max-w-max pt-12', className)}>
      <Link href='/' className='animate-fade'>
        <Image src={logo} alt='Nique Restaurant' width={100} height={30} />
      </Link>
    </div>
  );
}
