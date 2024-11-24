import CourseCard from '@/components/cards/courseCard';
import { PageHeaderHeading } from '@/components/HeroSection/HeroSection';
import { Button } from '@/components/ui/button';
import { courses, tags } from '@/constants';

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
