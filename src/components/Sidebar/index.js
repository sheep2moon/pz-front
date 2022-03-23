import React, { useState } from "react";
import styled from "styled-components";
import { links } from "./links-config";
import SidebarLink from "./SidebarLink";
import { AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContainer isOpen={isOpen}>
      <Controls>
        <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineArrowLeft /> : <AiOutlineMenu />}
        </MenuButton>
      </Controls>
      <ProfileInfo />
      <LinksWrap>
        {links.map(({ icon, text, to }) => {
          return (
            <SidebarLink isOpen={isOpen} Icon={icon} to={to} text={text} />
          );
        })}
      </LinksWrap>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "240px" : "80px")};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 5px #00000040;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
`;
const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  padding: 2px;
  width: ${({ isOpen }) => (isOpen ? "100%" : "auto")};
  margin-bottom: 2rem;
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
`;
const ProfileInfo = styled.div``;
const LinksWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
