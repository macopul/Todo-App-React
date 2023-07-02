import { ReactNode } from "react";
import styles from "./Layout.module.scss";

type LayouProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayouProps) => (
  <div className={styles.layout_container}>
    {children}
  </div>
);

export default Layout;
