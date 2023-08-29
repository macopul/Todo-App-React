import TaskItem from '../TaskItem/TaskItem';
import { TaskItemType } from '../../types/TaskItemType';

type TasksItemListType = {
  taskList: TaskItemType[];
};

const TasksItemList = ({ taskList }: TasksItemListType) => {
  console.log('taskListWas Rendered');
  return (
    <>
      {taskList.map((task) => (
        <TaskItem key={task.id} title={task.title} checked={task.checked} id={task.id} />
      ))}
    </>
  );
};

export default TasksItemList;
