import ProfileForm from '@/components/dashboard/forms/ProfileForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProfilePage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">My Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <ProfileForm />
      </CardContent>
    </Card>
  );
};
export default ProfilePage;
