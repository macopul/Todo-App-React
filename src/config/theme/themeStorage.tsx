import { THEME_KEY } from '../../constants/storage';

export const isDarkTheme = () => {
  return JSON.parse(window.localStorage.getItem(THEME_KEY) || 'false');
};

export const toggleDarkTheme = () => {
  const isCurrentlyDarkTheme = isDarkTheme();
  return window.localStorage.setItem(THEME_KEY, JSON.stringify(!isCurrentlyDarkTheme));
};
