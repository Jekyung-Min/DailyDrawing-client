import React, { useCallback, useEffect, useRef, useState } from "react";
import Footer from "../../components/footer/footer";
import FooterBelow from "../../components/footer_below/footer_below";
import Navbar from "../../components/navbar/navbar";
import EnterFirst from "../../components/enter_first/enter_first";
import EnterSecond from "../../components/enter_second/enter_second";
import EnterThird from "../../components/enter_third/enter_third";
import EnterFourth from "../../components/enter_fourth/enter_fourth";
import EnterFifth from "../../components/enter_fifth/enter_fifth";
import EnterSixth from "../../components/enter_sixth/enter_sixth";
import { useLocation } from "react-router";
const EnterPage = (props) => {
  const [scrollPossible, setScrollPossible] = useState(false);
  // const location = useLocation();
  const aboutRef = useRef();
  const partnersRef = useRef();
  const courseRef = useRef();
  const portfolioRef = useRef();

  const scrollToCourse = () => {
    courseRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleScrollPossile = () => {
    if (window.scrollY >= 2300) {
      setScrollPossible(true);
    }
  };

  window.addEventListener("scroll", () => {
    handleScrollPossile();
  });

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        partnersRef={partnersRef}
        courseRef={courseRef}
        portfolioRef={portfolioRef}
      ></Navbar>
      <EnterFirst
        scrollToCourse={scrollToCourse}
        scrollPossible={scrollPossible}
      ></EnterFirst>
      <EnterThird></EnterThird>
      <EnterSecond aboutRef={aboutRef}></EnterSecond>
      <EnterFourth partnersRef={partnersRef}></EnterFourth>
      <EnterFifth courseRef={courseRef}></EnterFifth>
      <EnterSixth portfolioRef={portfolioRef}></EnterSixth>
      <FooterBelow></FooterBelow>
      <Footer></Footer>
    </>
  );
};

export default EnterPage;
