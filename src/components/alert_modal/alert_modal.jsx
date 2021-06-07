import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";

import styles from "./alert_modal.module.css";

const URL = process.env.REACT_APP_SERVER_URL;
const Alert_modal = ({ showAlertModal, setShowAlertModal }) => {
  const backRef = useRef();

  const closeModal = e => {
    if (backRef.current === e.target) {
      setShowAlertModal(false);
    }
  };

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: showAlertModal ? 1 : 0,
    transform: showAlertModal ? `translateY(6%)` : `translateY(10%)`,
  });

  return (
    <>
      <div className={styles.back} onClick={closeModal} ref={backRef}>
        <div className={styles.container}>
          <div className={styles.close}>
            <i
              className="fas fa-times"
              onClick={() => {
                setShowAlertModal(pre => !pre);
              }}
            ></i>
          </div>
          {/* <i class="fas fa-exclamation-circle"></i> */}
          <div className={styles.content}>
            <i class="fas fa-exclamation-triangle"></i>
            <div className={styles.msgbox}>
              <div className={styles.msg}>곧 업데이트 될 예정입니다.</div>
              <div className={styles.msg}>불편을 드려 죄송합니다.</div>
            </div>
          </div>
          <button
            className={styles.btn_close}
            onClick={() => {
              setShowAlertModal(pre => !pre);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Alert_modal;
