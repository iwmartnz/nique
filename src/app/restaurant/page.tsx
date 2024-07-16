import Heading from '@/components/Heading';
import Logo from '@/components/Logo';
import { restaurantImages } from '@/app/data';

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

            <ul className='relative flex min-h-screen w-screen flex-col sm:flex-row sm:overflow-x-scroll'>
                {restaurantImages.map((image) => (
                    <li className='relative h-screen w-screen sm:min-w-max'>
                        <img
                            key={image.id}
                            src={image.src}
                            alt=''
                            className='h-screen object-cover sm:object-none'
                        />
                    </li>
                ))}
            </ul>
        </main>
    );
}
