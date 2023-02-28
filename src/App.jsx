import classNames from "classnames/bind";
import styles from "./App.module.css";
import Header from "./components/Header";
import Product from "./components/Product";
const cx = classNames.bind(styles);
function App() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Product />
    </div>
  );
}

export default App;
