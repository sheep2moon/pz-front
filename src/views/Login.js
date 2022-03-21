import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { CenteredContainer } from "../components/Containers";
import { Divider } from "../components/decorations";
import RoundedButton from "../components/Inputs/RoundedButton";
import StyledInput from "../components/Inputs/StyledInput";
import UnderlinedLinkButton from "../components/Inputs/UnderlinedLinkButton";
import { HeadingText } from "../components/styledText";
import { callApi } from "../helpers/callApi.js";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();

  const handleLogin = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const data = {
      username,
      password,
    };
    const res = await callApi("auth/signin", data);
    if (res.status === 200) {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/profile");
      }
    } else {
      setErrorMessage(res.data.message);
    }
  };

  return (
    <CenteredContainer color="primary">
      <LoginWrapper>
        <HeadingText>Welcome</HeadingText>
        <StyledInput variant="light" label="Username" ref={usernameRef} />
        <StyledInput
          variant="light"
          label="Password"
          type="password"
          ref={passwordRef}
        />
        <OptionsWrap>
          <UnderlinedLinkButton
            to="/forgot-password"
            text="forgot password?"
            color="green"
          />
          <RoundedButton color="green" onClick={handleLogin} />
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
