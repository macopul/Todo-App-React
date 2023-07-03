import styles from "./TaskItem.module.scss";
import Checkbox from "../Checkbox/Checkbox";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import IconButton from "../IconButton/IconButton";


const initialTaskState: TaskItemProps = {
  message: "first task",
  completed: true,
};


type TaskItemProps = {
  message: string;
  completed: boolean;
};

const editIconStyles = {
  color:'red',
  width: '10px',
  heigth: '10px',
}
 


const TaskItem = ({ message , completed = false }: TaskItemProps) => {
  const [taskState, setTaskState] = useState(initialTaskState);
  const [checked, setChecked] = useState(completed);

  console.log(taskState);

  return (
    <div className={styles.TaskItem}>
      <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      <p>{taskState.message}</p>
      <IconButton customClasses={styles.editIcon}>
        <AiFillEdit className={styles.buttonIcon} />
      </IconButton>
      <IconButton>
        <MdDelete className={styles.buttonIcon} />
      </IconButton>
    </div>
  );
};

export default TaskItem;
