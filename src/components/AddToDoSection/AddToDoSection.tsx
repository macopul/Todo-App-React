import { useState } from 'react';
import { useTaskStorage } from '../../hooks/useTaskStorage';
import styles from './AddToDoSection.module.scss';

const labels = {
  addTaskInputPlaceholder: 'Add New Task...',
};

const AddToDoSection = () => {
  // now we can use useTaskStorage in any place at any level - cause methods inside are operating on shared context state which is one for all children - look inside TaskStoreContextProvider.tsx and in App.tsx
  const { addTaskToList } = useTaskStorage();
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTaskButtonClick = () => {
    if (taskTitle !== '') {
      addTaskToList({ title: taskTitle, id: Math.random().toString(), checked: false });
      setTaskTitle('');
    } else {
      window.alert('The task can not be empty');
    }
  };

  return (
    <div className={styles.AddToDoSection}>
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

export default AddToDoSection;
