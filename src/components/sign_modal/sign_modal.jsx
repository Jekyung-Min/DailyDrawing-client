import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import { signIn } from "../../actions";
import Signup_modal from "../signup_modal/signup_modal";
import styles from "./sign_modal.module.css";

const URL = process.env.REACT_APP_SERVER_URL;
const Sign_modal = ({ showSignModal, setShowSignModal }) => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const backRef = useRef();
  const [typeInfo, setTypeInfo] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

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
  };

  const handleTypeInfo = key => event => {
    setTypeInfo(preState => ({ ...preState, [key]: event.target.value }));
  };

  const validCheck = () => {
    const { email, password } = typeInfo;
    if (email === "" || password === "") {
      return setMessage("모든 정보를 입력해주세요.");
    } else if (email.includes("@") === false) {
      return setMessage("올바른 e-mail을 입력해주세요.");
    }
    return true;
  };
  const handleBtnSignIn = async () => {
    const isTrue = validCheck();
    if (isTrue) {
      try {
        const { data } = await axios.post(`${URL}/sign/in`, typeInfo);
        if (data) {
          setMessage("");
        }
        dispatch(signIn(data.data));
        setShowSignModal(false);
      } catch (err) {
        setMessage("올바른 계정이 아닙니다.");
      }
    }
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
                <input
                  type="text"
                  placeholder="E-mail"
                  onChange={handleTypeInfo("email")}
                />
              </div>
              <div className={styles.user}>
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={handleTypeInfo("password")}
                />
              </div>
              {message ? <div className={styles.errMsg}>{message}</div> : null}
              <div className={styles.way_login}>
                <button>
                  <img className={styles.img_kakao} src="/images/kakao.png" />
                </button>
                <button>
                  <img className={styles.img_google} src="/images/google.jpg" />
                </button>
              </div>
              <button className={styles.btn_signIn} onClick={handleBtnSignIn}>
                Sign In
              </button>
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
