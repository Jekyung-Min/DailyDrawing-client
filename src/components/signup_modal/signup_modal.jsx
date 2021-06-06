import React, { useState, useEffect, useRef } from "react";
import styles from "./signup_modal.module.css";
import Fade from "react-reveal/Fade";

const Signup_modal = ({ showSignUpModal, setShowSignUpModal }) => {
  const backRef = useRef();
  const [message, setMessage] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    repassword: "",
  });

  const closeModal = (e) => {
    if (backRef.current === e.target) {
      setShowSignUpModal(false);
    }
  };

  const handleUserInfo = (key) => (event) => {
    setUserInfo((preState) => ({ ...preState, [key]: event.target.value }));
  };

  const validCheck = () => {
    const { email, password, repassword } = userInfo;
    const isFill = Object.keys(userInfo).every((key) => userInfo[key] !== "");
    if (!isFill) {
      return setMessage("모든 정보를 입력해주세요.");
    } else if (email.includes("@") === false) {
      return setMessage("올바른 e-mail을 입력해주세요.");
    } else if (password !== repassword) {
      return setMessage("비밀번호를 다시 한번 확인해주세요.");
    }
    return true;
  };

  const submitUserInfo = () => {
    const isTrue = validCheck();
    if (isTrue) {
      setMessage("");
      console.log("서버요청");
      setShowSignUpModal(false);
    }
  };

  return (
    <>
      {showSignUpModal ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          <div className={styles.container}>
            <div
              className={styles.close}
              onClick={() => {
                setShowSignUpModal((pre) => !pre);
              }}
            >
              <i className="fas fa-times"></i>
            </div>
            <h4 className={styles.title}>Sign Up</h4>
            <div className={styles.user}>
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="E-mail을 입력하세요"
                onChange={handleUserInfo("email")}
              ></input>
            </div>
            <div className={styles.user}>
              <i className="fas fa-user-tag"></i>
              <input
                type="text"
                placeholder="Nickname를 입력하세요"
                onChange={handleUserInfo("nickname")}
              ></input>
            </div>
            <div className={styles.user}>
              <i className="fas fa-unlock"></i>
              <input
                type="password"
                placeholder="Password를 입력하세요"
                onChange={handleUserInfo("password")}
              ></input>
            </div>
            <div className={styles.user}>
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password를 재입력해주세요"
                onChange={handleUserInfo("repassword")}
              ></input>
            </div>
            {message ? <div className={styles.errMsg}>{message}</div> : null}
            <button
              className={`${styles.btn_signUp} ${
                message ? "" : styles.errMsg_margin
              }`}
              onClick={submitUserInfo}
            >
              Sign Up
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Signup_modal;
