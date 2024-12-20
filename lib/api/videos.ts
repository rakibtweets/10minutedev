import { VideoFormValues } from '../validation';

export const createVideo = async (values: VideoFormValues) => {
  try {
    const response = await fetch('http://localhost:5000/api/v1/videos', {
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
    throw new Error(`Failed to create video: ${error}`);
  }
};

export const getVideosByModuleId = async (moduleId: string) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/videos?moduleId=${moduleId}`,
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
    throw new Error(`Failed to fetch videos: ${error}`);
  }
};

export const getVideo = async (videoId: string) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/videos/${videoId}`,
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
    throw new Error(`Failed to fetch video: ${error}`);
  }
};

export const updateVideo = async (videoId: string, values: VideoFormValues) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/videos/${videoId}`,
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
    throw new Error(`Failed to update video: ${error}`);
  }
};

export const deleteVideo = async (videoId: string) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/videos/${videoId}`,
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
    throw new Error(`Failed to delete video: ${error}`);
  }
};
