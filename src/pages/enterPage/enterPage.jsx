import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import EnterFirst from "../../components/enter_first/enter_first";
import EnterSecond from "../../components/enter_second/enter_second";
import EnterThird from "../../components/enter_third/enter_third";
import EnterFourth from "../../components/enter_fourth/enter_fourth";
import EnterFifth from "../../components/enter_fifth/enter_fifth";
const EnterPage = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <EnterFirst></EnterFirst>
      <EnterThird></EnterThird>
      <EnterSecond></EnterSecond>
      <EnterFourth></EnterFourth>
      <EnterFifth></EnterFifth>
      <Footer></Footer>
    </>
  );
};

export default EnterPage;
