import React from "react";
import styled, { keyframes } from "styled-components";
import Cards from "./Cards";

function CarouselCards() {
  return (
    <CarouselContainer>
      <CarouselTrack>
        <Cards />
      </CarouselTrack>

      <CarouselTrack>
        <Cards />
      </CarouselTrack>
    </CarouselContainer>
  );
}

export default CarouselCards;

const slideAnimation = keyframes`
from {
  transform: translateX(0);
}
to {
  transform: translateX(-100%);
}
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
`;

const CarouselTrack = styled.div`
  display: flex;

  animation-name: ${slideAnimation};
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  ${CarouselContainer}:hover & {
    animation-play-state: paused;
    cursor: pointer;
  }
`;
