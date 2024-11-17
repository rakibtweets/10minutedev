import { SidebarLink } from '@/types';

export const sidebarLinks: SidebarLink[] = [
  {
    route: '/',
    label: 'Home'
  },
  {
    route: '/courses',
    label: 'Courses'
  },
  {
    route: '/about',
    label: 'About'
  },
  {
    route: '/request-course',
    label: 'Request Course'
  }
];

interface Tag {
  value: string;
  label: string;
}

export const tags: Tag[] = [
  { value: 'all', label: 'All' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'reactjs', label: 'React.js' },
  { value: 'mongodb', label: 'MongoDB' },
  { value: 'expressjs', label: 'Express.js' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  { value: 'materialui', label: 'Material UI' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'prisma', label: 'Prisma' },
  { value: 'graphql', label: 'GraphQL' },
  { value: 'drizzle', label: 'Drizzle' }
];

export const courses = [
  {
    id: '1',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Course Image 1',
    projectName: 'Introduction to React',
    videoCount: 20
  },
  {
    id: '2',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Course Image 2',
    projectName: 'Mastering TypeScript',
    videoCount: 30
  },
  {
    id: '3',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Course Image 3',
    projectName: 'Next.js Advanced Guide',
    videoCount: 25
  },
  {
    id: '4',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Course Image 4',
    projectName: 'Building Full-Stack Applications',
    videoCount: 35
  },
  {
    id: '5',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Course Image 5',
    projectName: 'Docker Basics for Developers',
    videoCount: 15
  },
  {
    id: '6',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Course Image 6',
    projectName: 'Git and GitHub Essentials',
    videoCount: 18
  },
  {
    id: '7',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Course Image 7',
    projectName: 'Node.js Fundamentals',
    videoCount: 22
  },
  {
    id: '8',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Course Image 8',
    projectName: 'Express.js in Action',
    videoCount: 28
  }
];
