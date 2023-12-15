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
      <div className={styles.tasksContentContainer}>
        <TaskGroupList groupList={groups} />
        <TasksItemList taskList={taskList} />
      </div>
      <AddToDoSection
        classname={styles.mainAddToDoSection}
        buttonSectionClassname={styles.mainAddToDoSectionButtonSection}
      />
    </div>
  );
};

export default TodoSection;
