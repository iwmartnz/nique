import Image from 'next/image';
import Logo from '@/components/Logo';
import Heading from '@/components/Heading';
import { classes } from '@/app/data';

export default function ClassesPage() {
    return (
        <main className=''>
            <Logo className='fixed inset-x-0 top-8 mx-auto max-w-max' />
            <ul className='overscroll-contain scroll-smooth lg:flex lg:overflow-x-scroll'>
                {classes.map((classItem) => (
                    <li
                        key={classItem.id}
                        className='relative flex min-h-screen w-full flex-col items-center justify-center text-center lg:min-w-[560px]'
                    >
                        <Heading variant='h1' className=''>
                            {classItem.name}
                        </Heading>
                        <Heading variant='h2' className='whitespace-pre-wrap'>
                            {classItem.category.replace(' ', '\n')}
                        </Heading>
                        <p className='text-brand-white/50'>{classItem.date}</p>
                        <Image
                            src={classItem.image}
                            alt=''
                            fill
                            className='absolute -z-10 h-full w-full object-cover'
                        />
                    </li>
                ))}
            </ul>
        </main>
    );
}
