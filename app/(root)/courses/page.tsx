import CourseCard from '@/components/cards/courseCard';
import { PageHeaderHeading } from '@/components/HeroSection/HeroSection';
import { Button } from '@/components/ui/button';

const courses = [
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

interface Tag {
  value: string;
  label: string;
}

const tags: Tag[] = [
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

const PageCourses = () => {
  const isSelected = false;
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {tags.map((tag) => (
          <Button
            key={tag.value}
            size={'sm'}
            variant="secondary"
            className={`${isSelected ? 'bg-green-500/60' : ''} text-sm`}
          >
            {tag.label}
          </Button>
        ))}
      </div>

      <PageHeaderHeading size="default" className=" text-center font-bold">
        Courses
      </PageHeaderHeading>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            imageAlt={course.imageAlt}
            imageSrc={course.imageSrc}
            projectName={course.projectName}
            videoCount={course.videoCount}
          />
        ))}
      </div>
    </>
  );
};
export default PageCourses;
