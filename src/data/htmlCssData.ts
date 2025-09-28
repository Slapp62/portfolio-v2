import { techStacks } from './javascriptData';

// projectData.js
export const htmlDescription = {
  title: 'HTML & CSS Projects',
  description:
    'A collection of projects built using HTML, CSS, SASS, and Bootstrap.',
  tech: techStacks.html_css,
};

export const htmlProjects = [
  {
    id: 'consulting',
    title: 'Consulting Firm Contact Page',
    description:
      'A funky contact page for a consulting firm.',
    image: './htmlcss-images/handshake.jpg',
    imageAlt: 'handshake',
    link: '/projects/HTML_CSS Projects/Consulting_Project/index.html',
    tech: ['HTML', 'CSS', 'SASS', 'Bootstrap']
  }, 
  {
    id: 'coding',
    title: 'Coding Course Sign Up',
    description:
      'A sign up for a coding course with a bright and abstract design.',
    image: './htmlcss-images/coding_background.jpg',
    imageAlt: 'programming code',
    link: '/projects/HTML_CSS Projects/Coding_Project/index.html',
    tech: ['HTML', 'CSS', 'SASS']
  },
  {
    id: 'giftcard',
    title: 'Gift Card Sign Up Page',
    description: 'A summery and young sign up page.',
    image: './htmlcss-images/mall.jpg',
    imageAlt: 'shopping mall',
    link: '/projects/HTML_CSS Projects/Giftcard_Project/index.html',
    tech: ['HTML', 'CSS', 'SASS']
  },
  {
    id: 'delivery',
    title: 'Delivery Company Homepage',
    description: 'A funky and retro delivery service.',
    image: './htmlcss-images/package.jpg',
    imageAlt: 'delivery truck',
    link: '/projects/HTML_CSS Projects/Delivery_Project/index.html',
    tech: ['HTML', 'CSS', 'Bootstrap']
  },
  {
    id: 'crypto',
    title: 'Cryptocurrency Exchange',
    description:
      'Cryptocurrency exchange homepage modeled after the Coinbase website.',
    image: './htmlcss-images/btc.jpg',
    imageAlt: 'bitcoin logo',
    link: '/projects/HTML_CSS Projects/Crypto_Project/index.html',
    tech: ['HTML', 'CSS', 'Bootstrap']
  },
  // {
  //   id: 'coffee',
  //   title: 'Coffee Coupon Sign Up',
  //   description:
  //     'A clean and beautiful sign up to receive a coupon for a free coffee.',
  //   image: './htmlcss-images/Coffee.png',
  //   imageAlt: 'coffee mug',
  //   link: '/projects/HTML_CSS Projects/Coffee_Project/index.html',
  //   tech: ['HTML', 'CSS']
  // },
  // {
  //   id: 'travel',
  //   title: 'Travel Agency Contact Page',
  //   description: 'Beautiful and elegant landing page for a travel agency.',
  //   image: './htmlcss-images/Rectangle 506-1.png',
  //   imageAlt: 'forest',
  //   link: '/projects/HTML_CSS Projects/Travel_Project/index.html',
  //   tech: ['HTML', 'CSS']
  // },
  // {
  //   id: 'basketball',
  //   title: 'Basketball League Login Page',
  //   description:
  //     'A youthful and fun login page for a summer basketball league.',
  //   image: './htmlcss-images/basketball.jpg',
  //   imageAlt: 'basketball hoop',
  //   link: '/projects/HTML_CSS Projects/Basketball_Project/index.html',
  //   tech: ['HTML', 'CSS']
  // },
  // {
  //   id: 'zoo',
  //   title: 'Zoo Newsletter',
  //   description: 'An interesting and outdoorsy newsletter sign up for a zoo.',
  //   image: './htmlcss-images/tiger.jpg',
  //   imageAlt: 'tiger',
  //   link: '/projects/HTML_CSS Projects/Zoo_Project/index.html',
  //   tech: ['HTML', 'CSS']  
  // },
];
