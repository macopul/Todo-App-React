import { TaskItemType } from '../types/TaskItemType';
import { useTaskStoreContext } from './useTaskStoreContext';

export const useTaskStorage = () => {
  const { localStorageTaskStore, setTaskList, taskList } = useTaskStoreContext();

  const addTaskToList = ({ title, id, checked }: TaskItemType) => {
    localStorageTaskStore.set([...taskList, { title, id, checked }]);
    const currentTasksList = localStorageTaskStore.get();
    setTaskList(currentTasksList);
  };

  return { addTaskToList, taskList };
};
