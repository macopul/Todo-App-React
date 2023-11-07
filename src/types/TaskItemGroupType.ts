import { TaskItemType } from './TaskItemType';

export type TaskItemGroupType = {
  groupId: string;
  groupTitle: string;
  taskList: TaskItemType[];
  isHidden: boolean;
};
