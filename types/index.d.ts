export interface SidebarLink {
  route: string;
  label: string;
}
export interface ParamsProps {
  params: { id: string };
  [key: string]: string;
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}
export interface UserProfile {
  _id: string;
  email: string;
  authType: string;
  isAdmin: boolean;
  isDeactivated: boolean;
  displayName: string;
  avatarUrl: string;
}

export interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  isError: boolean;
  logout: () => void;
}

export interface ICourse {
  _id: string;
  title: string;
  description?: string;
  thumbnail: {
    url: string;
    publicId?: string;
  };
  instructor: string;
  modules?: string[];
  tags?: string[];
  duration?: number;
  enrolledStudents: number;
  price?: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  isPublished?: boolean;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  authType?: 'google' | 'github';
  enrolledCourses?: Array<{
    courseId: string;
    progress: number;
    completedModules: string[];
    watchedVideos: string[];
    enrolledAt: Date;
  }>;
  isAdmin?: boolean;
  google?: {
    id: string;
    email: string;
    picture: string;
  };
  github?: {
    id: string;
    avatarUrl: string;
  };
  updatedAt: Date;
  createdAt: Date;
  isDeactivated?: boolean;
  accessToken?: string | null | undefined;
  accessTokenIV?: string | null | undefined;
}
