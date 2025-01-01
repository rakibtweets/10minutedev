import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Video } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCard {
  id: string;
  imageSrc: string;
  imageAlt?: string;
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
    <Card className="group">
      <div className="w-full">
        <Image
          src={imageSrc}
          alt={imageAlt || projectName}
          width={260}
          height={160}
          className="w-full"
        />
      </div>
      <div className="flex flex-col px-3 py-2">
        <Link
          href={`/courses/${id}`}
          className="line-clamp-1 text-sm font-medium  transition duration-100 group-hover:text-green-400 md:text-base"
        >
          {projectName}
        </Link>
        <div className="my-3 flex items-center  gap-2 text-xs">
          <Badge
            variant="secondary"
            className="flex items-center gap-2 rounded-md"
          >
            <Video className="size-4  transition duration-100 group-hover:text-green-400" />
            <span className="transition  duration-100 group-hover:text-green-400">
              {videoCount} {'videos'}
            </span>
          </Badge>
        </div>
      </div>
    </Card>
  );
};
export default CourseCard;
