import React from "react";
import styled from "styled-components";
import { CenteredContainer } from "../components/Containers";
import { Divider } from "../components/decorations";
import RoundedButton from "../components/Inputs/RoundedButton";
import StyledInput from "../components/Inputs/StyledInput";
import UnderlinedLinkButton from "../components/Inputs/UnderlinedLinkButton";
import { HeadingText } from "../components/styledText";

const Login = () => {
  return (
    <CenteredContainer color="primary">
      <LoginWrapper>
        <HeadingText>Welcome</HeadingText>
        <StyledInput variant="light" label="Login" />
        <StyledInput variant="light" label="Password" type="password" />
        <OptionsWrap>
          <UnderlinedLinkButton
            to="/forgot-password"
            text="forgot password?"
            color="green"
          />
          <RoundedButton color="green" />
        </OptionsWrap>
        <Divider color="green" />
        <BottomButtonsWrap>
          <p>Don't have an account?</p>
          <UnderlinedLinkButton to="/register" text="sign up" />
        </BottomButtonsWrap>
      </LoginWrapper>
    </CenteredContainer>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionsWrap = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomButtonsWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-right: 1rem;
  }
`;
