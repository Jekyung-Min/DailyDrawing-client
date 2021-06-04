import React from "react";
import styles from "./community_main.module.css";
import CommunityPin from "../community_pin/community_pin";
import Fade from "react-reveal/Fade";

const CommunityMain = ({ pins }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {pins.map((pin, idx) => {
          const { urls } = pin;
          return (
            <>
              <Fade top duration={1800} distance={"30px"}>
                <CommunityPin urls={urls} key={idx} />
              </Fade>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CommunityMain;
