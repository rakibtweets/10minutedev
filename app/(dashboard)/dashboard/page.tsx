import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card';

import { Progress } from '@/components/ui/progress';
import {
  BookOpen,
  BarChart3,
  LayoutDashboard,
  GraduationCap
} from 'lucide-react';

// Mock data for courses and analytics
const courses = [
  { id: 1, title: 'Introduction to React', progress: 75 },
  { id: 2, title: 'Advanced JavaScript Concepts', progress: 40 },
  { id: 3, title: 'CSS Mastery', progress: 90 }
];

const analytics = {
  totalCourses: 10,
  completedCourses: 3,
  averageProgress: 68,
  totalWatchTime: '45h 30m'
};
const DashboardPage = () => {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <BookOpen className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalCourses}</div>
            <p className="text-xs text-muted-foreground">
              {analytics.completedCourses} completed
            </p>
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
              {analytics.averageProgress}%
            </div>
            <Progress value={analytics.averageProgress} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Watch Time
            </CardTitle>
            <LayoutDashboard className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalWatchTime}</div>
            <p className="text-xs text-muted-foreground">Across all courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Goal</CardTitle>
            <GraduationCap className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5 Courses</div>
            <p className="text-xs text-muted-foreground">
              2 more to reach your goal
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <h2 className="mb-4 text-xl font-semibold">Your Courses</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>Course progress</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={course.progress} className="mt-2" />
                <p className="mt-2 text-sm text-muted-foreground">
                  {course.progress}% complete
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
