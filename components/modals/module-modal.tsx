import {
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader
} from '@/components/ui/dialog';
import ModuleForm from '@/components/forms/ModuleForm';

interface IModuleModalProps {
  type: 'Add' | 'Edit';
  course?: string | undefined;
}

const ModuleModal = ({ type, course }: IModuleModalProps) => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{type} Module</DialogTitle>
        <DialogDescription>
          {type === 'Add' ? 'Add new' : 'Edit'} modules to the course
        </DialogDescription>
      </DialogHeader>
      <div className="custom-scrollbar max-h-[60vh] overflow-y-auto pr-6">
        <ModuleForm type={type} course={type === 'Edit' ? course : ''} />
      </div>
    </DialogContent>
  );
};
export default ModuleModal;
