import React from "react";
import styled from "styled-components";

const HamburgerIcon = ({ isOpen }) => {
  return (
    <Wrap>
      <Bar1 isOpen={isOpen} />
      <Bar2 isOpen={isOpen} />
      <Bar3 isOpen={isOpen} />
    </Wrap>
  );
};

export default HamburgerIcon;

const Wrap = styled.div`
  position: relative;
  width: 30px;
  height: 25px;
  div {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    border-radius: 2px;
    transition: all 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
`;
const Bar1 = styled.div`
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "none")};
  top: ${({ isOpen }) => (isOpen ? "11px" : "0")};
`;
const Bar2 = styled.div`
  left: ${({ isOpen }) => (isOpen ? "-200px" : "0")};
  top: 11px;
`;
const Bar3 = styled.div`
  transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "none")};
  bottom: ${({ isOpen }) => (isOpen ? "11px" : "0")};
`;
