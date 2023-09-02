import { useContext } from 'react';
import { TaskStoreContext } from '../context/TastStoreContextProvider';

export function useTaskStoreContext() {
  const context = useContext(TaskStoreContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}
