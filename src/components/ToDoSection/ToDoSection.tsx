import { useTaskStorage } from '../../hooks/useTaskStorage';
import AddToDoSection from '../AddToDoSection/AddToDoSection';
import TaskGroupList from '../TaskGroupList/TaskGroupList';
import TasksItemList from '../TaskItemsList.tsx/TaskItemsList';
import styles from './TodoSection.module.scss';

const TodoSection = () => {
  const { taskList, taskGroupList } = useTaskStorage();

  return (
    <div className={styles.TodoSectionComponent}>
      <TaskGroupList groupList={taskGroupList} />
      <TasksItemList taskList={taskList} />
      <AddToDoSection />
    </div>
  );
};

export default TodoSection;
