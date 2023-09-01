import { useState } from 'react';
import { TaskItemType } from '../../types/TaskItemType';

type AddToDoProps = {
  message: string;
  addTaskToList: (args: TaskItemType) => void;
};

const AddToDoSection = ({ message, addTaskToList }: AddToDoProps) => {
  const [taskTitle, setTaskTitle] = useState(message);

  const handleAddTaskButtonClick = () =>
    addTaskToList({ title: taskTitle, id: Math.random().toString(), checked: false });

  return (
    <div className="to-do-action-container">
      <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
      <button onClick={handleAddTaskButtonClick}>Add New Task</button>
    </div>
  );
};

export default AddToDoSection;
