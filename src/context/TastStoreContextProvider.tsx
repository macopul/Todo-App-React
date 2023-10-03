/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import { TASKS_LIST_STORAGE_KEY, TASK_GROUPS_STORAGE_KEY } from '../constants/storage';
import { createLocalStorageStore } from '../tools/sotrage';
import { TaskItemType } from '../types/TaskItemType';
import { TaskItemGroupType } from '../types/TaskItemGroupType';

export type TaskStoreContextType = {
  taskGroupList: TaskItemGroupType[];
  setTaskGroupList: React.Dispatch<React.SetStateAction<TaskItemGroupType[]>>;
  localStorageTaskGroupStore: {
    get: () => TaskItemGroupType[];
    set: (taskGroupList: TaskItemGroupType[]) => void;
  };
  taskList: TaskItemType[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskItemType[]>>;
  localStorageTaskListStore: { get: () => TaskItemType[]; set: (taskList: TaskItemType[]) => void };
};

// set empty initial values of context
export const TaskStoreContext = createContext<TaskStoreContextType>({
  taskGroupList: [],
  setTaskGroupList: () => {},
  localStorageTaskGroupStore: { get: () => [], set() {} },
  taskList: [],
  setTaskList: () => {},
  localStorageTaskListStore: { get: () => [], set() {} },
});

export type TaskStoreProviderType = {
  children: React.ReactNode;
};

export function TaskStoreProvider({ children }: TaskStoreProviderType) {
  const { set: setListOfGroups, get: getListOfGroups } =
    createLocalStorageStore<TaskItemGroupType[]>();
  const [taskGroupList, setTaskGroupList] = useState(
    getListOfGroups(TASK_GROUPS_STORAGE_KEY) || [],
  );

  const localStorageTaskGroupStore = {
    get: () => getListOfGroups(TASK_GROUPS_STORAGE_KEY) || [],
    set: (taskGroupList: TaskItemGroupType[]) =>
      setListOfGroups(TASK_GROUPS_STORAGE_KEY, taskGroupList),
  };

  const { set: setListOfTasks, get: getListOftasks } = createLocalStorageStore<TaskItemType[]>();
  const [taskList, setTaskList] = useState(getListOftasks(TASKS_LIST_STORAGE_KEY) || []);

  const localStorageTaskListStore = {
    get: () => getListOftasks(TASKS_LIST_STORAGE_KEY) || [],
    set: (taskList: TaskItemType[]) => setListOfTasks(TASKS_LIST_STORAGE_KEY, taskList),
  };

  const value = {
    taskList,
    setTaskList,
    localStorageTaskListStore,
    taskGroupList,
    setTaskGroupList,
    localStorageTaskGroupStore,
  };
  return <TaskStoreContext.Provider value={value}>{children}</TaskStoreContext.Provider>;
}
