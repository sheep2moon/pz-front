import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers";
import { Divider } from "../components/decorations";
import { ErrorMessageWrapper } from "../components/errorComponents.js";
import RoundedButton from "../components/Inputs/RoundedButton";
import StyledInput from "../components/Inputs/StyledInput";
import UnderlinedLinkButton from "../components/Inputs/UnderlinedLinkButton";
import { callPostApi } from "../service/callApi.js";
import { fetchUserData } from "../redux/userSlice.js";

const Login = () => {
  const theme = useTheme();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorInputs, setErrorInputs] = useState([false, false]); // username, password
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const data = {
      username,
      password,
    };

    let occuredErrors = [false, false];
    setErrorMessage("");

    if (!username) {
      occuredErrors[0] = true;
      setErrorMessage("Both fields need to be filled");
    }
    if (!password) {
      occuredErrors[1] = true;
      setErrorMessage("Both fields need to be filled");
    }

    setErrorInputs(occuredErrors);
    if (occuredErrors.includes(true)) return;

    const res = await callPostApi("api/auth/signin", data);
    if (res.status === 200) {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(fetchUserData());
        navigate("/");
      }
    } else {
      setErrorMessage(res.data.message);
    }
  };

  return (
    <CenteredContainer bg={theme.gradients.lemon}>
      <LoginWrapper>
        <HeadingText>Welcome</HeadingText>
        <StyledInput
          isError={errorInputs[0]}
          variant="light"
          label="Username"
          ref={usernameRef}
        />
        <StyledInput
          isError={errorInputs[1]}
          variant="light"
          label="Password"
          type="password"
          ref={passwordRef}
        />
        <ErrorMessageWrapper>
          {errorMessage && <p>{errorMessage}</p>}
        </ErrorMessageWrapper>
        <OptionsWrap>
          <UnderlinedLinkButton
            to="/forgot-password"
            text="Forgot password?"
            color="green"
          />
          <RoundedButton color={theme.colors.green} onClick={handleLogin} />
        </OptionsWrap>
        <Divider color="green" />
        <BottomButtonsWrap>
          <p>Don't have an account?</p>
          <UnderlinedLinkButton to="/register" text="Sign Up" />
        </BottomButtonsWrap>
      </LoginWrapper>
    </CenteredContainer>
  );
};

export default Login;

const HeadingText = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 385px;
  align-items: center;
`;

const OptionsWrap = styled.div`
  width: 100%;
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
    font-size: 1.2rem;
  }
`;
