import { Children, ReactNode } from "react";
import styles from "./IconButton.module.scss";
import classNames from "classnames";


type IconButtonProps = {
  children: ReactNode;
  customClasses?: string;
};

const IconButton = ({ children, customClasses }: IconButtonProps) => {
  return (
    <button className={classNames(styles.iconButton, customClasses)}>
      {children}
    </button>
  );
};

export default IconButton;
