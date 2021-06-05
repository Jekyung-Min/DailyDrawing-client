import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./sign_modal.module.css";

const Sign_modal = ({ showSignModal, setShowSignModal }) => {
  const backRef = useRef();

  const closeModal = e => {
    if (backRef.current === e.target) {
      setShowSignModal(false);
    }
  };

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: showSignModal ? 1 : 0,
    transform: showSignModal ? `translateY(6%)` : `translateY(-100%)`,
  });

  return (
    <>
      {showSignModal ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          <animated.div style={animation}>
            <div className={styles.container}>
              <div
                className={styles.close}
                onClick={() => {
                  setShowSignModal(pre => !pre);
                }}
              >
                <i className="fas fa-times"></i>
              </div>
              <div className={styles.title}>Sign In</div>
              <div className={styles.user}>
                {/* <i className="far fa-user"></i> */}
                <i className="fas fa-user"></i>
                <input type="text" placeholder="E-mail"></input>
              </div>
              <div className={styles.user}>
                {/* <i className="fas fa-key"></i> */}
                <i className="fas fa-lock"></i>
                <input type="text" placeholder="Password"></input>
              </div>
              <div className={styles.way_login}>
                <button>
                  <img className={styles.img_kakao} src="/images/kakao.png" />
                </button>
                <button>
                  <img className={styles.img_google} src="/images/google.jpg" />
                </button>
              </div>
              <button className={styles.btn_signIn}>Sign In</button>
              <div className={styles.signUp}>
                <span className={styles.message_signUp}>
                  Don't have an Account ?
                </span>
                <span className={styles.btn_signUp}>Sign Up</span>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Sign_modal;
