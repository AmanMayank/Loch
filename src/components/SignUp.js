import React, { useState } from "react";
import styled from "styled-components";

function SignUp() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSignUp = () => {
    if (validateEmail()) {
      setEmail("");
      console.log("Email is valid:", email);
      window.location.href = "https://app.loch.one/welcome";
    }
  };

  return (
    <SignUpContainer>
      <Container>
        <Title>Sign up for exclusive access.</Title>
        <InputBox
          type="email"
          placeholder="hello@gmail.com"
          value={email || " "}
          onChange={(e) => setEmail(e.target.value)}
        ></InputBox>
        <Button onClick={handleSignUp}>Get started</Button>
        {errorMessage && <p>{errorMessage}</p>}
        <Description>
          You’ll receive an email with an invite link to join.
        </Description>
      </Container>
    </SignUpContainer>
  );
}

export default SignUp;

const SignUpContainer = styled.div`
  width: 640px;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`;

const Container = styled.div`
  width: 365px;
  height: 347px;
  margin: auto;
  margin-top: 369px;
  margin-bottom: 308px;
  @media (max-width: 768px) {
    margin-top: 200px;
    margin-bottom: 60px;
  }
`;

const Title = styled.div`
  width: 326px;
  font-weight: 500;
  font-size: 39px;
  line-height: 46.8px;
  color: #b0b1b3;
`;

const InputBox = styled.input`
  width: 340px;
  height: 59px;
  margin-top: 32px;
  padding: 20px 24px 20px 24px;
  border: 1px solid #e5e5e6;
  border-radius: 8px;
`;

const Button = styled.button`
  width: 340px;
  height: 59px;
  background: #19191a;
  color: white;
  padding: 18px 28px 18px 28px;
  border: 1px solid #e5e5e6;
  border-radius: 8px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 600px;
  line-height: 19.2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  width: 365px;
  height: 55px;
  padding: 18px 0px 18px 0px;
  margin-top: 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.2px;
`;
