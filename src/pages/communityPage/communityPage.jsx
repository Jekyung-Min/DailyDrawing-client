import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchData,
  getAllPostInfo,
  getMyLikes,
  getSearchResult,
} from "../../actions";
import CommunityHeader from "../../components/community_header/community_header";
import CommunityMain from "../../components/community_main/community_main";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { CommunityModal } from "../../components/community_modal/community_modal";
import axios from "axios";
import { CommunityComment } from "../../components/community_comment/community_comment";
import Sign_modal from "../../components/sign_modal/sign_modal";
import Profile_modal from "../../components/profile_modal/profile_modal";

const URL = process.env.REACT_APP_SERVER_URL;
const CommunityPage = ({
  showSignModal,
  setShowSignModal,
  showProfileModal,
  setShowProfileModal,
}) => {
  const postsState = useSelector(state => state.postReducer);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [postsData, setPostsData] = useState([]);
  const [modalInfo, setModalInfo] = useState(null);
  const [postUserInfo, setPostUserInfo] = useState(null);
  const [likeCountNum, setLikeCountNum] = useState(null);
  const [postComments, setPostComments] = useState([]);
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

  const getModalInfo = async modalInfo => {
    setModalInfo(modalInfo);
    try {
      const comments = await axios.get(`${URL}/comments/${modalInfo.id}`);
      setPostComments(comments.data.comments);
      const userInfo = await axios.get(`${URL}/user/${modalInfo.Users_id}`);
      setPostUserInfo(userInfo.data.userInfo);
      const likeNum = await axios.get(`${URL}/like/count/${modalInfo.id}`);
      setLikeCountNum(likeNum.data.likeCountNumber);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCountNum = operation => {
    if (operation === "+") setLikeCountNum(likeCountNum + 1);
    else if (operation === "-") setLikeCountNum(likeCountNum - 1);
  };
  return (
    <>
      <Profile_modal
        showProfileModal={showProfileModal}
        setShowProfileModal={setShowProfileModal}
      />
      <Sign_modal
        showSignModal={showSignModal}
        setShowSignModal={setShowSignModal}
      />
      <CommunityModal
        modalInfo={modalInfo}
        showModal={showModal}
        postComments={postComments}
        postUserInfo={postUserInfo}
        likeCountNum={likeCountNum}
        handleCountNum={handleCountNum}
        setShowModal={setShowModal}
      ></CommunityModal>
      <Navbar
        link="listPage"
        setShowSignModal={setShowSignModal}
        setShowProfileModal={setShowProfileModal}
      ></Navbar>
      <CommunityHeader onSubmit={onSearchSubmit} />
      <CommunityMain
        openModal={openModal}
        postsData={postsData}
        getModalInfo={getModalInfo}
      />
      <Footer></Footer>
    </>
  );
};

export default CommunityPage;
