import Heading from '@/components/Heading';
import Logo from '@/components/Logo';
import Menubar from '@/components/Menubar';
import Dish from '@/components/Dish';
import { menu } from '@/app/data';

export default function MenuPage() {
    return (
        <main className='flex max-h-screen flex-col lg:flex-row'>
            <div className="relative flex min-h-[400px] flex-col items-center justify-center bg-[url('/images/restaurant/menu.webp')] bg-cover bg-bottom lg:min-h-screen lg:w-3/6">
                <Logo className='absolute top-12 pt-0' />
                <Heading variant='h1' className=''>
                    Check Out
                </Heading>
                <Heading variant='h2'>Our Menus</Heading>
            </div>
            <div className='lg:w-3/6 lg:overflow-y-scroll'>
                <Menubar className='via-brand-black from-brand-black to-brand-black/0 sticky top-0 z-50 w-full justify-center bg-gradient-to-b pb-16 pt-8 lg:pb-16' />
                {menu.map((section) => (
                    <div
                        key={section.id}
                        id={section.category.toLowerCase()}
                        className='scroll-mt-20 pb-20 pl-4 last:pb-40 md:pl-12'
                    >
                        <Heading variant='h1' className='animate-fade py-8'>
                            {section.category}
                        </Heading>
                        <ul className='flex flex-col gap-4'>
                            {section.list.map((dish) => (
                                <Dish key={dish.id} dish={dish} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    );
}
