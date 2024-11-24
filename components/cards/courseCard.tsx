import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Video } from 'lucide-react';
import Image from 'next/image';

interface ProjectCard {
  id: string;
  imageSrc: string;
  imageAlt: string;
  projectName: string;
  videoCount: number;
}

const CourseCard = ({
  id,
  imageAlt,
  imageSrc,
  projectName,
  videoCount
}: ProjectCard) => {
  return (
    <Card>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={260}
        height={160}
        className="w-full"
      />
      <div className="flex flex-col px-3 py-2">
        <div className="line-clamp-1 text-sm font-medium transition group-hover:text-green-400 md:text-base">
          {projectName}
        </div>
        <div className="my-3 flex items-center gap-2 text-xs">
          <Badge
            variant="secondary"
            className="flex items-center gap-2 rounded-md"
          >
            <Video className="size-4" />
            <span>
              {videoCount} {'videos'}
            </span>
          </Badge>
        </div>
      </div>
    </Card>
  );
};
export default CourseCard;
