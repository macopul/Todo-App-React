import { useState, useEffect } from 'react';

export type TaskItemType = {
  title: string;
  checked?: boolean;
};

export const useTaskStorage = () => {
  const [taskList, setTaskList] = useState<TaskItemType[]>(
    JSON.parse(localStorage.getItem('tasks-list')) || [],
  );

  useEffect(() => {
    localStorage.setItem('tasks-list', JSON.stringify(taskList));
  }, [taskList]);

  const addTaskToList = ({ checked = false, ...rest }: TaskItemType) => {
    setTaskList([...taskList, { ...rest, checked }]);
  };

  return { addTaskToList, taskList };
};
