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
                  <a href="#">
                    <img
                      className={styles.owner_img}
                      src="/images/profileImg08.jpeg"
                    />
                  </a>

                  <div className={styles.owner_name}>
                    <h4>JK Min</h4>
                  </div>
                </div>
              </div>
              <div className={styles.left}>
                <img
                  className={styles.pic}
                  src="/images/image16.jpeg"
                  alt="image16"
                ></img>
                <p className={styles.title}>Marilyn Monroe</p>
                <p className={styles.price}>
                  <i class="uil uil-heart-alt"></i>
                  <i class="uil uil-comment"></i>
                </p>
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
