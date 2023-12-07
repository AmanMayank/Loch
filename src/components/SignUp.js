import React from "react";
import styled from "styled-components";

function SignUp() {
  return <SignUpContainer>SignUp</SignUpContainer>;
}

export default SignUp;

const SignUpContainer = styled.div`
  border: 2px solid black;
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
