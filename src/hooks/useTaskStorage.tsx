import { TaskItemType } from '../types/TaskItemType';
import { TaskItemGroupType } from '../types/TaskItemGroupType';
import { useTaskStoreContext } from './useTaskStoreContext';
import { isEqual } from 'lodash-es';

export const useTaskStorage = () => {
  const { taskStore, localStorageTaskStore, setTaskStore } = useTaskStoreContext();

  const groups = taskStore.groups;
  const taskList = taskStore.taskList;

  const addTaskGroup = (group: TaskItemGroupType) => {
    localStorageTaskStore.set({ ...taskStore, groups: [...groups, group] });
    const currentTaskStore = localStorageTaskStore.get();
    setTaskStore(currentTaskStore);
  };

  const deleteTaskGroup = (groupId: string) => {
    localStorageTaskStore.set({
      ...taskStore,
      groups: groups.filter((group) => group.groupId !== groupId),
    });
    const currentTaskStore = localStorageTaskStore.get();
    setTaskStore(currentTaskStore);
  };

  const updateGroupTitle = (groupId: string, title: string) => {
    const groupToUpdate = groups.find((group) => group.groupId === groupId);
    if (title === groupToUpdate?.groupTitle) {
      return;
    }
    const updatedGroups = groups.map((group) => {
      if (group.groupId === groupId) {
        group.groupTitle = title;
      }
      return group;
    });
    localStorageTaskStore.set({ taskList, groups: updatedGroups });
    const currentTaskStore = localStorageTaskStore.get();
    setTaskStore(currentTaskStore);
  };

  const addTask = (task: TaskItemType) => {
    if (task.groupId) {
      const actualGroupList = groups.find((group) => group.groupId === task.groupId);
      actualGroupList?.taskList.push(task);
      if (actualGroupList) {
        const updatedGroupList = groups.map((group) => {
          if (group.groupId === task.groupId) {
            return actualGroupList;
          }
          return group;
        });
        localStorageTaskStore.set({ ...taskStore, groups: updatedGroupList });
        const currentTaskStore = localStorageTaskStore.get();
        setTaskStore(currentTaskStore);
        return;
      }
    }
    localStorageTaskStore.set({ taskList: [...taskList, task], groups });
    const currentTaskStore = localStorageTaskStore.get();
    setTaskStore(currentTaskStore);
  };

  const updateTask = (task: TaskItemType) => {
    if (task.groupId) {
      const taskToUpdateInGroup = groups
        .find((group) => group.groupId === task.groupId)
        ?.taskList.find((item) => item.id == task.id);
      isEqual(task, taskToUpdateInGroup);
      if (isEqual(task, taskToUpdateInGroup)) {
        return;
      }
      const updatedGroups = groups.map((group) => {
        if (group.groupId === task.groupId) {
          group.taskList = group.taskList.map((item) =>
            item.id === taskToUpdateInGroup?.id ? task : item,
          );
        }
        return group;
      });
      localStorageTaskStore.set({ taskList, groups: updatedGroups });
      const currentTaskStore = localStorageTaskStore.get();
      setTaskStore(currentTaskStore);
      return;
    }
    const taskToUpdate = taskList.find((item) => item.id === task.id);
    isEqual(task, taskToUpdate);
    if (isEqual(task, taskToUpdate)) {
      return;
    }
    const updatedList = taskList.map((item) => (item.id === taskToUpdate?.id ? task : item));
    localStorageTaskStore.set({ taskList: updatedList, groups });
    const currentTaskStore = localStorageTaskStore.get();
    setTaskStore(currentTaskStore);
  };

  const deleteTask = (id: string, groupId?: string) => {
    if (groupId) {
      const groupWithTaskToDelete = groups.find((group) => group.groupId === groupId);
      const taskToDelete = groupWithTaskToDelete?.taskList.find((task) => task.id === id);
      if (groupWithTaskToDelete && taskToDelete) {
        const updatedGroupTaskList = groupWithTaskToDelete.taskList.filter(
          (task) => task !== taskToDelete,
        );
        groupWithTaskToDelete.taskList = updatedGroupTaskList;
        const updatedGroups = groups.map((group) =>
          group.groupId === groupId ? groupWithTaskToDelete : group,
        );
        localStorageTaskStore.set({ taskList, groups: updatedGroups });
        const currentTaskStore = localStorageTaskStore.get();
        setTaskStore(currentTaskStore);
      }
    }
    const taskToDelete = taskList.find((task) => task.id === id);
    if (taskToDelete) {
      const updatedList = taskList.filter((task) => task !== taskToDelete);
      localStorageTaskStore.set({ taskList: updatedList, groups });
      const currentTaskStore = localStorageTaskStore.get();
      setTaskStore(currentTaskStore);
    }
  };

  return {
    groups,
    taskList,
    addTaskGroup,
    addTask,
    updateTask,
    deleteTask,
    deleteTaskGroup,
    updateGroupTitle,
  };
};
