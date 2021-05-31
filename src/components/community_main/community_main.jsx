import React from "react";
import styles from "./community_main.module.css";
import CommunityPin from "../community_pin/community_pin";

const CommunityMain = ({ pins }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {pins.map((pin, idx) => {
          const { urls } = pin;
          return <CommunityPin urls={urls} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default CommunityMain;
