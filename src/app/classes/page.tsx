import Image from 'next/image';
import Logo from '@src/components/logo';
import Heading from '@src/components/heading';
import HorizontalScroll from '@src/components/horizontal-scroll';

import { classes } from '@src/app/data';

export default function ClassesPage() {
  return (
    <main className='h-screen w-screen'>
      <Logo className='fixed inset-x-0 top-8 mx-auto max-w-max' />
      <div className='snap-y snap-proximity snap-normal lg:hidden'>
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className='relative flex h-screen w-full snap-start flex-col items-center justify-center text-center'
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
          </div>
        ))}
      </div>

      <HorizontalScroll className='hidden overflow-x-scroll lg:flex'>
        {classes.map((classItem) => (
          <div
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
          </div>
        ))}
      </HorizontalScroll>
    </main>
  );
}
