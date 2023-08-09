import styles from "./Layout.module.scss";
import TodoSection from "../ToDoSection/ToDoSection";

const Layout = () => (
  <div className={styles.LayoutComponent}>
    <TodoSection />
  </div>
);

export default Layout;
