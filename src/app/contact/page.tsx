import Image from 'next/image';
import ContactForm from '@src/components/forms/contact';
import Heading from '@src/components/heading';
import Logo from '@src/components/logo';
import bg from '@public/images/pages/contact.webp';

export default function ContactPage() {
  return (
    <main className='flex max-h-screen flex-col lg:flex-row'>
      <div className='relative flex min-h-[400px] flex-col items-center justify-center lg:min-h-screen lg:w-3/6'>
        <Logo className='absolute top-12 pt-0' />
        <Heading variant='h1' className=''>
          Contact
        </Heading>
        <Heading variant='h2'>Get in Touch</Heading>
        <Image
          src={bg}
          alt=''
          priority
          className='absolute -z-10 h-full w-full object-cover lg:object-top'
        />
      </div>
      <div className='p-6 pb-20 md:px-12 md:py-20 lg:w-3/6 lg:overflow-y-scroll'>
        <p className='text-brand-gray-dark pb-10 text-xl'>
          Volutpat maecenas volutpat blandit aliquam etiam erat velit
          scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla
          facilisi cras fermentum odio eu.
        </p>
        <ContactForm />
      </div>
    </main>
  );
}
