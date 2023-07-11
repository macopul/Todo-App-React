import TaskItem from "../TaskItem/TaskItem";
import styles from "./TodoSection.module.scss";

const TodoSection = () => {
  return (
    <div className={styles["todo-section"]}>
      <TaskItem
        message={"first task"}
        completed={false}
        messageEditable={false}
      />
    </div>
  );
};

export default TodoSection;
