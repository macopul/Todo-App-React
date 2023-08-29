import { useTaskStorage } from '../../hooks/useTaskStorage';
import AddToDoSection from '../AddToDoSection/AddToDoSection';
import TasksItemList from '../TaskItemsList.tsx/TaskItemsList';
import styles from './TodoSection.module.scss';

const TodoSection = () => {
  const { taskList, addTaskToList } = useTaskStorage();

  return (
    <div className={styles.TodoSectionComponent}>
      <TasksItemList taskList={taskList} />
      <AddToDoSection addTaskToList={addTaskToList} />
    </div>
  );
};

export default TodoSection;
