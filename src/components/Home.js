import React from "react";
import Whale from "./Whale";
import SignUp from "./SignUp";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Whale />
      <SignUp />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  border: 2px solid black;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
