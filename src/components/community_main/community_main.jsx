import React from "react";
import styles from "./community_main.module.css";
import CommunityPin from "../community_pin/community_pin";
import Fade from "react-reveal/Fade";

const CommunityMain = ({ openModal, postsData, getModalInfo }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {postsData.length > 0
          ? postsData.map((postData, idx) => (
              <>
                <Fade top duration={1800} distance={"15px"} key={idx}>
                  <CommunityPin
                    getModalInfo={getModalInfo}
                    openModal={openModal}
                    postData={postData}
                    key={idx}
                  />
                </Fade>
              </>
            ))
          : null}
      </div>
    </div>
  );
};

export default CommunityMain;
