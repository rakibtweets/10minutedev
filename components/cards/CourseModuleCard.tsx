import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CourseModules from '../course-module/course-modules';
import { Suspense } from 'react';
import CourseContentSkeleton from '../Skeletons/course-content-skeleton';

const CourseModuleCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-0">
        <CardTitle className="text-xl font-bold">Course Content</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<CourseContentSkeleton />}>
          <CourseModules />
        </Suspense>
      </CardContent>
    </Card>
  );
};
export default CourseModuleCard;
