'use server';

export const loginWithGithub = async () => {
  const request = await fetch('http://localhost:5000/api/auth/github');
  const response = await request.json();
  console.log(response);
  return response;
};
