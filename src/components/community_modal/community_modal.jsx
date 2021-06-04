import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./community_modal.module.css";

export const CommunityModal = ({ showModal, setShowModal }) => {
  const backRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(6%)` : `translateY(-100%)`,
  });

  const closeModal = e => {
    if (backRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
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

  const [datePicked, setDatePicked] = useState(new Date());

  return (
    <>
      {showModal ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          <animated.div style={animation}>
            <div className={styles.wrap}>
              <div className={styles.left}>
                {/* <img
                  className={styles.pic}
                  src="/images/image16.jpeg"
                  alt="image16"
                ></img> */}
                {/* <p className={styles.title}>Marilyn Monroe</p> */}
                <p className={styles.price}>작업중</p>
              </div>
              <div className={styles.right}>
                {/* <button className={styles.btn_booking}>댓글작성</button> */}
              </div>
              <div
                className={styles.close}
                onClick={() => setShowModal(prev => !prev)}
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
