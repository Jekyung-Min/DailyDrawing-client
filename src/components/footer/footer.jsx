import React, { useRef, useState } from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
const Footer = (props) => {
  const [isToggle, setToggle] = useState(false);
  const [isChangeTheme, setChangeTheme] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggle);
  };
  const handleChangeTheme = () => {
    setChangeTheme(!isChangeTheme);
    if (isChangeTheme) {
      document.body.className = "";
    } else {
      document.body.className = "dark_theme";
    }
  };
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            DailyDrawing
          </Link>
          <div className={styles.btns}>
            <i
              className={
                isChangeTheme
                  ? `uil uil-sun ${styles.change_theme}`
                  : `uil uil-moon ${styles.change_theme}`
              }
              onClick={() => {
                handleChangeTheme();
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
