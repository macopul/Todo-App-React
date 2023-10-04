import { useTaskStorage } from '../../hooks/useTaskStorage';
import AddToDoSection from '../AddToDoSection/AddToDoSection';
import TaskGroupList from '../TaskGroupList/TaskGroupList';
import TasksItemList from '../TaskItemsList.tsx/TaskItemsList';
import styles from './TodoSection.module.scss';

const TodoSection = () => {
  const { taskList, groups } = useTaskStorage();

  return (
    <div className={styles.TodoSectionComponent}>
      <TaskGroupList groupList={groups} />
      <TasksItemList taskList={taskList} />
      <AddToDoSection />
    </div>
  );
};

export default TodoSection;
