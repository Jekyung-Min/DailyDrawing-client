import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import Signup_modal from "../signup_modal/signup_modal";
import styles from "./sign_modal.module.css";

const Sign_modal = ({ showSignModal, setShowSignModal }) => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
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
    transform: showSignModal ? `translateY(6%)` : `translateY(10%)`,
  });

  const showSignup = () => {
    setShowSignUpModal(pre => !pre);
    console.log(showSignUpModal);
  };

  return (
    <>
      {showSignModal ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          {showSignUpModal ? (
            <Signup_modal
              showSignUpModal={showSignUpModal}
              setShowSignUpModal={setShowSignUpModal}
            />
          ) : null}
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
                <i className="fas fa-user"></i>
                <input type="text" placeholder="E-mail"></input>
              </div>
              <div className={styles.user}>
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
                <span className={styles.btn_signUp} onClick={showSignup}>
                  Sign Up
                </span>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Sign_modal;
