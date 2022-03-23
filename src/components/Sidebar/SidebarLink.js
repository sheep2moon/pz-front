import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { CgProfile } from "react-icons/cg";
// import { RiPlayList2Fill, RiDoorOpenLine } from "react-icons/ri";
// import { AiOutlinePlus } from "react-icons/ai";
// import { FiSettings, FiLogOut } from "react-icons/fi";

const SidebarLink = ({ to, text, Icon, isOpen }) => {
  return (
    <StyledLink to={to}>
      <IconWrap>{Icon}</IconWrap>
      {isOpen && <p>{text}</p>}
    </StyledLink>
  );
};

export default SidebarLink;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0.25rem 0;
  padding: 0.25rem 0;
  color: #000;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkBlue};
  :hover {
    opacity: 0.8;
  }
  p {
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
  }
  svg {
    font-size: 2rem;
    margin-right: 1rem;
    font-weight: 400;
  }
`;

const IconWrap = styled.div`
  width: 50px;
`;
