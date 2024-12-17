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
      const errorMessages = errorResponse.errors || [];
      const errorMessage = errorMessages.join(', ') || 'Unknown error occurred';
      throw new Error(`${response.status} - ${errorMessage}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(`Failed to update user: ${error}`);
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
      const errorMessages = errorResponse.errors || [];
      const errorMessage = errorMessages.join(', ') || 'Unknown error occurred';
      throw new Error(`${response.status} - ${errorMessage}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(`Failed to fetch users: ${error}`);
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
      const errorMessages = errorResponse.errors || [];
      const errorMessage = errorMessages.join(', ') || 'Unknown error occurred';
      throw new Error(`${response.status} - ${errorMessage}`);
    }

    return { success: true };
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(`Failed to delete user: ${error}`);
  }
};
