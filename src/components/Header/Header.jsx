import classNames from "classnames/bind";
import styles from "./Header.module.css";
const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("header-item")}>
          <span className={cx("header-item-title")}>All</span>
        </div>
        <div className={cx("header-item")}>
          <span className={cx("header-item-title")}>Manpower Supply</span>
        </div>
        <div className={cx("header-item")}>
          <span className={cx("header-item-title")}>Mobile App/Websites</span>
        </div>
        <div className={cx("header-item")}>
          <span className={cx("header-item-title")}>UI/UX Design</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
