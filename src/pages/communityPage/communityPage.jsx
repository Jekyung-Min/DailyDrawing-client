import React, { useEffect, useRef, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import styles from "./communityPage.module.css";
import { Link } from "react-router-dom";
import CommunityHeader from "../../components/community_header/community_header";
import CommunityMain from "../../components/community_main/community_main";
import Navbar from "../../components/navbar/navbar";
import unsplash from "../../api/unsplash";
import Footer from "../../components/footer/footer";
import { CommunityModal } from "../../components/community_modal/community_modal";

const CommunityPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [pins, setNewPins] = useState([]);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    getNewPins();
  }, []);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });
  };
  const onSearchSubmit = (term) => {
    getImages(term).then((res) => {
      const results = res.data.results;
      const newPins = [...results, ...pins];
      setNewPins(newPins);
    });
  };

  const getNewPins = () => {
    const promises = [];
    let pinData = [];

    const pins = [
      "acrylic",
      "watercolor",
      "oriental painting",
      "painting",
      "drawing",
    ];

    // 여러가지 섞어서
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          const results = res.data.results;
          pinData = pinData.concat(results);
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });

    //하나만 나오게 하기

    // getImages(pins[Math.floor(Math.random() * 5)]).then((res) => {
    //   const results = res.data.results;
    //   setNewPins(results);
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
      <CommunityMain openModal={openModal} pins={pins} />
      <Footer></Footer>
    </>
  );
};

export default CommunityPage;
