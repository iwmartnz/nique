import ContactForm from '@/components/ContactForm';
import Heading from '@/components/Heading';
import Logo from '@/components/Logo';

export default function ContactPage() {
    return (
        <main className='flex max-h-screen flex-col lg:flex-row'>
            <div className="relative flex min-h-[400px] flex-col items-center justify-center bg-[url('/images/restaurant/contact.webp')] bg-cover bg-center lg:min-h-screen lg:w-3/6 lg:bg-top">
                <Logo className='absolute top-12 pt-0' />
                <Heading variant='h1' className=''>
                    Contact
                </Heading>
                <Heading variant='h2'>Get in Touch</Heading>
            </div>
            <div className='p-6 pb-20 md:px-12 md:py-20 lg:w-3/6 lg:overflow-y-scroll'>
                <p className='pb-10 text-xl text-brand-gray-dark'>
                    Volutpat maecenas volutpat blandit aliquam etiam erat velit
                    scelerisque. Arcu non odio euismod lacinia. Tortor aliquam
                    nulla facilisi cras fermentum odio eu.
                </p>
                <ContactForm />
            </div>
        </main>
    );
}
