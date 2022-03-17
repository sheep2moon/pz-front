import React from "react";
import styled from "styled-components";
import RoundedButton from "../components/Inputs/RoundedButton";
import StyledInput from "../components/Inputs/StyledInput";
import UnderlinedLinkButton from "../components/Inputs/UnderlinedLinkButton";
import { HeadingText } from "../components/styledText";

const Register = () => {
  return (
    <RegisterWrapper>
      <HeadingText>Sign up</HeadingText>
      <InputsWrap>
        <StyledInput variant="light" label="E-mail" />
        <StyledInput variant="light" label="Password" type="password" />
        <StyledInput variant="light" label="Confirm Password" type="password" />
      </InputsWrap>
      <RoundedButton>Sign Up</RoundedButton>
      <BottomWrap>
        <UnderlinedLinkButton to="/login" text="sign in" color="yellow" />
      </BottomWrap>
    </RegisterWrapper>
  );
};

export default Register;

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomWrap = styled.div`
  margin-top: 2rem;
  margin-left: auto;
`;
