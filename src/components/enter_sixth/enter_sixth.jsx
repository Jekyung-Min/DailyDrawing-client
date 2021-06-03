import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper";
import "swiper/swiper-bundle.css";
import styles from "./enter_sixth.module.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel]);

const EnterSixth = ({ portfolioRef }) => {
  return (
    <section
      ref={portfolioRef}
      className={`${styles.portfolio} ${styles.section}`}
    >
      <h2 className={`${styles.section_title}`}>DailyDrawing</h2>
      <span className={`${styles.section_subtitle}`}>
        DailyDrawing 수료생 대표작품
      </span>

      <Swiper
        className={`${styles.portfolio_container} ${styles.container}`}
        tag="section"
        cssMode
        loop={true}
        grabCursor={true}
        slidesPerView={2}
        pagination={{
          clickable: true,
          // dynamicBullets: true
        }}
      >
        <div className={`${styles.portfolio_container} ${styles.container}`}>
          <div className={`swiper-wrapper`}>
            <SwiperSlide
              className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
            >
              <div
                className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
              >
                <img
                  src="images/image06.jpeg"
                  alt="image06"
                  className={`${styles.portfolio_img}`}
                />

                <div className={`${styles.portfolio_data}`}>
                  <h3 className={`${styles.portfolio_title}`}>
                    민제경 - Woman with Rainbow
                  </h3>
                  <p className={`${styles.portfolio_description}`}>
                    리움미술관 주관대회 대상작
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
            >
              <div
                className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
              >
                <img
                  src="images/image48.jpeg"
                  alt="image48"
                  className={`${styles.portfolio_img}`}
                  style={{ width: "300px" }}
                />

                <div className={`${styles.portfolio_data}`}>
                  <h3 className={`${styles.portfolio_title}`}>
                    민제현 - Black Ocean
                  </h3>
                  <p className={`${styles.portfolio_description}`}>
                    홍익대학교 대학원 공모전 작품상
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
            >
              <div
                className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
              >
                <img
                  src="images/image55.jpeg"
                  alt="image55"
                  className={`${styles.portfolio_img}`}
                />

                <div className={`${styles.portfolio_data}`}>
                  <h3 className={`${styles.portfolio_title}`}>
                    함민우 - Lava from Heart
                  </h3>
                  <p className={`${styles.portfolio_description}`}>
                    서울시립미술관 주관대회 특상
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
            >
              <div
                className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
              >
                <img
                  src="images/image16.jpeg"
                  alt="image16"
                  className={`${styles.portfolio_img}`}
                />

                <div className={`${styles.portfolio_data}`}>
                  <h3 className={`${styles.portfolio_title}`}>
                    고상아 - Marilyn Monroe
                  </h3>
                  <p className={`${styles.portfolio_description}`}>
                    석파정미술관 주관대회 혁신상
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
            >
              <div
                className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
              >
                <img
                  src="images/image52.jpeg"
                  alt="image52"
                  className={`${styles.portfolio_img}`}
                />

                <div className={`${styles.portfolio_data}`}>
                  <h3 className={`${styles.portfolio_title}`}>
                    오윤희 - Beauty Insight
                  </h3>
                  <p className={`${styles.portfolio_description}`}>
                    국민대학교 공모전 크로키상
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
            >
              <div
                className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
              >
                <img
                  src="images/image57.jpeg"
                  alt="image57"
                  className={`${styles.portfolio_img}`}
                />

                <div className={`${styles.portfolio_data}`}>
                  <h3 className={`${styles.portfolio_title}`}>
                    심수련 - Arabian Woman
                  </h3>
                  <p className={`${styles.portfolio_description}`}>
                    한가람미술관 주관대회 콜라주상
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
            >
              <div
                className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
              >
                <img
                  src="images/image22.jpeg"
                  alt="image22"
                  className={`${styles.portfolio_img}`}
                />

                <div className={`${styles.portfolio_data}`}>
                  <h3 className={`${styles.portfolio_title}`}>
                    하윤철 - Navy Love
                  </h3>
                  <p className={`${styles.portfolio_description}`}>
                    디뮤지엄 공모전 은상
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
            >
              <div
                className={`${styles.portfolio_content} ${styles.grid} swiper-slide`}
              >
                <img
                  src="images/image53.jpeg"
                  alt="image53"
                  className={`${styles.portfolio_img}`}
                />

                <div className={`${styles.portfolio_data}`}>
                  <h3 className={`${styles.portfolio_title}`}>
                    백현준 - Eyes of Truth
                  </h3>
                  <p className={`${styles.portfolio_description}`}>
                    국립현대미술관 주관대회 혁신상
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>

          <div className={`swiper-button-next`}>
            <i className={`uil uil-angle-right-b swiper-portfolio-icon`}></i>
          </div>
          <div className={`swiper-button-prev`}>
            <i className={`uil uil-angle-left-b swiper-portfolio-icon`}></i>
          </div>

          <div className={`swiper-pagination`}></div>
        </div>
      </Swiper>
    </section>
  );
};

export default EnterSixth;
