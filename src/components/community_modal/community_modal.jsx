import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./community_modal.module.css";
import Fade from "react-reveal/Fade";

const URL = process.env.REACT_APP_SERVER_URL;
export const CommunityModal = ({
  showModal,
  setShowModal,
  modalInfo,
  postComments,
  postUserInfo,
  likeCountNum,
  openComment,
}) => {
  const backRef = useRef();
  console.log("postComments는 ", postComments);
  console.log("modalInfo는 ", modalInfo);
  console.log("postUserInfo는 ", postUserInfo);
  console.log("likeCountNum는 ", likeCountNum);
  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(6%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (backRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (showModal && e.key === "Escape") {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal && postUserInfo ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          <animated.div style={animation}>
            <div
              className={styles.close}
              onClick={() => setShowModal((prev) => !prev)}
            >
              <i className="fas fa-times"></i>
            </div>
            <Fade top cascade duration={1800} distance={"15px"}>
              <div className={styles.wrap}>
                {/* <Fade top duration={1800} distance={"15px"}> */}
                <div className={styles.profile_wrapper}>
                  <div className={styles.owner_wrapper}>
                    <img
                      className={styles.owner_img}
                      src={`${URL}/profile/get/${postUserInfo.profileImg}`}
                    />
                    <div className={styles.owner_name}>
                      <h4>{postUserInfo.nickname}</h4>
                    </div>
                  </div>
                </div>
                {/* </Fade> */}
                <div className={styles.left}>
                  {/* <Fade top duration={1800} distance={"15px"}> */}
                  <div className={styles.pic_wrapper}>
                    <img
                      className={styles.pic}
                      src={`${URL}/image/get/${modalInfo.DrawingImg}`}
                      alt={modalInfo.DrawingImg}
                    ></img>
                  </div>
                  {/* </Fade> */}
                  {/* <Fade top duration={1800} distance={"15px"}> */}
                  <div className={styles.content_wrapper}>
                    <p className={styles.title}>{modalInfo.title}</p>
                    <p className={styles.likes}>좋아요 {likeCountNum}개</p>
                    <div className={styles.icons}>
                      <i className={`fas fa-heart ${styles.heart_icon}`}></i>
                      <i
                        className={`far fa-comment ${styles.comment_icon}`}
                        onClick={openComment}
                      ></i>
                    </div>
                  </div>
                  {/* </Fade> */}
                </div>

                <div className={styles.right}></div>
              </div>
            </Fade>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};
