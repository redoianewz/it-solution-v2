import { FooterSectionProps } from '@/src/layout/footer/v2';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  socialLinks: [
    {
      icon: <FaFacebookF />,
      href: 'https://web.facebook.com/redouane.redouaneouaaziz',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/in/redoine-ouaaziz-16251b254/',
    },
    {
      icon: <FaTwitter />,
      href: 'https://twitter.com/',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/ouaazizredouane978/',
    },
  ],
  columnOne: {
    title: 'Quick Links',
    links: [
      {
        label: 'Home',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'About us',
        href: '/about',
        openNewTab: false,
      },
      {
        label: 'Services',
        href: '/services',
        openNewTab: false,
      },
      {
        label: 'Portfolio',
        href: '/portfolio',
        openNewTab: false,
      },
      {
        label: 'Blog',
        href: '/blog',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Service Links',
    links: [
      {
        label: 'Cloud services',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Backup solutions',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Network security',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Monitoring',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'IT Consulting',
        href: '/',
        openNewTab: false,
      },
    ],
  },

  columnThree: {
    title: 'Recent Blog',
    blogs: [
      {
        image: {
          src: '/assets/images/blog/blog-sm-1.webp',
          alt: 'We provide a range of IT solutions',
        },
        title: 'We provide a range of IT solutions',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.webp',
          alt: 'IT solutions enhance efficiency',
        },
        title: 'IT solutions enhance efficiency',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
    ],
  },
  columnFour: {
    title: 'Contact Us',
    phoneNumber: '+212721714283',
    mail: 'ouaazizredouane978@gmail.com',
    location: 'DERB KOREA RUE 50 NR 30 CASABLANCA',
  },
  footerBottom: {
    copyrightText: '© Yoursitename  2024 | All Rights Reserved',
    version : 'v1.0.2',
    links: [
      {
        label: 'Trams & Condition',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Contact Us',
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
