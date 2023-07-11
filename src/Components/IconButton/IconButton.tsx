import { ReactNode } from "react";
import styles from "./IconButton.module.scss";
import clsx from "clsx";

type IconButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
};

const IconButton = ({ children, className, onClick, id }: IconButtonProps) => {
  return (
    <button
      className={clsx(styles.iconButton, className)}
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
};

export default IconButton;
