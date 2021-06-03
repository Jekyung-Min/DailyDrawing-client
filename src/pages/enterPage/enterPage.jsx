import React from "react";
import Footer from "../../components/footer/footer";
import FooterBelow from "../../components/footer_below/footer_below";
import Navbar from "../../components/navbar/navbar";
import EnterFirst from "../../components/enter_first/enter_first";
import EnterSecond from "../../components/enter_second/enter_second";
import EnterThird from "../../components/enter_third/enter_third";
import EnterFourth from "../../components/enter_fourth/enter_fourth";
import EnterFifth from "../../components/enter_fifth/enter_fifth";
import EnterSixth from "../../components/enter_sixth/enter_sixth";
const EnterPage = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <EnterFirst></EnterFirst>
      <EnterThird></EnterThird>
      <EnterSecond></EnterSecond>
      <EnterFourth></EnterFourth>
      <EnterFifth></EnterFifth>
      <EnterSixth></EnterSixth>
      <FooterBelow></FooterBelow>
      <Footer></Footer>
    </>
  );
};

export default EnterPage;
