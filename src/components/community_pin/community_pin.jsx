import React from "react";
import styles from "./community_pin.module.css";
const CommunityPin = ({ urls, openModal }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} onClick={openModal}>
        <img src={urls?.regular} alt="pin" />
      </div>
    </div>
  );
};

export default CommunityPin;
