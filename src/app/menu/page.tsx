import Link from 'next/link';
import Image from 'next/image';
import Heading from '@src/components/heading';
import Logo from '@src/components/logo';
import Dish from '@src/components/dish';
import bg from '@public/images/pages/menu.webp';
import { menu } from '@src/app/data';

export default function MenuPage() {
  return (
    <main className='flex max-h-screen flex-col lg:flex-row'>
      <div className='relative flex min-h-[400px] flex-col items-center justify-center lg:min-h-screen lg:w-3/6'>
        <Logo className='absolute top-12 pt-0' />
        <Heading variant='h1'>Check Out</Heading>
        <Heading variant='h2'>Our Menus</Heading>
        <Image
          src={bg}
          alt=''
          priority
          className='absolute -z-10 h-full w-full object-cover object-bottom'
        />
      </div>
      <div className='lg:w-3/6 lg:overflow-y-scroll'>
        <nav className='from-brand-black via-brand-black to-brand-black/0 sticky top-0 z-50 flex w-full items-center justify-center gap-4 bg-gradient-to-b pb-16 pt-8 lg:pb-16'>
          {menu.map((item) => (
            <Link key={item.id} href={`#${item.slug}`}>
              {item.category}
            </Link>
          ))}
        </nav>
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
