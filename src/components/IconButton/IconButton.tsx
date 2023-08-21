import { ReactNode } from 'react';
import styles from './IconButton.module.scss';
import clsx from 'clsx';

type IconButtonProps = {
  children?: ReactNode;
  classname?: string;
  onClick?: () => void;
  id?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ children, classname, onClick, id, ...rest }: IconButtonProps) => {
  return (
    <button
      className={clsx(styles.IconButtonComponent, classname)}
      onClick={onClick}
      id={id}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
