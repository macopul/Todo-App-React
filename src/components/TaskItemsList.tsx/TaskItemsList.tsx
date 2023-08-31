import TaskItem from '../TaskItem/TaskItem';
import { TaskItemType } from '../../types/TaskItemType';

type TasksItemListType = {
  taskList: TaskItemType[];
};

const TasksItemList = ({ taskList }: TasksItemListType) => {
  return (
    <>
      {taskList.map((task) => (
        <TaskItem key={task.id} title={task.title} checked={task.checked} id={task.id} />
      ))}
    </>
  );
};

export default TasksItemList;
