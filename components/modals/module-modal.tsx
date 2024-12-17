'use client';
import {
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription
} from '@/components/ui/dialog';
import ModuleForm from '@/components/forms/ModuleForm';

interface IModuleModalProps {
  type: 'Add' | 'Edit';
  course?: string | undefined;
}

const ModuleModal = ({ type, course }: IModuleModalProps) => {
  const descriptionId = `${type.toLowerCase()}-module-description`;
  return (
    <DialogContent
      aria-describedby={course || descriptionId}
      className="sm:max-w-[425px]"
    >
      <DialogHeader>
        <DialogTitle>{type} Module</DialogTitle>
        <DialogDescription id={course || descriptionId}>
          {type === 'Add' ? 'Add new' : 'Edit'} video to course
        </DialogDescription>
      </DialogHeader>
      <div className="custom-scrollbar flex max-h-[60vh] grow flex-col justify-between overflow-y-auto px-4">
        <ModuleForm type={type} course={type === 'Edit' ? course : ''} />
      </div>
    </DialogContent>
  );
};
export default ModuleModal;
