import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./community_comment.module.css";

export const CommunityComment = ({ showComment, setShowComment }) => {
  const backRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showComment ? 1 : 0,
    transform: showComment ? `translateY(6%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (backRef.current === e.target) {
      setShowComment(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (showComment && e.key === "Escape") {
        setShowComment(false);
      }
    },
    [setShowComment, showComment]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showComment ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          <animated.div style={animation}>
            <div
              className={styles.close}
              onClick={() => setShowComment((prev) => !prev)}
            >
              <i className="fas fa-times"></i>
            </div>

            <div className={styles.wrap}>
              {/* <Fade top duration={1800} distance={"15px"}> */}
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
              {/* </Fade> */}
              <div className={styles.left}>
                {/* <Fade top duration={1800} distance={"15px"}> */}
                <div className={styles.pic_wrapper}>
                  <img
                    className={styles.pic}
                    src="/images/image34.jpg"
                    alt="image16"
                  ></img>
                </div>
                {/* </Fade> */}
                {/* <Fade top duration={1800} distance={"15px"}> */}
                <div className={styles.content_wrapper}>
                  <p className={styles.title}>Marilyn Monroe</p>
                  <p className={styles.likes}>좋아요 0개</p>
                  <div className={styles.icons}>
                    <i className={`uil uil-heart-alt ${styles.heart_icon}`}></i>
                    <i className={`uil uil-comment ${styles.comment_icon}`}></i>
                  </div>
                </div>
                {/* </Fade> */}
              </div>

              <div className={styles.right}></div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};
