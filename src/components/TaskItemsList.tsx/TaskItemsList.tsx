import TaskItem from '../TaskItem/TaskItem';
import { TaskItemType } from '../../types/TaskItemType';

type TasksItemListType = {
  taskList: TaskItemType[];
};

const TasksItemList = ({ taskList }: TasksItemListType) => {
  return (
    <div style={{marginTop:20}}>
      {taskList.map((task) => (
        <TaskItem key={task.id} title={task.title} checked={task.checked} id={task.id} />
      ))}
    </div>
  );
};

export default TasksItemList;
