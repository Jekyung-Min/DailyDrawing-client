import React from "react";
import styles from "./enter_fourth.module.css";
import Fade from "react-reveal/Fade";

const EnterFourth = ({ partnersRef }) => {
  return (
    <div ref={partnersRef} className={`${styles.container} ${styles.section}`}>
      <h2 className={`${styles.section_title}`}>DailyDrawing</h2>
      <span className={`${styles.section_subtitle}`}>
        DailyDrawing과 함께하고 있는 대표 파트너사입니다.
      </span>

      <div className={`${styles.accessory_container}`}>
        <Fade top duration={1800} distance={"30px"}>
          <a
            href="https://www.hongik.ac.kr/index.do"
            target="_blank"
            className={`${styles.accessory_content}`}
          >
            <img
              className={`${styles.accessory_img}`}
              src="/images/hongik.png"
              alt="hongik"
            />
          </a>
        </Fade>
        <Fade top duration={1800} delay={200} distance={"30px"}>
          <a
            href="https://www.kookmin.ac.kr/user/index.do"
            target="_blank"
            className={`${styles.accessory_content}`}
          >
            <img
              className={`${styles.accessory_img}`}
              src="/images/국민대-removebg.png"
              alt="hongik"
            />
          </a>
        </Fade>
        <Fade top duration={1800} delay={200} distance={"30px"}>
          <a
            href="https://seoulmuseum.org/"
            target="_blank"
            className={`${styles.accessory_content}`}
          >
            <img
              className={`${styles.accessory_img} ${styles.seoul_museum}`}
              src="/images/석파정서울미술관-removebg.png"
              alt="hongik"
            />
          </a>
        </Fade>
        <Fade top duration={1800} delay={200} distance={"30px"}>
          <a
            href="http://www.leeum.org/html/global/main.asp"
            className={`${styles.accessory_content}`}
            target="_blank"
          >
            <img
              className={`${styles.accessory_img} ${styles.seoul_museum}`}
              src="/images/리움미술관-removebg.png"
              alt="hongik"
            />
          </a>
        </Fade>
        <Fade top duration={1800} delay={200} distance={"30px"}>
          <a
            href="http://www.daelimmuseum.org/index.do"
            target="_blank"
            className={`${styles.accessory_content}`}
          >
            <img
              className={`${styles.accessory_img} ${styles.seoul_museum}`}
              src="/images/대림미술관-removebg.png"
              alt="hongik"
            />
          </a>
        </Fade>
        <Fade top duration={1800} delay={200} distance={"30px"}>
          <a
            href="http://www.daelimmuseum.org/dmuseum/index.do"
            target="_blank"
            className={`${styles.accessory_content}`}
          >
            <img
              className={`${styles.accessory_img}`}
              src="/images/디뮤지엄-removebg.png"
              alt="hongik"
            />
          </a>
        </Fade>
        <Fade left duration={1800} delay={200} distance={"30px"}>
          <a
            href="https://www.sac.or.kr/site/main/home"
            target="_blank"
            className={`${styles.accessory_content}`}
          >
            <img
              className={`${styles.accessory_img} ${styles.seoul_museum}`}
              src="/images/한가람미술관-removebg.png"
              alt="hongik"
            />
          </a>
        </Fade>
        <Fade top duration={1800} delay={200} distance={"30px"}>
          <a
            href="https://sema.seoul.go.kr/"
            target="_blank"
            className={`${styles.accessory_content}`}
          >
            <img
              className={`${styles.accessory_img} ${styles.seoul_museum}`}
              src="/images/서울시립미술관-removebg.png"
              alt="hongik"
            />
          </a>
        </Fade>
        <Fade right duration={1800} delay={200} distance={"30px"}>
          <a
            href="https://www.arko.or.kr/"
            target="_blank"
            className={`${styles.accessory_content} `}
          >
            <img
              className={`${styles.accessory_img} ${styles.seoul_museum}`}
              src="/images/한국문화예술위원회-removebg.png"
              alt="hongik"
            />
          </a>
        </Fade>
      </div>
    </div>
  );
};

export default EnterFourth;
