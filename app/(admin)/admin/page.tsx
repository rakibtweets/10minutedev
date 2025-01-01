'use client';
import { AuthStatsCard } from '@/components/cards/AuthStatsCard';
import { EnrollmentChartCard } from '@/components/cards/EnrollmentChartCard';
import { StatsCard } from '@/components/cards/StatsCard';
import DashboardSkeleton from '@/components/Skeletons/Dashboard-skeleton';
import NotFound from '@/components/ui/not-found';
import { useGetAdminStats } from '@/hooks/user';
import { formatDuration } from '@/lib/utils';
import {
  BarChart,
  Book,
  FolderTree,
  GraduationCap,
  PlayCircle,
  Trophy,
  Users,
  Video
} from 'lucide-react';

const AdminDashboardPage = () => {
  const { data: stats, isLoading, isError, error } = useGetAdminStats();
  if (isLoading) return <DashboardSkeleton />;
  if (isError) {
    return (
      <div className="flex w-full justify-center">
        <NotFound message={error.message} title="Fail to fetch stats" />
      </div>
    );
  }

  const overallAvgProgress = stats?.averageProgress.reduce(
    (
      acc: number,
      course: { avgProgress: any },
      index: number,
      array: string | any[]
    ) => {
      acc += course.avgProgress;
      if (index === array.length - 1) {
        return acc / array.length;
      }
      return acc;
    },
    0
  );
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your learning platform
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Users"
            value={stats?.totalUsers}
            icon={<Users className="size-4 text-muted-foreground" />}
            description={`${stats?.activeUsers} active users`}
          />
          <StatsCard
            title="Total Courses"
            value={stats?.totalCourses}
            icon={<Book className="size-4 text-muted-foreground" />}
            description={`${stats?.publishedCourses} published courses`}
          />
          <StatsCard
            title="Total Videos"
            value={stats?.totalVideos}
            icon={<Video className="size-4 text-muted-foreground" />}
            description={`${formatDuration(stats.totalVideoDuration[0]?.totalDuration)} of content`}
          />
          <StatsCard
            title="Total Modules"
            value={stats?.totalModules}
            icon={<FolderTree className="size-4 text-muted-foreground" />}
          />
          <StatsCard
            title="Most Popular"
            value={stats?.mostPopularCourse?.title}
            icon={<Trophy className="size-4 text-muted-foreground" />}
          />
          <StatsCard
            title="Total Enrolled"
            value={stats?.totalEnrolledStudents[0]?.total}
            icon={<GraduationCap className="size-4 text-muted-foreground" />}
          />
          <StatsCard
            title="Average Progress"
            value={`${overallAvgProgress}%`}
            icon={<BarChart className="size-4 text-muted-foreground" />}
          />
          <StatsCard
            title="Watched Videos"
            value={stats?.watchedVideos}
            icon={<PlayCircle className="size-4 text-muted-foreground" />}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <EnrollmentChartCard data={stats?.enrollmentTrends} />
          <AuthStatsCard data={stats?.authStats} />
        </div>
      </div>
    </div>
  );
};
export default AdminDashboardPage;
