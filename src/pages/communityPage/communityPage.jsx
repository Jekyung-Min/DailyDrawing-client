import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, getAllPostInfo } from "../../actions";
import styles from "./communityPage.module.css";
import { Link } from "react-router-dom";
import CommunityHeader from "../../components/community_header/community_header";
import CommunityMain from "../../components/community_main/community_main";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { CommunityModal } from "../../components/community_modal/community_modal";

const URL = process.env.REACT_APP_SERVER_URL;
const CommunityPage = () => {
  const postsState = useSelector(state => state.postReducer);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    dispatch(fetchData(`${URL}/drawing/getall`, {}, getAllPostInfo));
  }, []);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const onSearchSubmit = term => {
    // getImages(term).then(res => {
    //   const results = res.data.results;
    //   const newPins = [...results, ...pins];
    //   setNewPins(newPins);
    // });
  };

  return (
    <>
      <CommunityModal
        showModal={showModal}
        setShowModal={setShowModal}
      ></CommunityModal>
      <Navbar link="listPage"></Navbar>
      <CommunityHeader onSubmit={onSearchSubmit} />
      <CommunityMain openModal={openModal} />
      <Footer></Footer>
    </>
  );
};

export default CommunityPage;
