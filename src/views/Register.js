import React from "react";
import styled from "styled-components";
import { CenteredContainer } from "../components/Containers";
import { Divider } from "../components/decorations";
import RoundedButton from "../components/Inputs/RoundedButton";
import StyledInput from "../components/Inputs/StyledInput";
import UnderlinedLinkButton from "../components/Inputs/UnderlinedLinkButton";
import { HeadingText } from "../components/styledText";

const Register = () => {
  return (
    <CenteredContainer>
      <RegisterWrapper>
        <HeadingText>Sign up</HeadingText>
        <InputsWrap>
          <StyledInput variant="light" label="E-mail" />
          <StyledInput variant="light" label="Password" type="password" />
          <StyledInput
            variant="light"
            label="Confirm Password"
            type="password"
          />
        </InputsWrap>
        <ConfirmWrapper>
          <p>Sign Up</p>
          <RoundedButton color="pink" />
        </ConfirmWrapper>
        <Divider color="pink" />
        <BottomWrap>
          <p>Already have an account?</p>
          <UnderlinedLinkButton to="/login" text="sign in" color="pink" />
        </BottomWrap>
      </RegisterWrapper>
    </CenteredContainer>
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

const ConfirmWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-right: 1rem;
  }
`;
