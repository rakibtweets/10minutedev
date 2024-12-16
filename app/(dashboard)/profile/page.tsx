import UserProfile from '@/components/sections/UserProfile';
import { UserProfileCardSkeleton } from '@/components/Skeletons/user-profile-skeleton';
import { Suspense } from 'react';

const ProfilePage = () => {
  return (
    <>
      <div className="space-y-6">
        <h1 className=" text-2xl font-bold">My Profile</h1>

        <Suspense fallback={<UserProfileCardSkeleton />}>
          <UserProfile />
        </Suspense>
      </div>
    </>
  );
};
export default ProfilePage;
