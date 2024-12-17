import CourseForm from '@/components/forms/CourseForm';

const AddNewCoursePage = () => {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Create New Course</h1>
      <CourseForm type="create" />
    </div>
  );
};
export default AddNewCoursePage;
