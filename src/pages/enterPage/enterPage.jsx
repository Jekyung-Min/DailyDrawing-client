import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import EnterFirst from "../../components/enter_first/enter_first";
import EnterSecond from "../../components/enter_second/enter_second";
const EnterPage = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <EnterFirst></EnterFirst>
      <EnterSecond></EnterSecond>
      <Footer></Footer>
    </>
  );
};

export default EnterPage;
