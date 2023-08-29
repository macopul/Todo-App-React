import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useClickOutside } from '../../hooks/useClickOutside';
import { TaskItemType } from '../../types/TaskItemType';
import { Checkbox } from '../Checkbox/Checkbox';
import IconButton from '../IconButton/IconButton';
import styles from './TaskItem.module.scss';

const TaskItem = ({ title, checked, id }: TaskItemType) => {
  const [taskTitle, setTitle] = useState(title);
  const [taskChecked, setChecked] = useState(checked);
  const [isEditable, setIsEditbale] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const ingnoreClickOutsideId = `ignoreClickOutside${id}`
  useClickOutside(ref, () => setIsEditbale(false), ingnoreClickOutsideId);

  useEffect(() => {
    if (ref?.current && isEditable) {
      ref.current.focus();
    }
  }, [isEditable]);

  return (
    <div className={styles.TaskItemComponent}>
      <Checkbox checked={taskChecked} onChange={() => setChecked(!taskChecked)} />
      <input
        ref={ref}
        // id={id}
        className={clsx(styles.taskInput, {
          [styles.taskInputEditable]: isEditable && !taskChecked,
          [styles.taskInputCompleted]: taskChecked,
        })}
        type="text"
        value={taskTitle}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={taskChecked}
        onClick={() => {
          setIsEditbale(true);
        }}
      />
      <IconButton
        data-ignore-click-outside={ingnoreClickOutsideId}
        // id={id}
        classname={clsx(styles.editButton, {
          [styles.editButtonIsActive]: isEditable && !taskChecked,
        })}
        onClick={() => {
          setIsEditbale(!isEditable);
        }}
      >
        <AiFillEdit className={styles.buttonIcon} />
      </IconButton>
      <IconButton classname={clsx(styles.deleteButton)}>
        <MdDelete className={styles.buttonIcon} />
      </IconButton>
    </div>
  );
};

export default TaskItem;
