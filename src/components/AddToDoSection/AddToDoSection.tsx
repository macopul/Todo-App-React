import { useState } from 'react';

export type TaskItemType = {
  title: string;
  checked?: boolean;
};

type AddToDoProps = {
  message: string;
  addTaskToList: (args: TaskItemType) => void;
};

const AddToDoSection = ({ message, addTaskToList }: AddToDoProps) => {
  const [taskTitle, setTaskTitle] = useState(message);

  const handleAddTaskButtonClick = () => addTaskToList({ title: taskTitle, checked: false });

  return (
    <div className="to-do-action-container">
      <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
      <button onClick={handleAddTaskButtonClick}>Add New Task</button>
    </div>
  );
};

export default AddToDoSection;
