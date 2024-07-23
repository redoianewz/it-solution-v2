import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'latest portfolio',
    title: 'Where Innovation Meets IT Excellence',
  },
  isWave: true,
  works: [
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/1.webp',
        alt: 'portfolio-1',
      },
      title: 'Cloud Migrate Pro',
      description: 'Lorem Ipsum is simply dummy',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/2.webp',
        alt: 'portfolio-1',
      },
      title: 'Cloud Migrate Pro',
      description: 'Lorem Ipsum is simply dummy',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/3.webp',
        alt: 'portfolio-1',
      },
      title: 'Cloud Migrate Pro',
      description: 'Lorem Ipsum is simply dummy',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/4.webp',
        alt: 'portfolio-1',
      },
      title: 'Cloud Migrate Pro',
      description: 'Lorem Ipsum is simply dummy',
    },
  ],
};
