import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import { fetchData, getAllPostInfo } from "../../actions";
import styles from "./participate_modal.module.css";

const URL = process.env.REACT_APP_SERVER_URL;
const Participate_modal = ({
  showParticipateModal,
  setShowParticipateModal,
}) => {
  const { accessToken } = useSelector(state => state.userReducer.user);
  const backRef = useRef();
  const dispatch = useDispatch();
  const addImg = useRef(null);
  const imgInput = useRef(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [uploadImg, setUploadImg] = useState(null);
  const [typeInfo, setTypeInfo] = useState({ title: null, newTag: null });
  const handleTypeInfo = key => event => {
    setTypeInfo(preState => ({ ...preState, [key]: event.target.value }));
  };

  const closeModal = e => {
    if (backRef.current === e.target) {
      setShowParticipateModal(false);
    }
  };

  const onChange = useCallback(() => {
    const file = imgInput.current.files[0];
    setUploadImg(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // addImg.current.style.backgroundImage = `url(${reader.result})`;
        setCurrentImg(reader.result);
      };
    }
  }, []);

  const handleUpload = async () => {
    if (currentImg && typeInfo.title) {
      try {
        const img = new FormData();
        img.append("file", uploadImg);
        img.append("title", typeInfo.title);
        img.append("description", "");
        img.append("isCompleted", true);

        const { data } = await axios.post(`${URL}/drawing/upload`, img, {
          headers: { authorization: `Bearer ${accessToken}` },
        });

        if (typeInfo.newTag) {
          try {
            await axios.post(
              `${URL}/drawingsTags/upload`,
              {
                Tags_id: "1,2",
                Drawings_id: data.id,
                newTag: typeInfo.newTag,
              },
              {
                headers: { authorization: `Bearer ${accessToken}` },
              }
            );
          } catch (err) {
            setCurrentImg(null);
          }
        }
        dispatch(fetchData(`${URL}/drawing/getall`, {}, getAllPostInfo));
        setCurrentImg(null);
        setShowParticipateModal(false);
      } catch (err) {}
    }
  };
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

            <div
              className={
                currentImg
                  ? `${styles.section_input}`
                  : `${styles.section_input} ${styles.active}`
              }
            >
              {/* <div
                className={styles.img}
                id="addImg"
                ref={addImg}
                onChange={onChange}
              />
            </div> */}
              {currentImg ? (
                <img className={styles.img} src={`${currentImg}`} />
              ) : (
                <div className={styles.margin}></div>
              )}
              <div className={styles.user}>
                {/* <i className="fas fa-file-signature"></i> */}
                <i class="fas fa-signature"></i>
                <input
                  type="text"
                  placeholder="Title을 입력하세요"
                  onChange={handleTypeInfo("title")}
                ></input>
              </div>

              <div className={styles.user}>
                <i className="fas fa-tag"></i>
                <input
                  type="text"
                  placeholder="(Option) 태그를 추가해보세요! "
                  onChange={handleTypeInfo("newTag")}
                ></input>
              </div>
            </div>
            <button className={styles.btn_upload} onClick={handleUpload}>
              Upload
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Participate_modal;
