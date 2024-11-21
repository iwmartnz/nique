import bg1 from '@public/images/restaurant/bg-1.webp';
import bg2 from '@public/images/restaurant/bg-2.webp';
import bg3 from '@public/images/restaurant/bg-3.webp';
import bg4 from '@public/images/restaurant/bg-4.webp';
import bg5 from '@public/images/restaurant/bg-5.webp';
import bg6 from '@public/images/restaurant/bg-6.webp';
import bg7 from '@public/images/restaurant/bg-7.webp';

export const menu = [
  {
    id: 1,
    category: 'Starters',
    slug: 'starters',
    list: [
      {
        id: 1,
        name: 'Tomato Toast',
        regularPrice: '29',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/tomatoToast.png',
      },
      {
        id: 2,
        name: 'Noodle Soup',
        regularPrice: '8.00',
        discountedPrice: '5.00',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/noodleSoup.png',
      },
      {
        id: 3,
        name: 'Pumpkin Soup',
        regularPrice: '5.00',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/pumpkinSoup.png',
      },
    ],
  },
  {
    id: 2,
    category: 'Breakfast',
    slug: 'breakfast',
    list: [
      {
        id: 1,
        name: 'Delicious Pancakes',
        regularPrice: '8.00',
        discountedPrice: '5.00',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/deliciousPancakes.png',
      },
      {
        id: 2,
        name: 'Sweet Heaven',
        regularPrice: '5.00',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/sweetHeaven.png',
      },
      {
        id: 3,
        name: 'Oatmeal Spirit',
        regularPrice: '5.00',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/oatmealSpirit.png',
      },
      {
        id: 4,
        name: 'Avocado Smash',
        regularPrice: '5.00',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/avocadoSmash.png',
      },
    ],
  },
  {
    id: 3,
    category: 'Dinner',
    slug: 'dinner',
    list: [
      {
        id: 1,
        name: 'Italian Pizza',
        regularPrice: '5.00',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/italianPizza.png',
      },
      {
        id: 2,
        name: 'Sea Curry',
        regularPrice: '8.00',
        discountedPrice: '5.00',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/seaCurry.png',
      },
      {
        id: 3,
        name: 'Vegan Burger',
        regularPrice: '5.00',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/veganBurger.png',
      },
      {
        id: 4,
        name: 'Noodle Bowl',
        regularPrice: '5.00',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/noodleBowl.png',
      },
    ],
  },
  {
    id: 4,
    category: 'Drinks',
    slug: 'drinks',
    list: [
      {
        id: 1,
        name: 'Panthouse Tonic',
        regularPrice: '5.00',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/panthouseTonic.png',
      },
      {
        id: 2,
        name: 'Apple Breeze',
        regularPrice: '8.00',
        discountedPrice: '5.00',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/appleBreeze.png',
      },
      {
        id: 3,
        name: 'Frenchman Blitz',
        regularPrice: '5.00',
        ingredients: [
          'Tomatillo',
          'Fried Okra',
          'Baja',
          'Crema',
          'Cabbage',
          'Baja',
        ],
        image: '/images/menu/frenchmanBlitz.png',
      },
    ],
  },
];

export const classes = [
  {
    id: 1,
    name: 'Asian',
    category: 'Delicious Breakfast',
    image: '/images/classes/classDeliciousBreakfast.webp',
    date: 'June 16, 2023',
  },
  {
    id: 2,
    name: 'Breakfast',
    category: 'Coffee Time',
    image: '/images/classes/classCoffeeTime.webp',
    date: 'March 17, 2023',
  },
  {
    id: 3,
    name: 'Vegan',
    category: 'Vegan Burger',
    image: '/images/classes/classVeganBurger.webp',
    date: 'January 10, 2023',
  },
  {
    id: 4,
    name: 'Italian',
    category: 'Salad Style',
    image: '/images/classes/classSaladStyle.webp',
    date: 'November 19, 2022',
  },
  {
    id: 5,
    name: 'Italian',
    category: 'Homemade Honey',
    image: '/images/classes/classHomemadeHoney.webp',
    date: 'October 8, 2022',
  },
];

export const restaurantImages = [
  { id: 1, src: bg1 },
  { id: 2, src: bg2 },
  { id: 3, src: bg3 },
  { id: 4, src: bg4 },
  { id: 5, src: bg5 },
  { id: 6, src: bg6 },
  { id: 7, src: bg7 },
];

export const routes = [
  { id: 1, label: 'Menu', path: '/menu' },
  { id: 2, label: 'Restaurant', path: '/restaurant' },
  { id: 3, label: 'Classes', path: '/classes' },
  { id: 4, label: 'Contact', path: '/contact' },
];

export const availableTimes = [
  { value: '1600', label: '4:00 PM', tablesAvailable: 3 },
  { value: '1700', label: '5:00 PM', tablesAvailable: 1 },
  { value: '1800', label: '6:00 PM', tablesAvailable: 2 },
  { value: '1900', label: '7:00 PM', tablesAvailable: 1 },
  { value: '2000', label: '8:00 PM', tablesAvailable: 1 },
  { value: '2100', label: '9:00 PM', tablesAvailable: 2 },
  { value: '2200', label: '10:00 PM', tablesAvailable: 4 },
];

export const hoursOfOperation = [
  { day: 'Monday', schedule: 'Closed' },
  { day: 'Tue - Fri', schedule: '4pm - 8pm' },
  { day: 'Sat - Sun', schedule: '5pm - 11pm' },
];
