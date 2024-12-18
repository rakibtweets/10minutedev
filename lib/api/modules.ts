import { ModuleFormValues } from '../validation';

export const createModule = async (values: ModuleFormValues) => {
  try {
    const response = await fetch('http://localhost:5000/api/v1/modules', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
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
    throw new Error(`Failed to create module: ${error}`);
  }
};

export const getModulesByCourseId = async (courseId: string) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/modules?${courseId}`,
      {
        method: 'GET',
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

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(`Failed to fetch modules: ${error}`);
  }
};

export const getModule = async (moduleId: string) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/modules/${moduleId}`,
      {
        method: 'GET',
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

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(`Failed to fetch module: ${error}`);
  }
};

export const updateModule = async (
  moduleId: string,
  values: ModuleFormValues
) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/modules/${moduleId}`,
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
    throw new Error(`Failed to update module: ${error}`);
  }
};

export const updateModuleStatus = async (
  moduleId: string,
  isPublished: boolean
) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/modules/${moduleId}/publish`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isPublished })
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
    throw new Error(`Failed to update module status: ${error}`);
  }
};

export const deleteModule = async (moduleId: string) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/modules/${moduleId}`,
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
    throw new Error(`Failed to delete module: ${error}`);
  }
};
