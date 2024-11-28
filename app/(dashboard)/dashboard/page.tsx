import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
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
  {
    id: 1,
    title: 'Introduction to React',
    progress: 75,
    totalLessons: 20,
    completedLessons: 15
  },
  {
    id: 2,
    title: 'Advanced JavaScript Concepts',
    progress: 40,
    totalLessons: 25,
    completedLessons: 10
  },
  {
    id: 3,
    title: 'CSS Mastery',
    progress: 90,
    totalLessons: 15,
    completedLessons: 13
  },
  {
    id: 4,
    title: 'Node.js Fundamentals',
    progress: 60,
    totalLessons: 18,
    completedLessons: 11
  },
  {
    id: 5,
    title: 'Python for Data Science',
    progress: 30,
    totalLessons: 22,
    completedLessons: 7
  },
  {
    id: 6,
    title: 'Machine Learning Basics',
    progress: 10,
    totalLessons: 30,
    completedLessons: 3
  }
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
      <div className="grid  gap-6 md:grid-cols-2 lg:grid-cols-4">
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
      <div className="mt-12 space-y-6">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>
                  {course.completedLessons} of {course.totalLessons} lessons
                  completed
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
          ))}
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
