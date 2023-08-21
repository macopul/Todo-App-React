import Checkbox from '../Checkbox/Checkbox';
import { useEffect, useRef, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import IconButton from '../IconButton/IconButton';
import clsx from 'clsx';
import styles from './TaskItem.module.scss';
import UseClickOutside from '../../hooks/useClickOutside';

type TaskItemProps = {
  message: string;
  completed: boolean;
  messageEditable: boolean;
};

const TaskItem = ({
  message = 'first task',
  completed = false,
  messageEditable = false,
}: TaskItemProps) => {
  const [title, setTitle] = useState(message);
  const [checked, setChecked] = useState(completed);
  const [isEditable, setIsEditbale] = useState(messageEditable);
  const ref = useRef<HTMLInputElement>(null);

  UseClickOutside(ref, () => setIsEditbale(false), 'ignoreClickOutside');

  useEffect(() => {
    if (ref?.current && isEditable) {
      ref.current.focus();
    }
  }, [isEditable]);

  return (
    <div className={styles.TaskItemComponent}>
      <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      <input
        ref={ref}
        className={clsx(styles.taskInput, {
          [styles.taskInputEditable]: isEditable && !checked,
          [styles.taskInputCompleted]: checked,
        })}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={checked}
        onClick={() => {
          setIsEditbale(true);
        }}
      />
      <IconButton
        data-ignore-click-outside
        classname={clsx(styles.editButton, {
          [styles.editButtonIsActive]: isEditable && !checked,
        })}
        onClick={() => {
          setIsEditbale(!isEditable);
        }}
        id="editButton"
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
