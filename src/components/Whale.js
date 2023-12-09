import React from "react";
import styled from "styled-components";
import DashBoard from "./DashBoard";
import Header from "./Header";
import Testimonials from "./Testimonials";

function Whale() {
  return (
    <WhaleContainer>
      <Header />
      <DashBoard />
      <Testimonials />
    </WhaleContainer>
  );
}

export default Whale;

const WhaleContainer = styled.div`
  border: 2px solid black;
  width: 55%;
  // background-image: radial-gradient(
  //   ellipse at 0% 100%,
  //   #1fa911,
  //   #2f15d0,
  //   #000000
  // );
  background-image: radial-gradient(
    at bottom left,
    #1fa911,
    #2f15d0,
    #000000 65%
  );
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    flex-direction: column;
  }
`;
