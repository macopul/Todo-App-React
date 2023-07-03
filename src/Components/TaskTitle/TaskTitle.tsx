import styles from './TaskTitle.module.scss'

type TaskTitleProps = {
  title: string
}

const TaskTitle = ({title}: TaskTitleProps) => {
  return (
    <p className={styles['task-message']}>
      {title}
    </p>
  )
}

export default TaskTitle