import { IModule, SidebarLink } from '@/types';

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

export type IUser = {
  id: string;
  name: string;
  createdAt: Date;
  lastUpdate: Date;
  coursesEnrolled: number;
  role: 'admin' | 'user' | 'editor';
};

export const users: IUser[] = [
  {
    id: '1',
    name: 'John Doe',
    createdAt: new Date('2023-01-15'),
    lastUpdate: new Date('2023-07-20'),
    coursesEnrolled: 3,
    role: 'user'
  },
  {
    id: '2',
    name: 'Jane Smith',
    createdAt: new Date('2023-02-28'),
    lastUpdate: new Date('2023-07-25'),
    coursesEnrolled: 5,
    role: 'editor'
  },
  {
    id: '3',
    name: 'Admin User',
    createdAt: new Date('2022-12-01'),
    lastUpdate: new Date('2023-07-28'),
    coursesEnrolled: 0,
    role: 'admin'
  }
  // Add more mock data as needed
];

// Dummy data matching the provided schema
export const initialModules: IModule[] = [
  {
    _id: '1',
    title: 'Introduction to React',
    description: 'Learn the basics of React and its core concepts',
    course: '101',
    videos: [
      {
        _id: 'v1',
        title: 'What is React?',
        description: 'An overview of React',
        videoId: 'abc123',
        module: '1',
        duration: 10,
        order: 1,
        watchedBy: []
      },
      {
        _id: 'v2',
        title: 'Setting up a React project',
        description: 'Step-by-step guide to set up a React project',
        videoId: 'def456',
        module: '1',
        duration: 15,
        order: 2,
        watchedBy: []
      },
      {
        _id: 'v3',
        title: 'Components and Props',
        description: 'Understanding React components and props',
        videoId: 'ghi789',
        module: '1',
        duration: 20,
        order: 3,
        watchedBy: []
      }
    ],
    order: 1,
    duration: 45
  },
  {
    _id: '2',
    title: 'State and Lifecycle',
    description: 'Understand how to manage state and component lifecycle',
    course: '101',
    videos: [
      {
        _id: 'v4',
        title: 'Introduction to State',
        description: 'Understanding state in React',
        videoId: 'jkl012',
        module: '2',
        duration: 12,
        order: 1,
        watchedBy: []
      },
      {
        _id: 'v5',
        title: 'useState Hook',
        description: 'Using the useState hook',
        videoId: 'mno345',
        module: '2',
        duration: 18,
        order: 2,
        watchedBy: []
      },
      {
        _id: 'v6',
        title: 'useEffect Hook',
        description: 'Understanding and using the useEffect hook',
        videoId: 'pqr678',
        module: '2',
        duration: 22,
        order: 3,
        watchedBy: []
      }
    ],
    order: 2,
    duration: 52
  },
  {
    _id: '3',
    title: 'Advanced React Patterns',
    description: 'Explore advanced React patterns and techniques',
    course: '101',
    videos: [
      {
        _id: 'v7',
        title: 'Render Props',
        description: 'Understanding and implementing render props',
        videoId: 'stu901',
        module: '3',
        duration: 25,
        order: 1,
        watchedBy: []
      },
      {
        _id: 'v8',
        title: 'Higher-Order Components',
        description: 'Creating and using Higher-Order Components',
        videoId: 'vwx234',
        module: '3',
        duration: 30,
        order: 2,
        watchedBy: []
      },
      {
        _id: 'v9',
        title: 'Custom Hooks',
        description: 'Creating and using custom hooks',
        videoId: 'yz567',
        module: '3',
        duration: 28,
        order: 3,
        watchedBy: []
      }
    ],
    order: 3,
    duration: 83
  }
];
