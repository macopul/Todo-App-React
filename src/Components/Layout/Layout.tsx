import { ReactNode } from "react";
import styles from "./Layout.module.scss";
import TodoSection from "../ToDoSection/ToDoSection";

// type LayouProps = {
//   children: ReactNode;
// };

const Layout = () => (
  <div className={styles.layout_container}>
    <TodoSection/>
  </div>
);

export default Layout;
