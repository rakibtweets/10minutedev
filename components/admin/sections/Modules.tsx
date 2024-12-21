'use client';

import { ModuleCard } from '@/components/cards/moduleCard';
import { ModuleCardSkeleton } from '@/components/Skeletons/module-card-skeleton';
import { useGetModules } from '@/hooks/module';
import { ParamsProps } from '@/types';
import { useParams } from 'next/navigation';

const Modules = () => {
  const params = useParams<ParamsProps>();
  const {
    data: modules,
    isError,
    error,
    isLoading
  } = useGetModules(params?.courseId);
  if (isLoading) {
    return <ModuleCardSkeleton />;
  }

  if (isError) {
    return (
      <div className="py-4 text-center text-red-500">
        Error:{' '}
        {error instanceof Error ? error.message : 'Failed to fetch modules'}
      </div>
    );
  }
  return <ModuleCard modules={modules} courseId={params?.courseId} />;
};
export default Modules;
