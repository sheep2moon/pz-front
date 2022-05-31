import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { links } from "./links-config";
import SidebarLink from "./SidebarLink";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router";
import { isUserLoggedIn } from "../../service/auth";
import ProfileInfo from "./ProfileInfo";
import { AiOutlinePlus } from "react-icons/ai";
import HamburgerIcon from "./HamburgerIcon.js";
import JoinRoom from "../Dashboard/JoinRoom.js";
import { useDispatch, useSelector } from "react-redux";
import { leaveTheRoom } from "../../service/callApi.js";
import { registerSocket, socket } from "../../service/socket.js";
import { setInvite } from "../../redux/serviceSlice.js";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [joiningRoom, setJoiningRoom] = useState(false);
  const { accessCode } = useSelector((state) => state.room);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await leaveTheRoom(accessCode);
    socket.emit("leave-room", accessCode);
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    socket.on("invite-ready", (data) => {
      console.log("INVITATION", data);
      dispatch(setInvite(data));
    });
    if (socket.id) registerSocket();
  }, []);

  return (
    <>
      {joiningRoom && <JoinRoom setJoiningRoom={setJoiningRoom} />}
      <SidebarContainer isOpen={isOpen}>
        <Controls>
          <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <HamburgerIcon isOpen={isOpen} />
          </MenuButton>
        </Controls>
        {isOpen && isUserLoggedIn() && <ProfileInfo />}
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
          {isUserLoggedIn() && (
            <JoinRoomButton onClick={() => setJoiningRoom(true)}>
              <IconWrap>
                <AiOutlinePlus />
              </IconWrap>
              {isOpen && <p>join the room</p>}
            </JoinRoomButton>
          )}
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
              text="login"
            />
          )}
        </LinksWrap>
      </SidebarContainer>
    </>
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
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;
  padding: 2px;
  width: ${({ isOpen }) => (isOpen ? "100%" : "auto")};
  margin-bottom: 2rem;

  cursor: pointer;
`;
const LinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.1s ease-in-out;
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

const JoinRoomButton = styled.button`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  background-color: transparent;
  border: none;
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
