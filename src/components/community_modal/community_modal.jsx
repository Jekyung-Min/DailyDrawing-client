import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./community_modal.module.css";

export const CommunityModal = ({
  showModal,
  setShowModal,
  modalInfo,
  postComments,
  postUserInfo,
  likeCountNum,
}) => {
  const backRef = useRef();
  console.log(postComments);
  console.log(modalInfo);
  console.log(postUserInfo);
  console.log(likeCountNum);
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
      {showModal ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          <animated.div style={animation}>
            <div className={styles.wrap}>
              <div className={styles.profile_wrapper}>
                <div className={styles.owner_wrapper}>
                  <img
                    className={styles.owner_img}
                    src="/images/profileImg08.jpeg"
                  />
                  <div className={styles.owner_name}>
                    <h4>JK Min</h4>
                  </div>
                </div>
              </div>
              <div className={styles.left}>
                <div className={styles.pic_wrapper}>
                  <img
                    className={styles.pic}
                    src="/images/image34.jpg"
                    alt="image16"
                  ></img>
                </div>
                <div className={styles.content_wrapper}>
                  <p className={styles.title}>Marilyn Monroe</p>
                  <p className={styles.likes}>좋아요 0개</p>
                  <div className={styles.icons}>
                    <i className={`uil uil-heart-alt ${styles.heart_icon}`}></i>
                    <i className={`uil uil-comment ${styles.comment_icon}`}></i>
                  </div>
                </div>
              </div>
              <div className={styles.right}></div>
              <div
                className={styles.close}
                onClick={() => setShowModal((prev) => !prev)}
              >
                <i className="fas fa-times"></i>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};
