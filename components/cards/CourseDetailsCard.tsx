import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Video } from 'lucide-react';
import ParseHTML from '../ui/parseHTML';

interface CourseDetailsCardProps {
  title?: string;
  description?: string;
  instructor?: string;
  tags?: string[];
  videoCount?: number;
}

const CourseDetailsCard = ({
  title,
  description,
  tags,
  videoCount,
  instructor
}: CourseDetailsCardProps) => {
  const isSelected = false;

  return (
    <Card className="w-full py-4">
      <CardHeader className="space-y-3 py-4">
        <div>
          <Badge
            variant="secondary"
            className="inline-flex items-center gap-2 rounded-md"
          >
            <Video className="size-4" />
            <span>
              {videoCount} {'videos'}
            </span>
          </Badge>
        </div>
        <CardTitle>{title}</CardTitle>
        <div>
          <Badge variant="secondary" className="rounded-md">
            {instructor}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <ParseHTML data={description || ''} />
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center gap-2 pb-2">
        {tags?.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className={`${isSelected ? 'bg-green-500/60' : ''} rounded-md text-sm`}
          >
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};
export default CourseDetailsCard;
