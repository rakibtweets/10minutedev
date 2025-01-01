import React, { Suspense } from 'react';

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};
export default CoursesLayout;
