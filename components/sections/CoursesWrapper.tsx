'use client';

import { useSearchParams } from 'next/navigation';
import Courses from './Courses';

const CoursesWrapper = () => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag') || '';

  return <Courses tag={tag} />;
};

export default CoursesWrapper;
