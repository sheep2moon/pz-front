import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UnderlinedLinkButton = ({ text, color = "yellow", to }) => {
  return (
    <Wrapper>
      <Underline color={color} />
      <StyledLink to={to}>{text}</StyledLink>
    </Wrapper>
  );
};

export default UnderlinedLinkButton;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;
const Underline = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.2rem;
  z-index: -1;
  background: ${({ theme, color }) =>
    color === "yellow"
      ? theme.colors.yellow
      : color === "green"
      ? theme.colors.green
      : theme.colors.pink};
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.6rem;
  background: none;

  border: none;
  :hover {
    cursor: pointer;
  }
`;
