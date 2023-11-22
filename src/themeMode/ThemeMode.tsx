import { THEME_MODE_KEY } from '../constants/storage';

export const getIsDarkMode = () => {
  // return JSON.parse(window.localStorage.getItem(THEME_MODE_KEY) || '');
  // return JSON.parse(window.localStorage.getItem(THEME_MODE_KEY) || '');
  return JSON.parse(window.localStorage.getItem(THEME_MODE_KEY) || 'false');
  // return window.localStorage.getItem(THEME_MODE_KEY);
};

export const setDarkMode = () => {
  return window.localStorage.setItem(THEME_MODE_KEY, JSON.stringify(true));
};

export const removeDarkMode = () => {
  window.localStorage.setItem(THEME_MODE_KEY, JSON.stringify(false));
};
