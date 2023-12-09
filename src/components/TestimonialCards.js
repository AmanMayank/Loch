import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { testimonials } from "../constants";

function TestimonialCards() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1.5; // To adjust the speed of dragging
      containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    containerRef.current.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      containerRef.current.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <Container ref={containerRef}>
      {testimonials.map((user, index) => (
        <CardContainer key={index}>
          <Card>
            <Title>
              {user.name} &nbsp;
              <span>{user.designation}</span>
            </Title>
            <Description>{user.text}</Description>
          </Card>
        </CardContainer>
      ))}
    </Container>
  );
}

export default TestimonialCards;

const Container = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  margin-left: 40px;
  overflow: scroll;
  overflow-x: hidden;

  @media (max-width: 768px) {
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 150px;
    width: 95%;
    overflow-x: auto;
  }
`;

const CardContainer = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column-reverse;
  margin-right: 20px;
`;

const Card = styled.div`
  height: 150px;
  width: 353px;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  user-select: none;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 19.2px;
  font-weight: 600;
  color: #19191a;

  span {
    font-weight: 500;
    font-size: 13px;
    line-height: 15.6px;
    color: #96979a;
  }
`;

const Description = styled.div`
  margin-top: 20px;
  width: 313px;
  height: auto;
  font-size: 16px;
  line-height: 19.2px;
  color: #1d2129;
`;
