'use client';
import { useAuth } from '@/hooks/useAuth';
import UserProfileCard from '../cards/UserProfileCard';
import { UserProfileCardSkeleton } from '../Skeletons/user-profile-skeleton';

const UserProfile = () => {
  const { user, isLoading, isError } = useAuth();

  if (isLoading) {
    return <UserProfileCardSkeleton />;
  }
  if (isError) {
    return <div>Failed to load user profile</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return <UserProfileCard user={user} />;
};
export default UserProfile;
