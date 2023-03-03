import HeaderInner from "./components/headerInner/HeaderInner";
import HeaderTop from "./components/headerTop/HeaderTop";
import Home from "./pages/Home";

import styles from './styles/index.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <HeaderTop />
      <HeaderInner />
      <Home />
    </div>
  );
}

export default App;
