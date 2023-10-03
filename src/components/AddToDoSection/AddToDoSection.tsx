import { useState } from 'react';
import { useTaskStorage } from '../../hooks/useTaskStorage';
import styles from './AddToDoSection.module.scss';

const labels = {
  addTaskInputPlaceholder: 'Add New Group or Task...',
};

const AddToDoSection = () => {
  // now we can use useTaskStorage in any place at any level - cause methods inside are operating on shared context state which is one for all children - look inside TaskStoreContextProvider.tsx and in App.tsx
  const { addTask, addGroupToList } = useTaskStorage();
  const [Title, setTitle] = useState('');

  const handleAddButton = (action: string) => {
    if (!Title) {
      window.alert('The task can not be empty');
      return;
    }
    switch (action) {
      case 'task':
        addTask({ title: Title, id: Math.random().toString(), checked: false });
        break;
      case 'group':
        addGroupToList({ groupTitle: Title, groupId: Math.random().toString(), taskList: [] });
        break;
    }
    setTitle('');
  };

  return (
    <div className={styles.AddToDoSection}>
      <input
        type="text"
        value={Title}
        placeholder={labels.addTaskInputPlaceholder}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => handleAddButton('task')}>Add New Task</button>
      <button onClick={() => handleAddButton('group')}>Add New Group</button>
    </div>
  );
};

export default AddToDoSection;
