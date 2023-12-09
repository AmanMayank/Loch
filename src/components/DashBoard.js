import React from "react";

import styled from "styled-components";

function DashBoard() {
  return (
    <Container>
      <Figures>
        <img src="/images/Cohorts.png" alt="dashboard" />
      </Figures>

      <TextContainer>
        <img src="/images/Eye.svg" alt="bell" />
        <Title>Get notified when a highly correlated whale makes a move</Title>
        <Description>
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </Description>
      </TextContainer>
    </Container>
  );
}

export default DashBoard;

const Container = styled.div`
  width: 84%;
  height: 306px;
  //   border: 2px solid white;
  //   margin-left: 60px;
  margin: auto;
  display: flex;
  margin-top: 72px;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

const Figures = styled.div`
  width: 50%;
  height: 100%;

  img {
    height: auto;
    width: 100%;
    transform: scale(1.35);
  }

  @media (max-width: 768px) {
    width: 95%;
    height: auto;
    margin: auto;

    img {
      width: 100%;
      transform: scale(1.5);
      margin-bottom: 50px;
    }
  }
`;

const TextContainer = styled.div`
  text-align: right;
  width: 50%;
  height: 100%;
  //   border: 2px solid white;
  margin-left: 38px;

  @media (max-width: 768px) {
    position-relative;
    width:95%;

    img{
        margin-right:32px;
    }
  }
`;

const Title = styled.div`
  height: auto;
  width: 97%;
  font-size: 31px;
  line-height: 37.2px;
  color: #ffffff;
  margin-top: 16px;

  @media (max-width: 768px) {
    width: 90%;
    margin-right: 0;
    margin-top: 10px;
  }
`;

const Description = styled.div`
  height: auto;
  width: 100%;
  opacity: 70%;
  margin-top: 16px;
  font-size: 16px;
  color: #ffffff;
  line-height: 19.2px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 95%;
    margin-right: auto;
    margin-top: 10px;
    padding-right: 17px;
  }
`;
