import TaskItem from '../TaskItem/TaskItem';
import { TaskItemGroupType } from '../../types/TaskItemGroupType';
import styles from './TaskGroup.module.scss';
import AddToDoSection from '../AddToDoSection/AddToDoSection';

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
      <AddToDoSection groupId={groupId} />
    </div>
  );
};

export default TaskGroup;
