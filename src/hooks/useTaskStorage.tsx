import { useState } from 'react';
import { TaskItemType } from '../types/TaskItemType';

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

  return { addTaskToList, taskList };
};
