import { useState } from 'react';
import { useTaskStorage } from '../../hooks/useTaskStorage';
import styles from './AddToDoSection.module.scss';

const labels = {
  addTaskInputPlaceholder: 'Add New Group or Task...',
};

const AddToDoSection = () => {
  // now we can use useTaskStorage in any place at any level - cause methods inside are operating on shared context state which is one for all children - look inside TaskStoreContextProvider.tsx and in App.tsx
  const { addTask, addTaskGroup } = useTaskStorage();
  const [title, setTitle] = useState('');

  const handleAddButton = (action: string) => {
    if (!title) {
      window.alert('The task can not be empty');
      return;
    }
    switch (action) {
      case 'task':
        addTask({ title: title, id: Math.random().toString(), checked: false });
        break;
      case 'group':
        addTaskGroup({ groupTitle: title, groupId: Math.random().toString(), taskList: [] });
        break;
      default:
        break;
    }
    setTitle('');
  };

  return (
    <div className={styles.AddToDoSection}>
      <input
        type="text"
        value={title}
        placeholder={labels.addTaskInputPlaceholder}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => handleAddButton('task')}>Add New Task</button>
      <button onClick={() => handleAddButton('group')}>Add New Group</button>
    </div>
  );
};

export default AddToDoSection;
