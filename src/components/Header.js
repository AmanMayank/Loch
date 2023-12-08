import React from "react";
import styled from "styled-components";
import CarouselCards from "./CarouselCards";

function Header() {
  return (
    <HeaderContainer>
      <Heading>
        <img src="/images/bell.svg" alt="bell" />
        <Title>Get notified when a highly correlated whale makes a move</Title>
        <Description>
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </Description>
      </Heading>

      <InfiniteCarousel>
        <CarouselCards />
      </InfiniteCarousel>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Heading = styled.div`
  // border: 2px solid white;
  width: 40%;
  height: 260px;
  margin-top: 86px;
  margin-left: 7.5%;

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 0px;
    img {
      margin: auto;
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
    margin-right: auto;
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
  }
`;

const InfiniteCarousel = styled.div`
  position: relative;
  width: 51%;
  // border: 2px solid white;
  margin-left: 11px;
  margin-top: 44px;
  margin-right: 0;
  height: 304px;
  padding: 0;
  display: flex;
  overflow: hidden;
  background: transparent;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10%;
    box-shadow: 30px 0px 25px rgba(0, 0, 0, 0.2),
      -30px 0 25px rgba(0, 0, 0, 0.2);
  }

  &::before {
    left: -12%;
  }

  &::after {
    right: -12%;
  }

  @media (max-width: 768px) {
    margin-top: 5%;
    height: 304px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;
