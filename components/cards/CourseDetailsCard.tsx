import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { tags } from '@/constants';
import { Badge } from '@/components/ui/badge';
import { Video } from 'lucide-react';

const CourseDetailsCard = () => {
  const isSelected = false;

  return (
    <Card className="py-4">
      <CardHeader className="space-y-3 py-4">
        <div>
          <Badge
            variant="secondary"
            className="inline-flex items-center gap-2 rounded-md"
          >
            <Video className="size-4" />
            <span>
              {23} {'Chapters'}
            </span>
          </Badge>
        </div>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          cumque quo repellat animi fugit blanditiis nesciunt, porro iusto earum
          voluptatum ratione dolorum ad sed deserunt exercitationem numquam
          voluptates, inventore, asperiores pariatur nisi. Labore, quis maiores
          itaque, libero qui adipisci reiciendis at ipsa dolorem soluta odio
          laudantium possimus beatae sit assumenda?
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center gap-2 pb-2">
        {tags.slice(1, 4).map((tag) => (
          <Badge
            key={tag.value}
            variant="outline"
            className={`${isSelected ? 'bg-green-500/60' : ''} rounded-md text-sm`}
          >
            {tag.label}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};
export default CourseDetailsCard;
