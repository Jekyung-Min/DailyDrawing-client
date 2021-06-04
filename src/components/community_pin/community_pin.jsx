import React from "react";
import styles from "./community_pin.module.css";

const URL = process.env.REACT_APP_SERVER_URL;
const CommunityPin = ({ postData, openModal }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} onClick={openModal}>
        <img src={`${URL}/image/get/${postData.DrawingImg}`} alt="pin" />
      </div>
    </div>
  );
};

export default CommunityPin;
