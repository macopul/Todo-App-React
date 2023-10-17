import { motion } from 'framer-motion';
import styles from './TaskCounter.module.scss';

type TaskCounterType = {
  taskQuantity: number;
};

const TaskCounter = ({ taskQuantity }: TaskCounterType) => {
  return (
    <motion.div
      key={taskQuantity}
      className={styles.TaskCounter}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {taskQuantity}
    </motion.div>
  );
};

export default TaskCounter;
