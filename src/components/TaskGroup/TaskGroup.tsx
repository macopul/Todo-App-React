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
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const TaskGroup = ({ taskList, groupTitle, groupId }: TaskItemGroupType) => {
  const [isGroupEditable, setIsGroupEditbale] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const iconRef = useRef<HTMLButtonElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  useClickOutside(
    inputRef,
    () => {
      setIsGroupEditbale(false);
    },
    `ignoreClickOutside${groupId}`,
  );
  const { deleteTaskGroup, updateGroupTitle } = useTaskStorage();
  const [title, setTitle] = useState(groupTitle);

  useEffect(() => {
    if (!isGroupEditable) {
      updateGroupTitle(groupId, title);
    }
    if (inputRef?.current && isGroupEditable) {
      inputRef.current.focus();
    }
  }, [isGroupEditable]);

  const handleAccordionOnClick = () => {
    console.log(iconRef.current);
    accordionRef.current?.classList.toggle(styles.active);
    iconRef.current?.classList.toggle(styles.active);
  };

  const handleOnClcikAddTask = () => {
    if (
      accordionRef.current?.classList.contains('active') &&
      iconRef.current?.classList.contains('active')
    ) {
      return;
    }
    accordionRef.current?.classList.add(styles.active);
    iconRef.current?.classList.add(styles.active);
  };

  return (
    <div className={styles.TaskGroup}>
      <div className={styles.taskGroupHeader}>
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
        <IconButton classname={clsx(styles.deleteButton)} onClick={() => deleteTaskGroup(groupId)}>
          <TiDelete className={styles.buttonIcon} />
        </IconButton>
        <IconButton
          classname={clsx(styles.accordionIcon)}
          onClick={handleAccordionOnClick}
          ref={iconRef}
        >
          <IoIosArrowDropdownCircle className={styles.buttonIcon} />
        </IconButton>
      </div>
      <div className={styles.taskList} ref={accordionRef}>
        <div>
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
        <AddToDoSection groupId={groupId} onClickAddTask={handleOnClcikAddTask} />
      </div>
    </div>
  );
};

export default TaskGroup;
