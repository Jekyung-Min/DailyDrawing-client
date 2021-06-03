import React, { useState } from "react";
import styles from "./enter_fifth.module.css";
const EnterFifth = (props) => {
  const [isBefore, setIsBefore] = useState(true);
  const [isAfter, setIsAfter] = useState(false);
  const handleIsBefore = () => {
    setIsBefore(true);
    setIsAfter(false);
  };
  const handleIsAfter = () => {
    setIsAfter(true);
    setIsBefore(false);
  };
  return (
    <section className={`${styles.qualification} ${styles.section}`}>
      <h2 className={`${styles.section_title}`}>DailyDrawing</h2>
      <span className={`${styles.section_subtitle}`}>
        DailyDrawing 전체과정
      </span>

      <div className={`${styles.qualification_container} ${styles.container}`}>
        <div className={`${styles.qualification_tabs}`}>
          <div
            className={
              isBefore
                ? `${styles.qualification_button} ${styles.button_flex} ${styles.qualification_active}`
                : `${styles.qualification_button} ${styles.button_flex}`
            }
            data-target="#education"
            onClick={() => {
              handleIsBefore();
            }}
          >
            <i
              className={`uil uil-graduation-cap ${styles.qualification_icon}`}
            ></i>
            수료 전
          </div>

          <div
            className={
              isAfter
                ? `${styles.qualification_button} ${styles.button_flex} ${styles.qualification_active}`
                : `${styles.qualification_button} ${styles.button_flex}`
            }
            data-target="#work"
            onClick={() => {
              handleIsAfter();
            }}
          >
            <i
              className={`uil uil-briefcase-alt ${styles.qualification_icon}`}
            ></i>
            수료 후
          </div>
        </div>

        <div className={`${styles.qualification_sections}`}>
          <div
            className={
              isBefore
                ? `${styles.qualification_content} ${styles.qualification_active}`
                : `${styles.qualification_content}`
            }
            data-content
            id="education"
          >
            <div className={`${styles.qualification_data}`}>
              <div>
                <h3 className={`${styles.qualification_title}`}>
                  DailyDrawing 신청
                </h3>
                <span className={`${styles.qualification_subtitle}`}>
                  인터뷰 후 합격자 발표
                </span>
                <div className={`${styles.qualification_calendar}`}>
                  <i className="uil uil-calendar-alt"></i>
                  1주 ~ 2주
                </div>
              </div>

              <div>
                <span className={`${styles.qualification_rounder}`}></span>
                <span className={`${styles.qualification_line}`}></span>
              </div>
            </div>

            <div className={`${styles.qualification_data}`}>
              <div></div>

              <div>
                <span className={`${styles.qualification_rounder}`}></span>
                <span className={`${styles.qualification_line}`}></span>
              </div>

              <div>
                <h3 className={`${styles.qualification_title}`}>
                  DailyDrawing 참여
                </h3>
                <span className={`${styles.qualification_subtitle}`}>
                  1일 1그림, 1주일 1완성작
                </span>
                <div className={`${styles.qualification_calendar}`}>
                  <i className="uil uil-calendar-alt"></i>
                  3주 ~ 20주
                </div>
              </div>
            </div>

            <div className={`${styles.qualification_data}`}>
              <div>
                <h3 className={`${styles.qualification_title}`}>
                  DailyDrawing 중간점검
                </h3>
                <span className={`${styles.qualification_subtitle}`}>
                  중도하차 결정여부
                </span>
                <div className={`${styles.qualification_calendar}`}>
                  <i className="uil uil-calendar-alt"></i>
                  21주 ~ 22주
                </div>
              </div>

              <div>
                <span className={`${styles.qualification_rounder}`}></span>
                <span className={`${styles.qualification_line}`}></span>
              </div>
            </div>

            <div className={`${styles.qualification_data}`}>
              <div></div>

              <div className={`${styles.qualification_time}`}>
                <span className={`${styles.qualification_rounder}`}></span>
              </div>

              <div>
                <h3 className={`${styles.qualification_title}`}>
                  DailyDrawing 수료
                </h3>
                <span className={`${styles.qualification_subtitle}`}>
                  수료조건 최종심사
                </span>
                <div className={`${styles.qualification_calendar}`}>
                  <i className="uil uil-calendar-alt"></i>
                  28주 ~ 30주
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              isAfter
                ? `${styles.qualification_content} ${styles.qualification_active}`
                : `${styles.qualification_content}`
            }
            data-content
            id="work"
          >
            <div className={`${styles.qualification_data}`}>
              <div>
                <h3 className={`${styles.qualification_title}`}>
                  DailyDrawing 포트폴리오
                </h3>
                <span className={`${styles.qualification_subtitle}`}>
                  파트너사 포트폴리오 발송
                </span>
                <div className={`${styles.qualification_calendar}`}>
                  <i class="uil uil-calendar-alt"></i>
                  31주 ~ 32주
                </div>
              </div>

              <div>
                <span className={`${styles.qualification_rounder}`}></span>
                <span className={`${styles.qualification_line}`}></span>
              </div>
            </div>

            <div className={`${styles.qualification_data}`}>
              <div></div>

              <div>
                <span className={`${styles.qualification_rounder}`}></span>
                <span className={`${styles.qualification_line}`}></span>
              </div>

              <div>
                <h3 className={`${styles.qualification_title}`}>
                  오퍼, 협업 인터뷰
                </h3>
                <span className={`${styles.qualification_subtitle}`}>
                  일정 조율 후 개별연락
                </span>
                <div className={`${styles.qualification_calendar}`}>
                  <i class="uil uil-calendar-alt"></i>
                  33주 ~
                </div>
              </div>
            </div>

            <div className={`${styles.qualification_data}`}>
              <div>
                <h3 className={`${styles.qualification_title}`}>
                  DailyDrawing 공유회
                </h3>
                <span className={`${styles.qualification_subtitle}`}>
                  공유회 후 최종 커뮤니티 등록
                </span>
                <div className={`${styles.qualification_calendar}`}>
                  <i class="uil uil-calendar-alt"></i>
                  39주 ~ 40주
                </div>
              </div>

              <div>
                <span className={`${styles.qualification_rounder}`}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterFifth;
