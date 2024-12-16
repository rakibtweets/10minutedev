import { UserProfile } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface UserProfileCardProps {
  user: UserProfile;
}

export default function UserProfileCard({ user }: UserProfileCardProps) {
  return (
    <Card className="mx-auto w-full ">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="size-28">
          <AvatarImage src={user.avatarUrl} alt={user.displayName} />
          <AvatarFallback>
            {user.displayName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{user.displayName}</CardTitle>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="text-sm font-medium text-muted-foreground">
              User ID
            </dt>
            <dd className="text-sm">{user._id}</dd>
          </div>
          {user.authType && (
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                Auth Type
              </dt>
              <dd className="text-sm">{user.authType}</dd>
            </div>
          )}
          <div>
            <dt className="text-sm font-medium text-muted-foreground">
              Admin Status
            </dt>
            <dd>
              <Badge variant={user.isAdmin ? 'default' : 'secondary'}>
                {user.isAdmin ? 'Admin' : 'Regular User'}
              </Badge>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted-foreground">
              Account Status
            </dt>
            <dd>
              <Badge variant={user.isDeactivated ? 'destructive' : 'default'}>
                {user.isDeactivated ? 'Deactivated' : 'Active'}
              </Badge>
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
