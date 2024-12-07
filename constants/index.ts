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

export interface Tag {
  value: string;
  label: string;
}

export const tags: Tag[] = [
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

export type ICourse = {
  id: string;
  name: string;
  creationDate: Date;
  accessible: 'published' | 'hidden' | 'pending';
  lastUpdated: Date;
  totalEnrolled: number;
};

export const coursesDatas: ICourse[] = [
  {
    id: '1',
    name: 'Introduction to React',
    creationDate: new Date('2023-01-15'),
    accessible: 'published',
    lastUpdated: new Date('2023-06-20'),
    totalEnrolled: 1500
  },
  {
    id: '2',
    name: 'Advanced JavaScript Concepts',
    creationDate: new Date('2023-02-28'),
    accessible: 'hidden',
    lastUpdated: new Date('2023-07-05'),
    totalEnrolled: 800
  },
  {
    id: '3',
    name: 'CSS Mastery',
    creationDate: new Date('2023-03-10'),
    accessible: 'pending',
    lastUpdated: new Date('2023-07-15'),
    totalEnrolled: 1200
  }
  // Add more mock data as needed
];

export type IUser = {
  id: string;
  name: string;
  accountCreation: Date;
  lastUpdate: Date;
  coursesEnrolled: number;
  role: 'admin' | 'user' | 'editor';
};

export const users: IUser[] = [
  {
    id: '1',
    name: 'John Doe',
    accountCreation: new Date('2023-01-15'),
    lastUpdate: new Date('2023-07-20'),
    coursesEnrolled: 3,
    role: 'user'
  },
  {
    id: '2',
    name: 'Jane Smith',
    accountCreation: new Date('2023-02-28'),
    lastUpdate: new Date('2023-07-25'),
    coursesEnrolled: 5,
    role: 'editor'
  },
  {
    id: '3',
    name: 'Admin User',
    accountCreation: new Date('2022-12-01'),
    lastUpdate: new Date('2023-07-28'),
    coursesEnrolled: 0,
    role: 'admin'
  }
  // Add more mock data as needed
];
