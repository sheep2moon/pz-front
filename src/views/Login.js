import React from "react";

import styled from "styled-components";
import RoundedButton from "../components/Inputs/RoundedButton";
import StyledInput from "../components/Inputs/StyledInput";
import UnderlinedLinkButton from "../components/Inputs/UnderlinedLinkButton";
import { HeadingText } from "../components/styledText";

const Login = () => {
  return (
    <LoginWrapper>
      <HeadingText>Welcome</HeadingText>
      <StyledInput variant="light" label="Login" />
      <StyledInput variant="light" label="Password" type="password" />
      <RoundedButton>Sign In</RoundedButton>
      <BottomButtonsWrap>
        <UnderlinedLinkButton to="/register" text="sign up" />
        <UnderlinedLinkButton
          to="/forgot-password"
          text="forgot password"
          color="green"
        />
      </BottomButtonsWrap>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomButtonsWrap = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
