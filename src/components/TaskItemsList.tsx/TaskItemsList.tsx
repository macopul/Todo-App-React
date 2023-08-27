import TaskItem from '../TaskItem/TaskItem';
import { TaskItemType } from '../AddToDoSection/AddToDoSection';

type TasksItemListType = {
  taskList: TaskItemType[];
};

const TasksItemList = ({ taskList }: TasksItemListType) => {
  return (
    <>
      {taskList.map((task) => (
        <TaskItem message={task.title} completed={false} id={Math.random().toString()} />
      ))}
    </>
  );
};

export default TasksItemList;
