import { ReactNode } from "react";
import styles from "./IconButton.module.scss";
import clsx from "clsx";

type IconButtonProps = {
  children: ReactNode;
  customClass?: string;
  onClick?: () => void;
  id?: string;
};

const IconButton = ({
  children,
  customClass,
  onClick,
  id,
}: IconButtonProps) => {
  return (
    <button
      className={clsx(styles.IconButtonComponent, customClass)}
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
};

export default IconButton;
