import styles from './ThemeButton.module.scss';
import { useRef } from 'react';
import { isDarkTheme, toggleDarkTheme } from '../../config/theme/themeStorage';
import IconButton from '../IconButton/IconButton';
import clsx from 'clsx';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeButton = () => {
  const lightThemeButtonRef = useRef<HTMLButtonElement>(null);
  const darkThemeButtonRef = useRef<HTMLButtonElement>(null);
  const isDarkThemeFromLocalStorage = isDarkTheme();
  isDarkThemeFromLocalStorage && document.body.classList.add('theme-dark');

  const handleOnButtonClick = () => {
    document.body.classList.toggle('theme-dark');
    if (document.body.classList.contains('theme-dark')) {
      lightThemeButtonRef.current?.classList.remove(styles.active);
      darkThemeButtonRef.current?.classList.add(styles.active);
      toggleDarkTheme();
      return;
    }
    lightThemeButtonRef.current?.classList.add(styles.active);
    darkThemeButtonRef.current?.classList.remove(styles.active);
    toggleDarkTheme();
  };

  return (
    <div className={styles.themeButtonWrapper}>
      <div className={styles.ThemeButtonComponent}>
        <IconButton
          ref={lightThemeButtonRef}
          onClick={handleOnButtonClick}
          classname={clsx(styles.lightThemeButton, !isDarkThemeFromLocalStorage && styles.active)}
        >
          <FiSun className={styles.lightThemeButtonIcon} />
        </IconButton>
        <IconButton
          ref={darkThemeButtonRef}
          onClick={handleOnButtonClick}
          classname={clsx(styles.darkThemeButton, isDarkThemeFromLocalStorage && styles.active)}
        >
          <FiMoon className={styles.darkThemeButtonIcon} />
        </IconButton>
      </div>
    </div>
  );
};

export default ThemeButton;
