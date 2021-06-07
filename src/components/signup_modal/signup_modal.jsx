import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import styles from "./signup_modal.module.css";
import Fade from "react-reveal/Fade";

const URL = process.env.REACT_APP_SERVER_URL;
const Signup_modal = ({ showSignUpModal, setShowSignUpModal }) => {
  const backRef = useRef();
  const [message, setMessage] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    repassword: "",
  });

  const closeModal = e => {
    if (backRef.current === e.target) {
      setShowSignUpModal(false);
    }
  };

  const handleUserInfo = key => event => {
    setUserInfo(preState => ({ ...preState, [key]: event.target.value }));
  };

  const validCheck = () => {
    const { email, password, repassword } = userInfo;
    const isFill = Object.keys(userInfo).every(key => userInfo[key] !== "");
    if (!isFill) {
      return setMessage("모든 정보를 입력해주세요.");
    } else if (email.includes("@") === false) {
      return setMessage("올바른 e-mail을 입력해주세요.");
    } else if (password !== repassword) {
      return setMessage("비밀번호를 다시 한번 확인해주세요.");
    }
    return true;
  };

  const submitUserInfo = async () => {
    const isTrue = validCheck();
    if (isTrue) {
      setMessage("");
      try {
        const { email, nickname, password } = userInfo;
        await axios.post(`${URL}/sign/up`, {
          email,
          nickname,
          password,
          profileImg: "profileImg00.png",
        });
        setShowSignUpModal(false);
      } catch (err) {
        const msg = err.response.data.message;
        if (msg === "NickName already exists") {
          setMessage("이미 존재하는 닉네임입니다.");
        } else if (msg === "Email already exists") {
          setMessage("이미 존재하는 이메일입니다.");
        }
      }
    }
  };

  return (
    <>
      {showSignUpModal ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          <div className={styles.container}>
            <div className={styles.close}>
              <i
                className="fas fa-times"
                onClick={() => {
                  setShowSignUpModal(pre => !pre);
                }}
              ></i>
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
