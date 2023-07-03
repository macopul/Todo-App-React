import TaskItem from '../TaskItem/TaskItem'
import styles from './TodoSection.module.scss'

const TodoSection = () => {
  return (
    <div className={styles['todo-section']}>
      <TaskItem />
    </div>
  )
}

export default TodoSection