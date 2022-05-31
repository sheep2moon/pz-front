import React from "react";
import styled from "styled-components";

const StyledButton = ({
  children,
  bgColor = "#C8DFEC",
  textColor = "f3f3f3",
  ...rest
}) => {
  return (
    <SButton bgColor={bgColor} textColor={textColor} {...rest}>
      {children}
    </SButton>
  );
};

export default StyledButton;

const SButton = styled.button`
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  font-size: 1.4rem;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  border: none;
  transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  :hover {
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: ${({ theme }) => theme.shadows.deep};
  }
`;
