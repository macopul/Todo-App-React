import { TaskItemType } from '../types/TaskItemType';
import { useTaskStoreContext } from './useTaskStoreContext';
import { isEqual } from 'lodash-es';

export const useTaskStorage = () => {
  const { localStorageTaskStore, setTaskList, taskList } = useTaskStoreContext();

  const addTaskToList = ({ title, id, checked }: TaskItemType) => {
    localStorageTaskStore.set([...taskList, { title, id, checked }]);
    const currentTasksList = localStorageTaskStore.get();
    setTaskList(currentTasksList);
  };

  const updateTask = (task: TaskItemType) => {
    const taskToUpdate = taskList.find((item) => item.id === task.id);
    isEqual(task, taskToUpdate);
    if (isEqual(task, taskToUpdate)) {
      return;
    }
    const listInStorage: TaskItemType[] = localStorageTaskStore.get();
    const updatedList = listInStorage.map((item) => (item.id === taskToUpdate?.id ? task : item));
    localStorageTaskStore.set(updatedList);
    const currentTasksList = localStorageTaskStore.get();
    setTaskList(currentTasksList);
  };

  const deleteTask = (id: string) => {
    const taskToDelete = taskList.find((task) => (task.id = id));
    if (taskToDelete) {
      const updatedList = taskList.filter((task) => task !== taskToDelete);
      localStorageTaskStore.set(updatedList);
      const currentTasksList = localStorageTaskStore.get();
      setTaskList(currentTasksList);
    }
  };

  return { addTaskToList, taskList, updateTask, deleteTask };
};
