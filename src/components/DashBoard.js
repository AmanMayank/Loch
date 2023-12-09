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
        <Title>Watch what the whales are doing</Title>
        <Description>
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </Description>
      </TextContainer>
    </Container>
  );
}

export default DashBoard;

const Container = styled.div`
  width: 678px;
  height: 306px;
  margin: auto;
  display: flex;
  margin-top: 72px;
  justify-content: space-between;
  margin-left: 60px;
  margin-right: 62px;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    margin-left: 10px;
    align-items: cener;
    width: 95%;
  }
`;

const Figures = styled.div`
  width: 335px;
  height: 306px;
  overflow: hidden;

  img {
    height: 306px;
    width: 335px;
    transform: scale(1.5);
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
  margin-left: 38px;
  width: 305px;

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
  font-size: 31px;
  line-height: 37.2px;
  color: #ffffff;
  margin-top: 16px;
  width: 100%;

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
