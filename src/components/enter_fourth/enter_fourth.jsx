import React from "react";
import styles from "./enter_fourth.module.css";

const EnterFourth = (props) => {
  return (
    <div className={`${styles.container} ${styles.section}`}>
      <h2 className={`${styles.section_title}`}>DailyDrawing</h2>
      <span className={`${styles.section_subtitle}`}>
        DailyDrawing과 함께하고 있는 대표 파트너사입니다.
      </span>
      <div className={`${styles.accessory_container}`}>
        <div className={`${styles.accessory_content}`}>
          <img
            className={`${styles.accessory_img}`}
            src="/images/hongik.png"
            alt="hongik"
          />
        </div>

        <div className={`${styles.accessory_content}`}>
          <img
            className={`${styles.accessory_img}`}
            src="/images/국민대-removebg.png"
            alt="hongik"
          />
        </div>
        <div className={`${styles.accessory_content}`}>
          <img
            className={`${styles.accessory_img} ${styles.seoul_museum}`}
            src="/images/석파정서울미술관-removebg.png"
            alt="hongik"
          />
        </div>

        <div className={`${styles.accessory_content}`}>
          <img
            className={`${styles.accessory_img} ${styles.seoul_museum}`}
            src="/images/리움미술관-removebg.png"
            alt="hongik"
          />
        </div>

        <div className={`${styles.accessory_content}`}>
          <img
            className={`${styles.accessory_img} ${styles.seoul_museum}`}
            src="/images/대림미술관-removebg.png"
            alt="hongik"
          />
        </div>

        <div className={`${styles.accessory_content}`}>
          <img
            className={`${styles.accessory_img}`}
            src="/images/디뮤지엄-removebg.png"
            alt="hongik"
          />
        </div>

        <div className={`${styles.accessory_content}`}>
          <img
            className={`${styles.accessory_img} ${styles.seoul_museum}`}
            src="/images/한가람미술관-removebg.png"
            alt="hongik"
          />
        </div>

        <div className={`${styles.accessory_content}`}>
          <img
            className={`${styles.accessory_img} ${styles.seoul_museum}`}
            src="/images/서울시립미술관-removebg.png"
            alt="hongik"
          />
        </div>

        <div className={`${styles.accessory_content} `}>
          <img
            className={`${styles.accessory_img} ${styles.seoul_museum}`}
            src="/images/한국문화예술위원회-removebg.png"
            alt="hongik"
          />
        </div>
      </div>
    </div>
  );
};

export default EnterFourth;
