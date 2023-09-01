import { useState } from 'react';
import { TaskItemType } from '../types/TaskItemType';
import { isEqual } from 'lodash-es';

export const useTaskStorage = () => {
  const [taskList, setTaskList] = useState<TaskItemType[]>(
    JSON.parse(localStorage.getItem('tasks-list')) || [],
  );

  const addTaskToList = ({ title, id, checked }: TaskItemType) => {
    localStorage.setItem('tasks-list', JSON.stringify([...taskList, { title, id, checked }]));
    const currentTasksList = getTaskList();
    setTaskList(currentTasksList);
  };

  const getTaskList = () => {
    return JSON.parse(localStorage.getItem('tasks-list'));
  };

  const updateTask = (task: TaskItemType) => {
    const taskToUpdate = taskList.find((item) => item.id === task.id);
    isEqual(task, taskToUpdate);
    if (!isEqual(task, taskToUpdate)) {
      const listInStorage: TaskItemType[] = getTaskList();
      const updatedList = listInStorage.map((item) => (item.id === taskToUpdate?.id ? task : item));
      localStorage.setItem('tasks-list', JSON.stringify(updatedList));
      const currentTasksList = getTaskList();
      setTaskList(currentTasksList);
    }
  };

  return { addTaskToList, taskList, updateTask };
};
