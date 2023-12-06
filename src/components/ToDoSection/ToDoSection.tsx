import { useTaskStorage } from '../../hooks/useTaskStorage';
import TaskGroupList from '../TaskGroupList/TaskGroupList';
import TasksItemList from '../TaskItemsList.tsx/TaskItemsList';
import AddToDoSection from '../AddToDoSection/AddToDoSection';
import styles from './TodoSection.module.scss';
// import clsx from 'clsx';

const TodoSection = () => {
  const { taskList, groups } = useTaskStorage();

  return (
    <div className={styles.TodoSectionComponent}>
      <TaskGroupList groupList={groups} />
      <TasksItemList taskList={taskList} />
      <AddToDoSection classname={styles.mainAddToDoSection}/>
    </div>
  );
};

export default TodoSection;
