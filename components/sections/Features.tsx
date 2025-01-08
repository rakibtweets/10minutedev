import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, Code, Unlock, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Youtube className="size-8 text-red-500" />,
      title: 'YouTube Integration',
      description:
        'Access a wide range of courses through YouTube video integration.'
    },
    {
      icon: <Unlock className="size-8 text-green-500" />,
      title: 'Free Courses',
      description:
        "All courses are freely available, leveraging YouTube's vast educational content."
    },
    {
      icon: <Code className="size-8 text-blue-500" />,
      title: 'Developer Focused',
      description:
        'Tailored content for web developers, covering the latest technologies and best practices.'
    },
    {
      icon: <Users className="size-8 text-purple-500" />,
      title: 'Community Learning',
      description:
        'Join a vibrant community of developers to share knowledge and grow together.'
    }
  ];

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  {feature.icon}
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
