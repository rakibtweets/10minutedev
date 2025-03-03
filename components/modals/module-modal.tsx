'use client';
import {
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription
} from '@/components/ui/dialog';
import ModuleForm from '@/components/forms/ModuleForm';
import { IModule } from '@/types';

interface IModuleModalProps {
  type: 'Add' | 'Edit';

  module?: IModule | undefined;
}

const ModuleModal = ({ type, module }: IModuleModalProps) => {
  const descriptionId = `${type.toLowerCase()}-module-description`;

  return (
    <DialogContent
      aria-describedby={descriptionId}
      className="sm:max-w-[425px]"
    >
      <DialogHeader>
        <DialogTitle>{type} Module</DialogTitle>
        <DialogDescription id={descriptionId}>
          {type === 'Add' ? 'Add new' : 'Edit'} video to course
        </DialogDescription>
      </DialogHeader>
      <div className="custom-scrollbar flex max-h-[60vh] grow flex-col justify-between overflow-y-auto px-4">
        <ModuleForm type={type} module={module} />
      </div>
    </DialogContent>
  );
};
export default ModuleModal;
