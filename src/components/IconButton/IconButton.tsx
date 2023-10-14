import { ReactNode } from 'react';
import styles from './IconButton.module.scss';
import clsx from 'clsx';
import { forwardRef } from 'react';

type IconButtonProps = {
  children?: ReactNode;
  classname?: string;
  onClick?: () => void;
  id?: string;
} & // React.ComponentPropsWithRef<'button'>;
React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, classname, onClick, id, ...rest }: IconButtonProps, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(styles.IconButtonComponent, classname)}
        onClick={onClick}
        id={id}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export default IconButton;
