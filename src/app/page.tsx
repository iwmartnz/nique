import Logo from '@/components/Logo';
import Heading from '@/components/Heading';

export default function Home() {
    return (
        <main className="relative top-0 flex min-h-screen w-full flex-col items-center bg-[url('/images/restaurant/home.webp')] bg-cover bg-center">
            <Logo />
            <Heading variant='h1' className='animate-fade-down pt-60'>
                The pure taste of
            </Heading>
            <Heading
                variant='h2'
                className='animate-fade-up text-6xl sm:text-8xl md:text-9xl lg:text-[160px]'
            >
                Thailand
            </Heading>
            <p className='text-brand-gray-dark max-w-md px-4 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
            </p>
        </main>
    );
}
