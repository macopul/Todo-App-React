/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import { TASK_STORAGE_KEY } from '../constants/storage';
import { createLocalStorageStore } from '../tools/sotrage';
import { TaskItemType } from '../types/TaskItemType';
import { TaskItemGroupType } from '../types/TaskItemGroupType';

type TaskStoreType = {
  groups: TaskItemGroupType[];
  taskList: TaskItemType[];
};

export type TaskStoreContextType = {
  taskStore: TaskStoreType;
  setTaskStore: React.Dispatch<React.SetStateAction<TaskStoreType>>;
  localStorageTaskStore: {
    get: () => TaskStoreType;
    set: (taskStore: TaskStoreType) => void;
  };
};

// set empty initial values of context
export const TaskStoreContext = createContext<TaskStoreContextType>({
  taskStore: { groups: [], taskList: [] },
  setTaskStore: () => {},
  localStorageTaskStore: {
    get: () => {
      return { groups: [], taskList: [] };
    },
    set() {},
  },
});

export type TaskStoreProviderType = {
  children: React.ReactNode;
};

export function TaskStoreProvider({ children }: TaskStoreProviderType) {
  const { set, get } = createLocalStorageStore<TaskStoreType>();
  const [taskStore, setTaskStore] = useState(get(TASK_STORAGE_KEY) || { groups: [], taskList: [] });

  const localStorageTaskStore = {
    get: () => get(TASK_STORAGE_KEY) || { groups: [], taskList: [] },
    set: (taskStore: TaskStoreType) => set(TASK_STORAGE_KEY, taskStore),
  };

  const value = {
    taskStore,
    setTaskStore,
    localStorageTaskStore,
  };
  return <TaskStoreContext.Provider value={value}>{children}</TaskStoreContext.Provider>;
}
