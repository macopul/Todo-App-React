import "./style.css";

import Layout from "./Components/Layout/Layout";
import ThemeMode from "./Components/ThemeMode/ThemeMode";

function App() {
  return (
    <Layout>
      <ThemeMode message="there is place for theme mode" />
    </Layout>
  );
}

export default App;
