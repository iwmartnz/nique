import Image from 'next/image';
import Logo from '@src/components/logo';
import HorizontalScroll from '@src/components/horizontal-scroll';
import Heading from '@src/components/heading';
import { restaurantImages } from '@src/app/data';

export default function RestaurantPage() {
  return (
    <main className='relative min-h-screen w-full'>
      <Logo className='z-50' />
      <div className='pointer-events-none fixed z-50 flex h-full w-full flex-col items-center justify-center'>
        <Heading variant='h1' className='animate-fade-down'>
          Discover
        </Heading>
        <Heading
          variant='h2'
          className='animate-fade-up text-8xl sm:text-8xl md:text-8xl lg:text-9xl'
        >
          nique.
        </Heading>
      </div>
      <div className='relative flex min-h-screen w-screen flex-col md:hidden pointer-events-none'>
        {restaurantImages.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt=''
            className='h-max w-screen object-contain'
          />
        ))}
      </div>
      <HorizontalScroll className='hidden h-screen min-w-[100%] overflow-x-scroll md:flex'>
        {restaurantImages.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt=''
            className='h-screen min-w-[50%] object-cover object-bottom pointer-events-none'
          />
        ))}
      </HorizontalScroll>
    </main>
  );
}
