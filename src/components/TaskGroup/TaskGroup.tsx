import TaskItem from '../TaskItem/TaskItem';
import { TaskItemGroupType } from '../../types/TaskItemGroupType';
import GroupAddToDoSection from '../AddToDoInGroupSection/GroupAddToDoSection';
import styles from './TaskGroup.module.scss'

const TaskGroup = ({ taskList, groupTitle, groupId }: TaskItemGroupType) => {
  return (
    <div className={styles.TaskGroup}>
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
    </div>
  );
};

export default TaskGroup;
