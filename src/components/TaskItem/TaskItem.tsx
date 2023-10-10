import Checkbox from '../Checkbox/Checkbox';
import { useEffect, useRef, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import IconButton from '../IconButton/IconButton';
import clsx from 'clsx';
import styles from './TaskItem.module.scss';
import useClickOutside from '../../hooks/useClickOutside';
import { TaskItemType } from '../../types/TaskItemType';
import { useTaskStorage } from '../../hooks/useTaskStorage';

const TaskItem = ({ title, checked, id, groupId }: TaskItemType) => {
  const [taskTitle, setTaskTitle] = useState(title);
  const [isTaskChecked, setIsTaskChecked] = useState(checked);
  const [isTaskEditable, setIsTaskEditbale] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  useClickOutside(ref, () => setIsTaskEditbale(false), `ignoreClickOutside${id}`);
  const { updateTask, deleteTask } = useTaskStorage();

  useEffect(() => {
    if (!isTaskEditable) {
      updateTask({ title: taskTitle, id, checked: isTaskChecked, groupId: groupId });
    }
  }, [isTaskEditable, isTaskChecked]);

  useEffect(() => {
    if (ref?.current && isTaskEditable) {
      ref.current.focus();
    }
  }, [isTaskEditable]);

  return (
    <div className={styles.TaskItemComponent}>
      <Checkbox checked={isTaskChecked} onChange={() => setIsTaskChecked(!isTaskChecked)} />
      <input
        ref={ref}
        id={id}
        className={clsx(styles.taskInput, {
          [styles.taskEditable]: isTaskEditable && !isTaskChecked,
          [styles.taskChecked]: isTaskChecked,
        })}
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        readOnly={isTaskChecked}
        onClick={() => {
          setIsTaskEditbale(true);
        }}
      />
      <IconButton
        data-ignore-click-outside={`ignoreClickOutside${id}`}
        id={id}
        classname={clsx(styles.editButton, {
          [styles.editButtonActive]: isTaskEditable && !isTaskChecked,
        })}
        onClick={() => {
          setIsTaskEditbale(!isTaskEditable);
        }}
      >
        <AiFillEdit className={styles.buttonIcon} />
      </IconButton>
      <IconButton classname={clsx(styles.deleteButton)} onClick={() => deleteTask(id, groupId)}>
        <MdDelete className={styles.buttonIcon} />
      </IconButton>
    </div>
  );
};

export default TaskItem;
