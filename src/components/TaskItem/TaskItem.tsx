import styles from "./TaskItem.module.scss";
import Checkbox from "../Checkbox/Checkbox";
import { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import IconButton from "../IconButton/IconButton";
import clsx from "clsx";

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

  return (
    <div className={styles.TaskItem}>
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
        onBlur={(e) => {
          if (e.relatedTarget?.id === "editButton") {
            return;
          } else {
            setIsEditbale(false);
          }
        }}
      />
      <IconButton
        className={styles.editIcon}
        onClick={() => {
          setIsEditbale(!isEditable);
        }}
        id="editButton"
      >
        <AiFillEdit className={styles.buttonIcon} />
      </IconButton>
      <IconButton
        onClick={() => {
          setIsEditbale(false);
        }}
      >
        <MdDelete className={styles.buttonIcon} />
      </IconButton>
    </div>
  );
};

export default TaskItem;
