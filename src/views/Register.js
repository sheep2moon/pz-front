import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers";
import { Divider } from "../components/decorations";
import { ErrorMessageWrapper } from "../components/errorComponents.js";
import RoundedButton from "../components/Inputs/RoundedButton";
import StyledInput from "../components/Inputs/StyledInput";
import UnderlinedLinkButton from "../components/Inputs/UnderlinedLinkButton";
import { callApi } from "../helpers/callApi.js";
import { validateEmail } from "../helpers/validateEmail.js";

const Register = () => {
  const theme = useTheme();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState([]);
  const [errorInputs, setErrorInputs] = useState([false, false, false, false]); // username, email, pass1, pass2
  const handleRegister = async () => {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const pass1 = passwordRef.current.value;
    const pass2 = confirmPasswordRef.current.value;

    let occuredErrors = [false, false, false, false];
    setErrorInputs(occuredErrors);
    let alertMessages = [];
    //empty fields
    if (!username || !email || !pass1 || !pass2) {
      alertMessages.push("All fields need to be filled");
      if (!username) occuredErrors[0] = true;
      if (!email) occuredErrors[1] = true;
      if (!pass1) occuredErrors[2] = true;
      if (!pass2) occuredErrors[3] = true;
      setErrorInputs(occuredErrors);
      setErrorMessages(alertMessages);
      return;
    }
    //email format
    if (!validateEmail(email)) {
      alertMessages.push("Email is incorrect.");
      occuredErrors[1] = true;
    }
    //passwords match
    if (pass1 !== pass2) {
      alertMessages.push("Passwords doesn't match.");
      occuredErrors[2] = true;
      occuredErrors[3] = true;
    }

    if (occuredErrors.includes(true)) {
      setErrorInputs(occuredErrors);
      setErrorMessages(alertMessages);
      return;
    }

    const data = {
      username,
      email,
      password: pass1,
    };
    const res = await callApi("auth/signup", data);
    console.log(res);
    if (res.status === 200) {
      navigate("/login");
    } else if (res.status === 404) {
      navigate("/oops");
    } else {
      setErrorMessages([res.data.message]);
      console.log(res);
    }
  };

  return (
    <CenteredContainer bg={theme.gradients.paradise}>
      <HeadingText>Create Account</HeadingText>
      <RegisterWrapper>
        <InputsWrap>
          <StyledInput
            isError={errorInputs[0]}
            variant="dark"
            label="Username"
            ref={usernameRef}
          />
          <StyledInput
            isError={errorInputs[1]}
            variant="dark"
            label="E-mail"
            ref={emailRef}
          />
          <StyledInput
            isError={errorInputs[2]}
            variant="dark"
            label="Password"
            type="password"
            ref={passwordRef}
          />
          <StyledInput
            isError={errorInputs[3]}
            variant="dark"
            label="Confirm Password"
            type="password"
            ref={confirmPasswordRef}
          />
        </InputsWrap>
        <ErrorMessageWrapper>
          {errorMessages.map((msg, index) => (
            <p key={index}>! {msg}</p>
          ))}
        </ErrorMessageWrapper>
        <ConfirmWrapper>
          <p>Sign Up</p>
          <RoundedButton color="pink" onClick={handleRegister} />
        </ConfirmWrapper>
        <Divider color="pink" />
        <BottomWrap>
          <p>Already have an account?</p>
          <UnderlinedLinkButton to="/login" text="Sign In" color="pink" />
        </BottomWrap>
      </RegisterWrapper>
    </CenteredContainer>
  );
};

export default Register;

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 385px;
`;
const HeadingText = styled.h1`
  font-size: 3.6rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #fff;
`;
const InputsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConfirmWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

const BottomWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
`;
