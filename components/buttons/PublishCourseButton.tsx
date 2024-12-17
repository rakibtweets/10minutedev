'use client';
import { useUpdateCourseIsPublished } from '@/hooks/course';
import { ICourse } from '@/types';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

const PublishCourseButton = ({ course }: { course: ICourse }) => {
  const { mutate: updateCourse } = useUpdateCourseIsPublished(course._id);
  const handlePublishCourse = () => {
    updateCourse(!course.isPublished);
  };
  return (
    <DropdownMenuItem className="cursor-pointer" onClick={handlePublishCourse}>
      {course.isPublished ? 'Unpublish Course' : 'Publish Course'}
    </DropdownMenuItem>
  );
};
export default PublishCourseButton;
