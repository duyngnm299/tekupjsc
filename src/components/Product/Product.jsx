import classNames from "classnames/bind";
import styles from "./Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

function Product() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("content-item")}>
          <div className={cx("describe")}>
            <div className={cx("describe-content")}>
              <span className={cx("describe-text")}>
                TOI 3D Customize E-commerce
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className={cx("describe-icon")}
              />
            </div>
          </div>
        </div>
        <div className={cx("content-item")}>
          <div className={cx("describe")}>
            <div className={cx("describe-content")}>
              <span className={cx("describe-text")}>
                E-learning - Internal training platform
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className={cx("describe-icon")}
              />
            </div>
          </div>
        </div>
        <div className={cx("content-item")}>
          <div className={cx("describe")}>
            <div className={cx("describe-content")}>
              <span className={cx("describe-text")}>
                Summer 21 Cosmetic E-commerce Platform
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className={cx("describe-icon")}
              />
            </div>
          </div>
        </div>
        <div className={cx("content-item")}>
          <div className={cx("describe")}>
            <div className={cx("describe-content")}>
              <span className={cx("describe-text")}>
                Kiva - Ambition to digital transformation in the brokerage
                assiduity
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className={cx("describe-icon")}
              />
            </div>
          </div>
        </div>
        <div className={cx("content-item")}>
          <div className={cx("describe")}>
            <div className={cx("describe-content")}>
              <span className={cx("describe-text")}>
                Boxgo - Professional Warehouse Managament
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className={cx("describe-icon")}
              />
            </div>
          </div>
        </div>
        <div className={cx("btn-gtt")}>
          <FontAwesomeIcon icon={faArrowUp} className={cx("icon-gtt")} />
        </div>
        <div className={cx("btn-msg")}>
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            className={cx("icon-msg")}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
