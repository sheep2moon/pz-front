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
import { validateEmail } from "../helpers/validateEmail.js";

const Register = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const pass1 = passwordRef.current.value;
    const pass2 = confirmPasswordRef.current.value;

    //error handling
    //if (pass1 !== pass2)
    //if (!username)
    //if (!email)
    //if (!pass1)
    //if (!pass2)
    //if(validateEmail(email))

    const data = {
      username,
      email,
      password: pass1,
    };
    const res = await callApi("auth/signup", data);
    if (res.status === 200) {
      navigate("/login");
    } else {
      setErrorMessage(res.data.message);
    }
  };

  return (
    <CenteredContainer>
      <RegisterWrapper>
        <HeadingText>Sign up</HeadingText>
        <InputsWrap>
          <StyledInput variant="light" label="Username" ref={usernameRef} />
          <StyledInput variant="light" label="E-mail" ref={emailRef} />
          <StyledInput
            variant="light"
            label="Password"
            type="password"
            ref={passwordRef}
          />
          <StyledInput
            variant="light"
            label="Confirm Password"
            type="password"
            ref={confirmPasswordRef}
          />
        </InputsWrap>
        <ConfirmWrapper>
          <p>Sign Up</p>
          <RoundedButton color="pink" onClick={handleRegister} />
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
