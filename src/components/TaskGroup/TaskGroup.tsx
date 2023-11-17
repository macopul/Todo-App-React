import TaskItem from '../TaskItem/TaskItem';
import { TaskItemGroupType } from '../../types/TaskItemGroupType';
import AddToDoSection from '../AddToDoSection/AddToDoSection';
import styles from './TaskGroup.module.scss';
import { TiDelete } from 'react-icons/ti';
import { BiEdit } from 'react-icons/bi';
import IconButton from '../IconButton/IconButton';
import clsx from 'clsx';
import { useTaskStorage } from '../../hooks/useTaskStorage';
import { useState, useEffect, useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import TaskCounter from '../TaskCounter/TaskCounter';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { UIEvent } from 'react';

const TaskGroup = ({ taskList, groupTitle, groupId, isHidden }: TaskItemGroupType) => {
  const [isGroupEditable, setIsGroupEditbale] = useState(false);
  const [isGroupHidden, setIsGroupHidden] = useState(isHidden);
  const inputRef = useRef<HTMLInputElement>(null);
  const iconRef = useRef<HTMLButtonElement>(null);
  const taskListRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const [isListScrolled, setIsListScrolled] = useState(false);
  useClickOutside(
    inputRef,
    () => {
      setIsGroupEditbale(false);
    },
    `ignoreClickOutside${groupId}`,
  );
  const { deleteTaskGroup, updateGroupTitle, groups, updateIsGroupHidden } = useTaskStorage();
  const [title, setTitle] = useState(groupTitle);
  const taskQuantity = groups.find((group) => group.groupId === groupId)!.taskList.length;
  const [taskCount, setTaskCount] = useState(taskQuantity);

  useEffect(() => {
    setTaskCount(taskQuantity);
  }, [taskQuantity]);

  useEffect(() => {
    if (!isGroupEditable) {
      updateGroupTitle(groupId, title);
    }
    if (inputRef?.current && isGroupEditable) {
      inputRef.current.focus();
    }
  }, [isGroupEditable]);

  const handleTaskListOnScroll = (event: UIEvent<HTMLDivElement>) => {
    setIsListScrolled(!!event.currentTarget.scrollTop);
  };

  return (
    <div className={clsx(styles.TaskGroup, !isGroupHidden && styles.active)}>
      <div
        className={clsx(styles.taskGroupHeader, !isGroupHidden && isListScrolled && styles.scrolledList)}
      >
        <input
          ref={inputRef}
          value={title}
          id={groupId}
          readOnly={!isGroupEditable}
          onChange={(e) => setTitle(e.target.value)}
          className={clsx(styles.groupInput, {
            [styles.groupEditable]: isGroupEditable,
          })}
        />
        <TaskCounter taskQuantity={taskCount} />
        <IconButton
          data-ignore-click-outside={`ignoreClickOutside${groupId}`}
          id={groupId}
          classname={clsx(styles.editButton, {
            [styles.editButtonActive]: isGroupEditable,
          })}
          onClick={() => {
            setIsGroupEditbale(!isGroupEditable);
          }}
        >
          <BiEdit className={styles.buttonIcon} />
        </IconButton>
        <IconButton
          classname={clsx(styles.deleteButton)}
          onClick={() => {
            deleteTaskGroup(groupId);
          }}
        >
          <TiDelete className={styles.buttonIcon} />
        </IconButton>
        <IconButton
          classname={clsx(styles.accordionIcon, { [styles.hidden]: isGroupHidden })}
          onClick={() => {
            setIsGroupHidden(!isGroupHidden);
            updateIsGroupHidden(groupId, !isGroupHidden);
          }}
          ref={iconRef}
        >
          <IoIosArrowDropdownCircle className={styles.buttonIcon} />
        </IconButton>
      </div>
      <div
        className={clsx(styles.taskListSection, { [styles.hidden]: isGroupHidden })}
        ref={accordionRef}
      >
        <div>
          <div
            className={clsx(styles.taskList)}
            ref={taskListRef}
            onScroll={handleTaskListOnScroll}
          >
            {taskList.map((task) => (
              <TaskItem
                key={task.id}
                title={task.title}
                checked={task.checked}
                id={task.id}
                groupId={task.groupId}
              />
            ))}
          </div>
          <div className={styles.AddToDoSection}>
            <AddToDoSection groupId={groupId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskGroup;
