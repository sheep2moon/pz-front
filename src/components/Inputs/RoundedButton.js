import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

const RoundedButton = ({ children }) => {
  return (
    <Wrapper>
      <LabelText>{children}</LabelText>
      <StyledButton>
        <BsArrowRight />
      </StyledButton>
    </Wrapper>
  );
};

export default RoundedButton;

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`;

const LabelText = styled.p`
  font-size: 1.4rem;
`;

const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.green};
  svg {
    font-size: 1.6rem;
  }
  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
