import Image from 'next/image';

type Props = {
  dish: {
    id: number;
    name: string;
    regularPrice: string;
    discountedPrice?: string;
    ingredients?: string[];
    image: string;
  };
};

export default function Dish({ dish }: Props) {
  return (
    <li className='flex items-center gap-4'>
      <figure className='relative h-[72px] min-w-20 overflow-hidden rounded-xl'>
        <Image
          src={dish.image}
          alt={dish.name}
          width={90}
          height={72}
          className=''
          priority
        />
      </figure>
      <div>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg'>{dish.name}</h3>
          {dish.discountedPrice ? (
            <p>
              <span className='text-brand-gray-dark line-through'>{`$ ${dish.regularPrice}`}</span>
              {` $ ${dish.discountedPrice}`}
            </p>
          ) : (
            <p>{`$ ${dish.regularPrice}`}</p>
          )}
        </div>
        <ul className='flex basis-0 flex-wrap gap-2'>
          {dish.ingredients?.map((ingredient, i) => (
            <li key={i} className='text-sm text-brand-gray-dark'>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
