import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import useClickOutside from "../../hooks/useClickOutside";
import Checkbox from "../Checkbox/Checkbox";
import IconButton from "../IconButton/IconButton";
import styles from "./TaskItem.module.scss";

type TaskItemProps = {
  message: string;
  completed: boolean;
  messageEditable: boolean;
};

const TaskItem = ({
  message = "first task",
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

  useClickOutside(() => setIsEditbale(false), ref);


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
