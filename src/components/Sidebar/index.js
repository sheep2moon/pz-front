import React, { useState } from "react";
import styled from "styled-components";
import { links } from "./links-config";
import SidebarLink from "./SidebarLink";
import { AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router";
import { isUserLoggedIn } from "../../helpers/auth";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

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
            <SidebarLink
              key={text}
              isOpen={isOpen}
              Icon={icon}
              to={to}
              text={text}
            />
          );
        })}
        {isUserLoggedIn() ? (
          <LogoutButton onClick={handleLogout}>
            <IconWrap>
              <FiLogOut />
            </IconWrap>
            {isOpen && <p>logout</p>}
          </LogoutButton>
        ) : (
          <SidebarLink
            Icon={<FiLogIn />}
            isOpen={isOpen}
            to="/login"
            text="Login"
            placeBottom={true}
          />
        )}
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
  width: ${({ isOpen }) => (isOpen ? "240px" : "60px")};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 5px #00000040;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
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
  height: 100%;
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
const LogoutButton = styled.button`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  background-color: transparent;
  border: none;
  margin-top: auto;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 0.5rem 0;
  cursor: pointer;
  p {
    white-space: nowrap;
    font-weight: 500;
    font-size: 1rem;
    text-align: start;
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
