import api from '@/utils/api';
import {
  CourseFormValues,
  EnrollFormValues,
  UpdateCourseFormValues
} from '../validation';

export const createCourse = async (values: CourseFormValues) => {
  const response = await api.post(`/courses`, values, {
    withCredentials: true
  });

  return response.data;
};

export const getCourses = async (queryParams = {}) => {
  const queryString = new URLSearchParams(queryParams).toString();
  const url = `/courses${queryString ? `?${queryString}` : ''}`;
  const response = await api.get(url);

  return response.data;
};

export const getCourse = async (courseId: string) => {
  const response = await api.get(`/courses/${courseId}`);

  return response.data;
};

export const updateCourse = async (
  courseId: string,
  values: UpdateCourseFormValues
) => {
  const response = await api.put(`/courses/${courseId}`, values, {
    withCredentials: true
  });

  return response.data;
};

export const updateCourseIsPublished = async (
  courseId: string,
  isPublished: boolean
) => {
  const response = await api.put(
    `/courses/${courseId}/publish`,
    { isPublished },
    {
      withCredentials: true
    }
  );

  return response.data;
};

export const deleteCourse = async (courseId: string) => {
  const response = await api.delete(
    `/courses/${courseId}`,

    {
      withCredentials: true
    }
  );
  return response.data;
};

export const enrollToCourseService = async (
  courseId: string,
  values: EnrollFormValues
) => {
  const response = await api.post(`/courses/${courseId}/enroll`, values, {
    withCredentials: true
  });
  return response.data;
};
