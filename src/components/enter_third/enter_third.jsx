import React from "react";
import styles from "./enter_third.module.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const EnterThird = (props) => {
  return (
    <div className={`${styles.container} ${styles.section}`}>
      <div className={`${styles.share_container}`}>
        <Fade right duration={1800} delay={200} distance={"30px"}>
          <div className={`${styles.share_data}`}>
            <h2 className={`${styles.section_title}`}>DailyDrawing</h2>
            <span className={`${styles.section_subtitle}`}>
              DailyDrawing 소개
            </span>
            <p className={`${styles.share_description}`}>
              6개월간의 1일 1그림 도전! 6개월간의 여정이 끝나면 완성작들을 모아
              DailyDrawing과 함께하고 있는 파트너사에 보내지고 오퍼나 협업
              인터뷰를 받을 수 있는 기회가 주어집니다. 수료 후에도 커뮤니티에
              참여하며 동료들과 정보를 공유하세요! DailyDrawing이 함께합니다.
            </p>
            <div className={`${styles.button_wrapper} `}>
              <Link
                to="/community"
                className={`${styles.button} ${styles.button_flex}`}
              >
                둘러보기
              </Link>
            </div>
          </div>
        </Fade>
        <Fade left duration={1800} delay={200} distance={"30px"}>
          <img
            className={`${styles.share_img}`}
            src="/images/example.jpeg"
            alt="example"
          />
        </Fade>
      </div>
    </div>
  );
};

export default EnterThird;
