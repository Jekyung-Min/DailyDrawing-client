import React from "react";
import styles from "./enter_first.module.css";

const EnterFirst = ({ scrollToCourse }) => {
  return (
    <div className={`${styles.home} ${styles.section}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.social}`}></div>
          <img
            className={`${styles.img}`}
            src="/images/western1.jpeg"
            alt="western1"
          />
          <div className={`${styles.data}`}>
            <h1 className={`${styles.title}`}>DailyDrawing</h1>
            <h3 className={`${styles.subtitle}`}>
              예술가, 화가 되고싶으신가요?
            </h3>
            <p className={`${styles.description}`}>
              DailyDrawing과 함께 꿈을 이루어 보세요.
            </p>
            <a href="/" className={`${styles.button} ${styles.button_flex}`}>
              체험하기
            </a>
          </div>
        </div>

        <div className={`${styles.scroll}`}>
          <div
            className={`${styles.scroll_button} ${styles.button_flex}`}
            onClick={scrollToCourse}
          >
            <i class={`uil uil-mouse-alt ${styles.scroll_mouse}`}></i>
            <span className={`${styles.scroll_name}`}>더보기</span>
            <i className={`uil uil-arrow-down ${styles.scroll_arrow}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterFirst;
