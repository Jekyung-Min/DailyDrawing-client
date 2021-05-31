import React from "react";
import styles from "./enter_second.module.css";

const EnterSecond = (props) => {
  return (
    <div className={`${styles.about} ${styles.section}`}>
      <h2 className={`${styles.section_title}`}>DailyDrawing</h2>
      <span className={`${styles.section_subtitle}`}>
        DailyDrawing이 걸어온 길
      </span>

      <div className={`${styles.about_container} ${styles.container}`}>
        <img
          src="/images/dailydrawing1.jpg"
          alt="dailydrawing1"
          className={`${styles.about_img}`}
        ></img>

        <div className={`${styles.about_data}`}>
          <p className={`${styles.about_description}`}>
            약 7년간 220,000명이 참여해주셨습니다.
            <br />
            <br />
            지금까지 누적 2,000,000개의 완성작을 남겨주셨으며
            <br />
            <br />
            DailyDrawing의 파트너사는 홍익대학교를 포함하여
            <br />
            <br />
            500군데를 돌파하였습니다.
          </p>

          <div className={`${styles.about_info}`}>
            <div>
              <span className={`${styles.about_info_title}`}>07+</span>
              <span className={`${styles.about_info_name}`}>
                Years <br /> experience
              </span>
            </div>

            <div>
              <span className={`${styles.about_info_title}`}>2,000,000+</span>
              <span className={`${styles.about_info_name}`}>
                Works <br /> completed
              </span>
            </div>

            <div>
              <span className={`${styles.about_info_title}`}>500+</span>
              <span className={`${styles.about_info_name}`}>
                Partner <br /> companies
              </span>
            </div>
          </div>

          <div className={`${styles.about_buttons}`}>
            <a href="/" className={`${styles.button} ${styles.button_flex}`}>
              체험하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterSecond;