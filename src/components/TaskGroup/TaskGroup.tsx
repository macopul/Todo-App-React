import TaskItem from '../TaskItem/TaskItem';
import { TaskItemGroupType } from '../../types/TaskItemGroupType';
import styles from './TaskGroup.module.scss';
import AddToDoSection from '../AddToDoSection/AddToDoSection';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import IconButton from '../IconButton/IconButton';
import { useRef } from 'react';
import clsx from 'clsx';

const TaskGroup = ({ taskList, groupTitle, groupId }: TaskItemGroupType) => {
  const ref = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleAccordionOnClick = () => {
    ref.current?.classList.toggle(styles.active);
    iconRef.current?.classList.toggle(styles.active);
  };

  return (
    <div className={styles.TaskGroup}>
      <div className={clsx(styles.taskGroupHeader)}>
        <h2>{groupTitle}</h2>
        <div className={styles.accordionIcon} ref={iconRef}>
          <IconButton onClick={handleAccordionOnClick}>
            <IoIosArrowDropdownCircle />
          </IconButton>
        </div>
      </div>
      <div ref={ref} className={clsx(styles.taskList)}>
        <div>
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
      </div>
    </div>
  );
};

export default TaskGroup;
