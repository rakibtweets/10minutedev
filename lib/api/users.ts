import { UserFormValues } from '../validation';

export const updateUserById = async (
  userId: string,
  values: UserFormValues
) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/users/${userId}`,
      {
        method: 'PUT',
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

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/users`, {
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

export const deleteUser = async (userId: string) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/users/${userId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
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

export const getEnrolledCoursesService = async () => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/users/enrolled-courses`,
      {
        method: 'GET',
        credentials: 'include', // Include cookies for authentication
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse;
    }

    const enrolledCourses = await response.json();
    return enrolledCourses;
  } catch (error: any) {
    console.log('API Error:', error);
    throw error;
  }
};
