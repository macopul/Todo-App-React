import TaskItem from '../TaskItem/TaskItem';
import { TaskItemGroupType } from '../../types/TaskItemGroupType';
import AddToDoSection from '../AddToDoSection/AddToDoSection';
import styles from './TaskGroup.module.scss';
import { TiDelete } from 'react-icons/ti';
import { BiEdit } from'react-icons/bi';
import IconButton from '../IconButton/IconButton';
import clsx from 'clsx';
import { useTaskStorage } from '../../hooks/useTaskStorage';
import Title from '../Title/Title';
import { useState, useEffect, useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

const TaskGroup = ({ taskList, groupTitle, groupId }: TaskItemGroupType) => {
  const [isGroupEditable, setIsGroupEditbale] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  useClickOutside(
    ref,
    () => {
      setIsGroupEditbale(false);
    },
    `ignoreClickOutside${groupId}`,
  );
  const { deleteTaskGroup, updateGroupTitle } = useTaskStorage();
  const [title, setTitle] = useState(groupTitle);

  useEffect(() => {
    if (!isGroupEditable) {
      updateGroupTitle(groupId, title);
    }
  }, [isGroupEditable]);

  useEffect(() => {
    if (ref?.current && isGroupEditable) {
      ref.current.focus();
    }
  }, [isGroupEditable]);

  return (
    <div className={styles.TaskGroup}>
      <div className={styles.taskGroupHeader}>
        <Title
          ref={ref}
          value={title}
          id={groupId}
          readonly={!isGroupEditable}
          onChange={(e) => setTitle(e.target.value)}
          classname={clsx(styles.groupInput, {
            [styles.groupEditable]: isGroupEditable,
          })}
        />
        <IconButton
          data-ignore-click-outside={`ignoreClickOutside${groupId}`}
          id={groupId}
          classname={clsx(styles.editButton, {
            [styles.editButtonActive]: isGroupEditable,
          })}
          onClick={() => {
            setIsGroupEditbale(!isGroupEditable);
          }}
        >
          <BiEdit className={styles.buttonIcon} />
        </IconButton>
        <IconButton classname={clsx(styles.deleteButton)} onClick={() => deleteTaskGroup(groupId)}>
          <TiDelete className={styles.buttonIcon} />
        </IconButton>
      </div>
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
