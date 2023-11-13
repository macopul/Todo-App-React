import { useState } from 'react';
import { useTaskStorage } from '../../hooks/useTaskStorage';
import styles from './AddToDoSection.module.scss';

const labels = {
  addTaskInputPlaceholder: 'Add New Task...',
  addTaskOrGroupInputPlaceholder: 'Add New Group or Task...',
};

type AddToDoSectionType = {
  groupId?: string;
};

const AddToDoSection = ({ groupId }: AddToDoSectionType) => {
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
        addTask({
          title: title,
          id: Math.random().toString(),
          checked: false,
          groupId: groupId,
        });
        break;

      case 'group':
        addTaskGroup({
          groupTitle: title,
          groupId: Math.random().toString(),
          taskList: [],
          isHidden: false,
        });
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
        placeholder={
          groupId ? labels.addTaskInputPlaceholder : labels.addTaskOrGroupInputPlaceholder
        }
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          handleAddButton('task');
        }}
      >
        Add New Task
      </button>
      {!groupId && <button onClick={() => handleAddButton('group')}>Add New Group</button>}
    </div>
  );
};

export default AddToDoSection;
