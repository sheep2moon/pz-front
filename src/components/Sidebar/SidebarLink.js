import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { CgProfile } from "react-icons/cg";
// import { RiPlayList2Fill, RiDoorOpenLine } from "react-icons/ri";
// import { AiOutlinePlus } from "react-icons/ai";
// import { FiSettings, FiLogOut } from "react-icons/fi";

const SidebarLink = ({ to, text, Icon, isOpen, placeBottom }) => {
  return (
    <StyledLink to={to} placeBottom={placeBottom}>
      <IconWrap>{Icon}</IconWrap>
      {isOpen && <p>{text}</p>}
    </StyledLink>
  );
};

export default SidebarLink;

const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  width: 100%;
  color: #000;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkBlue};
  overflow: hidden;
  padding: 0.5rem 0;
  margin-top: ${({ placeBottom }) => (placeBottom ? "auto" : "0")};
  :hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
  p {
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const IconWrap = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
  svg {
    font-size: 2rem;
    font-weight: 400;
  }
`;
