import TaskItem from '../TaskItem/TaskItem';
import { TaskItemGroupType } from '../../types/TaskItemGroupType';
import GroupAddToDoSection from '../AddToDoInGroupSection/GroupAddToDoSection';

const TaskGroup = ({ taskList, groupTitle, groupId }: TaskItemGroupType) => {
  return (
    <>
      <h2>{groupTitle}</h2>
      {taskList.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          checked={task.checked}
          id={task.id}
          groupId={task.groupId}
        />
      ))}
      <GroupAddToDoSection groupId={groupId} />
    </>
  );
};

export default TaskGroup;
