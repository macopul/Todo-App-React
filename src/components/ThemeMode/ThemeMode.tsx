import styles from './themeMode.module.scss';
import { useRef } from 'react';
import { getIsDarkMode, toggleDarkMode } from '../../config/themeMode/themeModeStorage';
import IconButton from '../IconButton/IconButton';
import clsx from 'clsx';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeMode = () => {
  const lightModeIconRef = useRef<HTMLButtonElement>(null);
  const darkModeIconRef = useRef<HTMLButtonElement>(null);
  const isDarkModeFromLocalStorage = getIsDarkMode();
  isDarkModeFromLocalStorage && document.body.classList.add('theme-dark');

  const handleOnclick = () => {
    document.body.classList.toggle('theme-dark');
    if (document.body.classList.contains('theme-dark')) {
      lightModeIconRef.current?.classList.remove(styles.active);
      darkModeIconRef.current?.classList.add(styles.active);
      toggleDarkMode();
      return;
    }
    lightModeIconRef.current?.classList.add(styles.active);
    darkModeIconRef.current?.classList.remove(styles.active);
    toggleDarkMode();
  };

  return (
    <div className={styles.ThemeModeIcon}>
      <IconButton
        ref={lightModeIconRef}
        onClick={handleOnclick}
        classname={clsx(styles.themeButton, !isDarkModeFromLocalStorage && styles.active)}
      >
        <FiSun className={styles.lightModeButtonIcon} />
      </IconButton>
      <IconButton
        ref={darkModeIconRef}
        onClick={handleOnclick}
        classname={clsx(styles.themeButton, isDarkModeFromLocalStorage && styles.active)}
      >
        <FiMoon className={styles.darkModeButtonIcon} />
      </IconButton>
    </div>
  );
};

export default ThemeMode;
