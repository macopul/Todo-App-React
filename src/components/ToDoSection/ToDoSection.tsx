import { useTaskStorage } from '../../hooks/useTaskStorage';
import AddToDoSection from '../AddToDoSection/AddToDoSection';
import TaskGroupList from '../TaskGroupList/TaskGroupList';
import TasksItemList from '../TaskItemsList.tsx/TaskItemsList';
import ThemeModeIcon from '../themeModeIcon/themeModeIcon';
import styles from './TodoSection.module.scss';

const TodoSection = () => {
  const { taskList, groups } = useTaskStorage();

  return (
    <div className={styles.TodoSectionComponent}>
      <ThemeModeIcon/>
      <TaskGroupList groupList={groups} />
      <TasksItemList taskList={taskList} />
      <AddToDoSection />
    </div>
  );
};

export default TodoSection;
