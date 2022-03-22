import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

const RoundedButton = ({ color, ...rest }) => {
  return (
    <StyledButton color={color} {...rest}>
      <BsArrowRight />
    </StyledButton>
  );
};

export default RoundedButton;

const StyledButton = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, color }) =>
    color === "yellow"
      ? theme.colors.yellow
      : color === "green"
      ? theme.colors.green
      : theme.colors.pink};
  transition: all 0.2s ease-in-out;
  svg {
    font-size: 1.8rem;
  }
  :hover {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
