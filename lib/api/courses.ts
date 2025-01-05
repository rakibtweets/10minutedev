import {
  CourseFormValues,
  EnrollFormValues,
  UpdateCourseFormValues
} from '../validation';

export const createCourse = async (values: CourseFormValues) => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/courses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Error:', error);
    // Throw the error with a more user-friendly message
    // @ts-ignore
    throw error;
  }
};

export const getCourses = async (queryParams = {}) => {
  try {
    const queryString = new URLSearchParams(queryParams).toString();
    const url = `http://localhost:5000/api/v1/courses${queryString ? `?${queryString}` : ''}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getCourse = async (courseId: string) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/courses/${courseId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const updateCourse = async (
  courseId: string,
  values: UpdateCourseFormValues
) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/courses/${courseId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(values)
      }
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const updateCourseIsPublished = async (
  courseId: string,
  isPublished: boolean
) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/courses/${courseId}/publish`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ isPublished })
      }
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const deleteCourse = async (courseId: string) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/courses/${courseId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      }
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse;
    }

    return { success: true };
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const enrollToCourseService = async (
  courseId: string,
  values: EnrollFormValues
) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/courses/${courseId}/enroll`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse;
    }

    return { success: true };
  } catch (error: any) {
    console.log('API Error:', error);
    throw error;
  }
};
