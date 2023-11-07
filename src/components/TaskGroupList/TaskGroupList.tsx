import { TaskItemGroupType } from '../../types/TaskItemGroupType';
import TaskGroup from '../TaskGroup/TaskGroup';

type GroupListType = {
  groupList: TaskItemGroupType[];
};

const TaskGroupList = ({ groupList }: GroupListType) => {
  return (
    <>
      {groupList.map((group) => (
        <TaskGroup
          key={group.groupId}
          taskList={group.taskList}
          groupId={group.groupId}
          groupTitle={group.groupTitle}
          isHidden = {group.isHidden}
        />
      ))}
    </>
  );
};

export default TaskGroupList;
