import axios from "axios";
import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import { patchUserProfile } from "../../actions";

import styles from "./profile_modal.module.css";

const URL = process.env.REACT_APP_SERVER_URL;
const Profile_modal = ({ showProfileModal, setShowProfileModal }) => {
  const { accessToken } = useSelector(state => state.userReducer.user);

  const dispatch = useDispatch();
  const backRef = useRef();
  const addProfileImg = useRef(null);
  const profileInput = useRef(null);

  const onChange = useCallback(() => {
    const file = profileInput.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        addProfileImg.current.style.backgroundImage = `url(${reader.result})`;
      };
    }
  }, []);

  const loadedUserInfo = async () => {
    const img = new FormData();
    img.append("profile", profileInput.current.files[0]);
    if (profileInput.current.files[0]) {
      try {
        const { data } = await axios.patch(
          `${URL}/user/updateProfileImg`,
          img,
          {
            headers: { authorization: `Bearer ${accessToken}` },
          }
        );
        dispatch(patchUserProfile(data));
        setShowProfileModal(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onClick = useCallback(() => {
    profileInput.current.click();
  }, []);

  const closeModal = e => {
    if (backRef.current === e.target) {
      setShowProfileModal(false);
    }
  };

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: showProfileModal ? 1 : 0,
    transform: showProfileModal ? `translateY(6%)` : `translateY(10%)`,
  });

  return (
    <>
      {showProfileModal ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          <div className={styles.container}>
            <div className={styles.close}>
              <i
                className="fas fa-times"
                onClick={() => {
                  setShowProfileModal(pre => !pre);
                }}
              ></i>
            </div>
            <div className={styles.img_flex}>
              <div className={styles.imgbox}>
                <input
                  type="file"
                  id="profileInput"
                  className={styles.profileInput}
                  accept=".png, .jpg, .jpeg"
                  ref={profileInput}
                  onChange={onChange}
                />
                <label for="profileInput" className={styles.label}>
                  <i class="fas fa-camera-retro"></i>
                  <span className={styles.imgBtn_msg}>프로필사진 선택</span>
                </label>
                <div
                  className={styles.avartar}
                  id="addProfileImg"
                  ref={addProfileImg}
                  onClick={onClick}
                />
              </div>
            </div>
            <button className={styles.btn_upload} onClick={loadedUserInfo}>
              변경하기
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Profile_modal;
