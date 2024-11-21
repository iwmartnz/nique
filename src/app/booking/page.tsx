import Image from 'next/image';
import Heading from '@src/components/heading';
import Logo from '@src/components/logo';
import BookingForm from '@src/components/forms/booking';
import bg from '@public/images/pages/booking.webp';

export default function BookingPage() {
  return (
    <main className='flex max-h-screen flex-col lg:flex-row'>
      <div className='relative flex min-h-[400px] flex-col items-center justify-center lg:min-h-screen lg:w-3/6'>
        <Logo className='absolute top-12 pt-0' />
        <Heading variant='h1' className=''>
          Book a table
        </Heading>
        <Heading variant='h2'>Reservation</Heading>
        <Image
          src={bg}
          alt=''
          priority
          className='absolute -z-10 h-full w-full object-cover'
        />
      </div>
      <div className='p-4 pb-20 md:px-12 md:py-20 lg:w-3/6 lg:overflow-y-scroll'>
        <Heading
          variant='h2'
          className='pb-4 pt-4 text-2xl md:text-3xl lg:text-4xl'
        >
          Book a table
        </Heading>
        <p className='text-brand-gray-dark pb-4 text-lg'>
          Volutpat maecenas volutpat blandit aliquam etiam erat velit
          scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla
          facilisi cras fermentum odio eu.
        </p>
        <BookingForm />
      </div>
    </main>
  );
}
