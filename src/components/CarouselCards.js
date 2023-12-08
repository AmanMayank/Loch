import React from "react";
import styled, { keyframes } from "styled-components";

function CarouselCards() {
  return (
    <CarouselContainer>
      <CarouselTrack>
        <Card>
          <SaveContainer>
            <img src="/images/bell2.svg" alt="" />
            <SaveButton>Save</SaveButton>
          </SaveContainer>

          <Description1>
            We’ll be sending notifications to you here
          </Description1>
          <InputBox type="email" placeholder="hello@gmail.com"></InputBox>
        </Card>

        <Card>
          <SaveContainer>
            <img src="/images/bell2.svg" alt="" />
            <SaveButton>Save</SaveButton>
          </SaveContainer>

          <Description2>Notify me when any wallets move more than</Description2>
          <DropDown1>
            $1000
            <img src="/images/triangle-down.svg" alt="arrow" />
          </DropDown1>
        </Card>

        <Card>
          <SaveContainer>
            <img src="/images/bell2.svg" alt="" />
            <SaveButton>Save</SaveButton>
          </SaveContainer>

          <Description3>Notify me when any wallet dormant for</Description3>
          <DropDown2>
            &gt;30 days
            <img src="/images/triangle-down.svg" alt="arrow" />
          </DropDown2>
          <Description4>becomes active</Description4>
        </Card>
      </CarouselTrack>

      <CarouselTrack>
        <Card>
          <SaveContainer>
            <img src="/images/bell2.svg" alt="" />
            <SaveButton>Save</SaveButton>
          </SaveContainer>

          <Description1>
            We’ll be sending notifications to you here
          </Description1>
          <InputBox type="email" placeholder="hello@gmail.com"></InputBox>
        </Card>

        <Card>
          <SaveContainer>
            <img src="/images/bell2.svg" alt="" />
            <SaveButton>Save</SaveButton>
          </SaveContainer>

          <Description2>Notify me when any wallets move more than</Description2>
          <DropDown1>
            $1000
            <img src="/images/triangle-down.svg" alt="arrow" />
          </DropDown1>
        </Card>

        <Card>
          <SaveContainer>
            <img src="/images/bell2.svg" alt="" />
            <SaveButton>Save</SaveButton>
          </SaveContainer>

          <Description3>Notify me when any wallet dormant for</Description3>
          <DropDown2>
            &gt;30 days
            <img src="/images/triangle-down.svg" alt="arrow" />
          </DropDown2>
          <Description4>becomes active</Description4>
        </Card>
      </CarouselTrack>
    </CarouselContainer>
  );
}

export default CarouselCards;

const Card = styled.div`
  width: 190px;
  border: 2px solid white;
  height: 171px;
  // &:first-child {
  //   margin-left: 14px;
  // }
  margin-left: 14px;
  margin-top: 48px;
  border-radius: 8.4px;
  background: #ffffff;
  padding-right: 14px;
  margin-right: 14px;
`;

const SaveContainer = styled.div`
  margin: 12px 12px 12px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SaveButton = styled.div`
  font-size: 9.1px;
  line-height: 10.92px;
`;

const Description1 = styled.div`
  width: 129px;
  height: 51px;
  color: #19191a;
  margin-left: 12px;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 500;
`;

const Description2 = styled.div`
  width: 148px;
  height: 26px;
  font-weight: 500;
  font-size: 11.2px;
  line-height: 13.44px;
  margin-top: 55.3px;
  margin-left: 14px;
`;

const InputBox = styled.input`
  width: 161.7px;
  height: 35px;
  margin-top: 15.5px;
  margin-left: 14px;
  border:0.7x solid grey: 
  linear-gradient(0deg, #D4D4D4, #D4D4D4),
  padding : 8.4px, 11.2px, 8.4px, 11.2px;  
  border-radius:5.6px;

`;

const DropDown1 = styled.div`
  width: 60px;
  height: 19.6px;
  margin-top: 14.6px;
  margin-left: 14px;
  background: #e5e5e680;
  font-size: 9.1px;
  line-height: 10.92px;
  color: #313233;
  font-weight: 500;

  padding: 4.2px 4.2px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-left: 11.2px;
  }
`;

const Description3 = styled.div`
  width: 114.1px;
  height: 26px;
  margin-top: 39.2px;
  margin-left: 14px;
  font-size: 11.2px;
  line-height: 13.44px;
  font-weight: 500;
`;

const DropDown2 = styled(DropDown1)`
  width: 69px;
`;

const Description4 = styled(Description3)`
  width: 107.8px;
  height: 13px;
  margin-top: 8.4px;
`;

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
