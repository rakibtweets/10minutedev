'use client';

import { useSearchParams } from 'next/navigation';
import Courses from './Courses';
import { Suspense } from 'react';
import CourseCardSkeleton from '../Skeletons/course-card-skelton';

const CoursesWrapper = () => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag') || '';

  return (
    <Suspense
      fallback={Array(8)
        .fill(0)
        .map((_, index) => (
          <CourseCardSkeleton key={index} />
        ))}
    >
      <Courses tag={tag} />
    </Suspense>
  );
};

export default CoursesWrapper;
