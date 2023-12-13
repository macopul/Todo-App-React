import { useTaskStorage } from '../../hooks/useTaskStorage';
import TaskGroupList from '../TaskGroupList/TaskGroupList';
import TasksItemList from '../TaskItemsList/TaskItemsList';
import ThemeButton from '../ThemeButton/ThemeButton';
import AddToDoSection from '../AddToDoSection/AddToDoSection';
import styles from './TodoSection.module.scss';

const TodoSection = () => {
  const { taskList, groups } = useTaskStorage();

  return (
    <div className={styles.TodoSectionComponent}>
      <ThemeButton />
      <div className={styles.contentContainer}>
        <TaskGroupList groupList={groups} />
        <TasksItemList taskList={taskList} />
      </div>
      <AddToDoSection classname={styles.mainAddToDoSection} />
    </div>
  );
};

export default TodoSection;
