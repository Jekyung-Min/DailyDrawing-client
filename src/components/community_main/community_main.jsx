import React from "react";
import styles from "./community_main.module.css";
import CommunityPin from "../community_pin/community_pin";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";

const CommunityMain = ({ openModal }) => {
  const postsState = useSelector(state => state.postReducer);
  const postsInfo = postsState.allPostsInfo;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {postsInfo.length > 0
          ? postsInfo.map((postData, idx) => (
              <>
                <Fade top duration={1800} distance={"15px"}>
                  <CommunityPin
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
