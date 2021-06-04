import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, getAllPostInfo, getSearchResult } from "../../actions";
import styles from "./communityPage.module.css";
import { Link } from "react-router-dom";
import CommunityHeader from "../../components/community_header/community_header";
import CommunityMain from "../../components/community_main/community_main";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { CommunityModal } from "../../components/community_modal/community_modal";
import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;
const CommunityPage = () => {
  const postsState = useSelector(state => state.postReducer);
  const searchState = useSelector(state => state.searchReducer);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [postsData, setPostsData] = useState([]);
  const length = postsState.allPostsInfo.length;

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    dispatch(fetchData(`${URL}/drawing/getall`, {}, getAllPostInfo));
    setPostsData(postsState.allPostsInfo);
  }, [length]);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const onSearchSubmit = async words => {
    if (words === "") {
      setPostsData(postsState.allPostsInfo);
    } else if (words !== null || words !== "") {
      try {
        const { data } = await axios.get(`${URL}/search/post?words=${words}`);
        dispatch(getSearchResult(data.postDatas));
        setPostsData(data.postDatas);
      } catch (err) {
        setPostsData([]);
      }
    }
  };

  return (
    <>
      <CommunityModal
        showModal={showModal}
        setShowModal={setShowModal}
      ></CommunityModal>
      <Navbar link="listPage"></Navbar>
      <CommunityHeader onSubmit={onSearchSubmit} />
      <CommunityMain openModal={openModal} postsData={postsData} />
      <Footer></Footer>
    </>
  );
};

export default CommunityPage;
