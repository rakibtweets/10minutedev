import api from '@/utils/api';
import { VideoFormValues } from '../validation';

export const createVideo = async (values: VideoFormValues) => {
  const response = await api.post('/videos', values, {
    withCredentials: true
  });

  return response.data;
};

export const getVideosByModuleId = async (moduleId: string) => {
  const response = await api.get(`/videos?moduleId=${moduleId}`);

  return response.data;
};

export const getVideo = async (videoId: string) => {
  const response = await api.get(`/videos/${videoId}`);

  return response.data;
};

export const updateVideo = async (videoId: string, values: VideoFormValues) => {
  const response = await api.put(`/videos/${videoId}`, values, {
    withCredentials: true
  });

  return response.data;
};
export const markVideoAsWatched = async (videoId: string) => {
  const response = await api.put(
    `/videos/${videoId}/watched`,
    {},
    {
      withCredentials: true
    }
  );

  return response.data;
};

export const deleteVideo = async (videoId: string) => {
  const response = await api.delete(`/videos/${videoId}`);
  return response.data;
};
