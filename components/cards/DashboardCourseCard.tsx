import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { Progress } from '../ui/progress';

interface CourseCardProps {
  course: {
    _id: string;
    title: string;
    completedLessons: number;
    totalLessons: number;
    progress: number;
  };
}

const DashboardCourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card key={course?._id}>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>
          {course?.completedLessons} of {course?.totalLessons} lessons completed
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={course.progress} className="mt-2" />
        <p className="mt-2 text-sm text-muted-foreground">
          {course.progress}% complete
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue Course</Button>
      </CardFooter>
    </Card>
  );
};
export default DashboardCourseCard;
