import { useState } from 'react';
import { useTaskStorage } from '../../hooks/useTaskStorage';

const labels = {
  addTaskInputPlaceholder: 'Add New Task...',
};

type GroupAddToDoSectionType = {
  groupId: string;
};

const GroupAddToDoSection = ({ groupId }: GroupAddToDoSectionType) => {
  const { addTask } = useTaskStorage();
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTaskButtonClick = () => {
    if (!taskTitle) {
      window.alert('The task can not be empty');
      return;
    }
    addTask({
      title: taskTitle,
      id: Math.random().toString(),
      checked: false,
      groupId: groupId,
    });
    setTaskTitle('');
  };

  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        placeholder={labels.addTaskInputPlaceholder}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAddTaskButtonClick}>Add New Task</button>
    </div>
  );
};

export default GroupAddToDoSection;
