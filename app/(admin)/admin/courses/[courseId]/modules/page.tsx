'use client';

import React from 'react';

import { ModuleCard } from '@/components/cards/moduleCard';
import { Button } from '@/components/ui/button';
import ModuleModal from '@/components/modals/module-modal';
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import { useParams } from 'next/navigation';
import { ParamsProps } from '@/types';

const CourseModulesPage = () => {
  const params = useParams<ParamsProps>();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
        <h1 className="mb-5 text-2xl font-bold">Course Modules</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Add Module</Button>
          </DialogTrigger>
          <ModuleModal type="Add" course={params?.courseId} />
        </Dialog>
      </div>
      <ModuleCard />
    </div>
  );
};
export default CourseModulesPage;
