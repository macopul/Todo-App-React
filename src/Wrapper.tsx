import { ReactNode } from 'react';
import styles from './Wraper.module.scss';

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className={styles.inner}> {children}</div>
);
