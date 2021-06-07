import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import styles from "./participate_modal.module.css";

const URL = process.env.REACT_APP_SERVER_URL;
const Participate_modal = ({
  showParticipateModal,
  setShowParticipateModal,
}) => {
  /* participate 작업중
  const backRef = useRef();
  const dispatch = useDispatch();
  const addImg = useRef(null);
  const imgInput = useRef(null);
  const [currentImg, setCurrentImg] = useState(null);
  const closeModal = e => {
    if (backRef.current === e.target) {
      setShowParticipateModal(false);
    }
  };

  const onChange = useCallback(() => {
    const file = imgInput.current.files[0];
    setCurrentImg(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        addImg.current.style.backgroundImage = `url(${reader.result})`;
      };
    }
  }, []);

  return (
    <>
      {showParticipateModal ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          <div className={styles.container}>
            <div className={styles.close}>
              <i
                className="fas fa-times"
                onClick={() => {
                  setShowParticipateModal(pre => !pre);
                }}
              ></i>
            </div>
            <input
              type="file"
              id="imgInput"
              className={styles.imgInput}
              accept=".png, .jpg, .jpeg"
              ref={imgInput}
              onChange={onChange}
            />
            <label for="imgInput" className={styles.label}>
              <i class="fas fa-image"></i>
              <span className={styles.imgBtn_msg}>업로드할 그림선택</span>
            </label>

            <div className={styles.section_input}>
              <div
                className={styles.img}
                id="addImg"
                ref={addImg}
                onChange={onChange}
              />
            </div>
            <button
              className={styles.btn_upload}
              onClick={() => {
                console.log("hi");
              }}
            >
              Upload
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
  */

  const backRef = useRef();

  const closeModal = e => {
    if (backRef.current === e.target) {
      setShowParticipateModal(false);
    }
  };

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: showParticipateModal ? 1 : 0,
    transform: showParticipateModal ? `translateY(6%)` : `translateY(10%)`,
  });

  return (
    <>
      {showParticipateModal ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          <div className={styles.container}>
            <div className={styles.close}>
              <i
                className="fas fa-times"
                onClick={() => {
                  setShowParticipateModal(pre => !pre);
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
                setShowParticipateModal(pre => !pre);
              }}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Participate_modal;
