'use client';

import DashboardCourseCard from '@/components/cards/DashboardCourseCard';
import DashboardSkeleton from '@/components/Skeletons/Dashboard-skeleton';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import NotFound from '@/components/ui/not-found';

import { Progress } from '@/components/ui/progress';
import { useUserStatisticsAndEnrolledCourses } from '@/hooks/user/use-get-user-stats';
import { BookOpen, BarChart3 } from 'lucide-react';

const DashboardContent = () => {
  const {
    data: userStats,
    isLoading,
    isError,
    error
  } = useUserStatisticsAndEnrolledCourses();

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex w-full justify-center">
        <NotFound message={error.message} title="Fail to fetch courses" />
      </div>
    );
  }

  return (
    <>
      <div className="grid  gap-6 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <BookOpen className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {userStats?.statistics?.totalEnrolledCourses}
            </div>
            {/* <p className="text-xs text-muted-foreground">
        {analytics.completedCourses} completed
      </p>  */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Progress
            </CardTitle>
            <BarChart3 className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {userStats?.statistics?.averageCourseProgress}%
            </div>
            <Progress
              value={userStats?.statistics?.averageCourseProgress}
              className="mt-2"
            />
          </CardContent>
        </Card>
      </div>
      <div className="mt-12 space-y-6">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {userStats?.courses?.map((course: any) => (
            <DashboardCourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};
export default DashboardContent;
