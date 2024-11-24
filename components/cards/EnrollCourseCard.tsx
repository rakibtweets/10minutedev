import { Users, Clock, Video, Infinity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const EnrollCourseCard = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Course Name</CardTitle>
        <p className="mt-2 text-xl font-bold text-primary">$ Free</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full text-lg" size="lg">
          Enroll Now
        </Button>
        <div className="mt-4">
          <h3 className="mb-2 text-lg font-semibold">
            What&apos;s in this course
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Users className="mr-2 size-5 text-primary" />
              <span>Total Enrolled: 185,801</span>
            </li>
            <li className="flex items-center">
              <Clock className="mr-2 size-5 text-primary" />
              <span>Time Required: 20 hours</span>
            </li>
            <li className="flex items-center">
              <Video className="mr-2 size-5 text-primary" />
              <span>70 Videos</span>
            </li>
            <li className="flex items-center">
              <Infinity className="mr-2 size-5 text-primary" />
              <span>Course Validity: Lifetime</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
export default EnrollCourseCard;
