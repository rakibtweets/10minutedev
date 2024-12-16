import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useDeleteCourse } from '@/hooks/course';

const DeleteCourseButton = ({ courseId }: { courseId: string }) => {
  const { mutate: deleteCouse } = useDeleteCourse(courseId);

  return (
    <DropdownMenuItem className="cursor-pointer" onClick={() => deleteCouse()}>
      Delete course
    </DropdownMenuItem>
  );
};

export default DeleteCourseButton;
