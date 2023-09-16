import { useState, useRef } from 'react';
import { useTaskStorage } from '../../hooks/useTaskStorage';
import styles from './AddToDoSection.module.scss';

const labels = {
  addTaskInputPlaceholder: 'Add New Task...',
};

const AddToDoSection = () => {
  // now we can use useTaskStorage in any place at any level - cause methods inside are operating on shared context state which is one for all children - look inside TaskStoreContextProvider.tsx and in App.tsx
  const { addTaskToList } = useTaskStorage();
  const [taskTitle, setTaskTitle] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  // TODO: WHERE IS SAFE CHECK FOR EMPTY TASK TITLE? WHERE IS CLEARANCE OF INPUT AFTER ADDING TASK?
  const handleAddTaskButtonClick = () => {
    addTaskToList({ title: taskTitle, id: Math.random().toString(), checked: false });
    if (ref.current) {
      ref.current.value = '';
      ref.current.placeholder = labels.addTaskInputPlaceholder;
    }
  };

  return (
    <div className={styles.AddToDoSection}>
      <input
        ref={ref}
        type="text"
        placeholder={labels.addTaskInputPlaceholder}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAddTaskButtonClick}>Add New Task</button>
    </div>
  );
};

export default AddToDoSection;
