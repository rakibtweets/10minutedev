import React, { Suspense } from 'react';

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={null}>{children}</Suspense>;
};
export default CoursesLayout;
