import React from "react";
import styled from "styled-components";
import TestimonialCards from "./TestimonialCards";

function Testimonials() {
  return (
    <div>
      <Heading>Testimonials</Heading>
      <Line />

      <SliderContainer>
        <Container>
          <ImageContainer>
            <img src="/images/VectorLogo.svg" alt="logo" />
          </ImageContainer>
        </Container>

        <TestimonialCards />
      </SliderContainer>
    </div>
  );
}

export default Testimonials;

const Heading = styled.div`
  height: 30px;
  width: 400px;
  text-align: right;
  font-size: 25px;
  color: #f2f2f2;
  width: 92%;
  margin-top: 22px;
`;

const Line = styled.div`
  width: 678px;
  border-top: 1px solid #e5e5e680;
  margin-top: 20px;
  margin-left: 60px;
`;

const SliderContainer = styled.div`
  display: flex;
  margin-top: 40px;
  height: 167px;
  margin-left: 60px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 61px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 97%;
    margin-top: 20px;
    margin-left: 15px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 60px;
  display: flex;
  align-items: flex-end;

  @media (max-width: 768px) {
    img {
      height: 40px;
      width: 40px;
    }
  }
`;
