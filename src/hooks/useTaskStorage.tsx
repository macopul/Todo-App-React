import { TaskItemType } from '../types/TaskItemType';
import { TaskItemGroupType } from '../types/TaskItemGroupType';
import { useTaskStoreContext } from './useTaskStoreContext';
import { isEqual } from 'lodash-es';

export const useTaskStorage = () => {
  const {
    localStorageTaskListStore,
    setTaskList,
    taskList,
    localStorageTaskGroupStore,
    setTaskGroupList,
    taskGroupList,
  } = useTaskStoreContext();

  const addGroupToList = (group: TaskItemGroupType) => {
    localStorageTaskGroupStore.set([...taskGroupList, group]);
    const currentGroupList = localStorageTaskGroupStore.get();
    setTaskGroupList(currentGroupList);
  };

  const addTask = (task: TaskItemType) => {
    if (task.groupId) {
      const actualGroupList = taskGroupList.find((group) => group.groupId === task.groupId);
      actualGroupList?.taskList.push(task);
      if (actualGroupList) {
        const updatedGroupList = taskGroupList.map((group) => {
          if (group.groupId === task.groupId) {
            return actualGroupList;
          }
          return group;
        });
        localStorageTaskGroupStore.set(updatedGroupList);
        const currentGroupList = localStorageTaskGroupStore.get();
        setTaskGroupList(currentGroupList);
        return;
      }
    }
    localStorageTaskListStore.set([...taskList, task]);
    const currentTasksList = localStorageTaskListStore.get();
    setTaskList(currentTasksList);
  };

  const updateTask = (task: TaskItemType) => {
    if (task.groupId) {
      const taskToUpdateInGroup = taskGroupList
        .find((group) => group.groupId === task.groupId)
        ?.taskList.find((item) => item.id == task.id);
      isEqual(task, taskToUpdateInGroup);
      if (isEqual(task, taskToUpdateInGroup)) {
        return;
      }
      const groupsInStorage = localStorageTaskGroupStore.get();
      const updatedGroups = groupsInStorage.map((group) => {
        if (group.groupId === task.groupId) {
          group.taskList = group.taskList.map((item) =>
            item.id === taskToUpdateInGroup?.id ? task : item,
          );
        }
        return group;
      });
      localStorageTaskGroupStore.set(updatedGroups);
      const currentGroupList = localStorageTaskGroupStore.get();
      setTaskGroupList(currentGroupList);
      return;
    }
    const taskToUpdate = taskList.find((item) => item.id === task.id);
    isEqual(task, taskToUpdate);
    if (isEqual(task, taskToUpdate)) {
      return;
    }
    const listInStorage = localStorageTaskListStore.get();
    const updatedList = listInStorage.map((item) => (item.id === taskToUpdate?.id ? task : item));
    localStorageTaskListStore.set(updatedList);
    const currentTasksList = localStorageTaskListStore.get();
    setTaskList(currentTasksList);
  };

  const deleteTask = (id: string, groupId?: string) => {
    if (groupId) {
      const groupWithTaskToDelete = taskGroupList.find((group) => group.groupId === groupId);
      const taskToDelete = groupWithTaskToDelete?.taskList.find((task) => task.id === id);
      if (groupWithTaskToDelete && taskToDelete) {
        const updatedGroupTaskList = groupWithTaskToDelete.taskList.filter(
          (task) => task !== taskToDelete,
        );
        groupWithTaskToDelete.taskList = updatedGroupTaskList;
        const updatedGroups = taskGroupList.map((group) =>
          group.groupId === groupId ? groupWithTaskToDelete : group,
        );
        localStorageTaskGroupStore.set(updatedGroups);
        const currentGroupList = localStorageTaskGroupStore.get();
        setTaskGroupList(currentGroupList);
      }
    }
    const taskToDelete = taskList.find((task) => task.id === id);
    if (taskToDelete) {
      const updatedList = taskList.filter((task) => task !== taskToDelete);
      localStorageTaskListStore.set(updatedList);
      const currentTasksList = localStorageTaskListStore.get();
      setTaskList(currentTasksList);
    }
  };

  return {
    taskGroupList,
    taskList,
    addGroupToList,
    addTask,
    updateTask,
    deleteTask,
  };
};
