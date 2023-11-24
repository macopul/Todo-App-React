import { THEME_MODE_KEY } from '../../constants/storage';

export const getIsDarkMode = () => {
  return JSON.parse(window.localStorage.getItem(THEME_MODE_KEY) || 'false');
};

export const toggleDarkMode = () => {
  const actualMode = getIsDarkMode();
  return window.localStorage.setItem(THEME_MODE_KEY, JSON.stringify(!actualMode));
};
