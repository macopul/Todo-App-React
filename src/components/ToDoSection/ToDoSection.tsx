import AddToDoSection from '../AddToDoSection/AddToDoSection';
import TasksItemList from '../TaskItemsList.tsx/TaskItemsList';
import styles from './TodoSection.module.scss';
import { useTaskStorage } from '../../hooks/useTaskStorage';

const TodoSection = () => {

const { taskList, addTaskToList } = useTaskStorage()

  return (
    <div className={styles.TodoSectionComponent}>
      <TasksItemList taskList={taskList} />
      <AddToDoSection addTaskToList={addTaskToList} message="Add new Task" />
    </div>
  );
};

export default TodoSection;
