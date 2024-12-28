import DashboardContent from '@/components/admin/sections/DashboardContent';
import DashboardSkeleton from '@/components/Skeletons/Dashboard-skeleton';
import { Suspense } from 'react';

const DashboardPage = () => {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent />
    </Suspense>
  );
};
export default DashboardPage;
