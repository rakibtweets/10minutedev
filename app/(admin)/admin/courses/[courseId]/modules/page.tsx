import React, { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import ModuleModal from '@/components/modals/module-modal';
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import Modules from '@/components/admin/sections/Modules';
import { ModuleCardSkeleton } from '@/components/Skeletons/module-card-skeleton';

const CourseModulesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
        <h1 className="mb-5 text-2xl font-bold">Course Modules</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Add Module</Button>
          </DialogTrigger>
          <ModuleModal type="Add" />
        </Dialog>
      </div>
      <Suspense fallback={<ModuleCardSkeleton />}>
        <Modules />
      </Suspense>
    </div>
  );
};
export default CourseModulesPage;
