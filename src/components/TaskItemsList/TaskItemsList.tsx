import TaskItem from '../TaskItem/TaskItem';
import { TaskItemType } from '../../types/TaskItemType';
import styles from './TaskItemsList.module.scss'

type TasksItemListType = {
  taskList: TaskItemType[];
};

const TasksItemList = ({ taskList }: TasksItemListType) => {
  return (
    <div className={styles.taskList} data-active='true'>
      {taskList.map((task) => (
        <TaskItem key={task.id} title={task.title} checked={task.checked} id={task.id} />
      ))}
    </div>
  );
};

export default TasksItemList;
