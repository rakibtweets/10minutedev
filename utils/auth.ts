export const isLoggedInKey = 'isLoggedIn';

export const setLoggedIn = (value: boolean) => {
  localStorage.setItem(isLoggedInKey, JSON.stringify(value));
};

export const getIsLoggedIn = (): boolean => {
  const value = localStorage.getItem(isLoggedInKey);
  return value ? JSON.parse(value) : false;
};
