import './styles/style.scss';

import Layout from './components/Layout/Layout';
import { TaskStoreProvider } from './context/TastStoreContextProvider';

function App() {
  return (
    <TaskStoreProvider>
      <Layout></Layout>
    </TaskStoreProvider>
  );
}

export default App;
