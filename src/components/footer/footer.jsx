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
          <div
            className={
              isToggle ? `${styles.menu} ${styles.show_menu}` : `${styles.menu}`
            }
          >
            <ul className={`${styles.list} ${styles.grid}`}>
              <li>
                <a href="/" className={styles.link}>
                  <i className={`uil uil-palette ${styles.icon}`}></i>About
                </a>
              </li>
              <li>
                <a href="" className={styles.link}>
                  <i className={`uil uil-user ${styles.icon} `}></i> People
                </a>
              </li>
              <li>
                <a href="" className={styles.link}>
                  <i className={`uil uil-building ${styles.icon}`}></i>
                  Organizations
                </a>
              </li>
              <li>
                <a href="" className={styles.link}>
                  <i className={`uil uil-scenery ${styles.icon}`}></i>
                  Participate
                </a>
              </li>
              <li>
                <a href="" className={styles.link}>
                  <i className={`uil uil-scenery ${styles.icon}`}></i>Community
                </a>
              </li>
              <li>
                <a href="" className={styles.link}>
                  <i className={`uil uil-scenery ${styles.icon}`}></i> Login
                </a>
              </li>
            </ul>
            <i
              className={`uil uil-times ${styles.close}`}
              onClick={() => {
                handleToggle();
              }}
            ></i>
          </div>
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
            <div className={styles.toggle}>
              <i
                className="uil uil-apps"
                onClick={() => {
                  handleToggle();
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
