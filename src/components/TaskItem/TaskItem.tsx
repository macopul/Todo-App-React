import Checkbox from '../Checkbox/Checkbox';
import { useEffect, useRef, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import IconButton from '../IconButton/IconButton';
import clsx from 'clsx';
import styles from './TaskItem.module.scss';

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

  useEffect(() => {
    if (ref?.current && isEditable) {
      ref.current.focus();
    }
  }, [isEditable]);

  const handleOnInputBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (e.relatedTarget?.id === 'editButton') {
      return;
    } else {
      setIsEditbale(false);
    }
  };

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
        onBlur={handleOnInputBlur}
      />
      <IconButton
        customClass={clsx(styles.editIcon, {
          [styles.editIconIsActive]: isEditable && !checked,
        })}
        onClick={() => setIsEditbale(!isEditable)}
        id="editButton"
      >
        <AiFillEdit className={styles.buttonIcon} />
      </IconButton>
      <IconButton>
        <MdDelete className={styles.buttonIcon} />
      </IconButton>
    </div>
  );
};

export default TaskItem;
