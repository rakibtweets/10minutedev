export const imageUpload = async (file: File) => {
  try {
    const response = await fetch(`${process.env.CLOUDINARY_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        file,
        folder: 'courses'
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Upload failed: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('Cloudinary Response:', result);

    // Return or handle the result
    return result;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
