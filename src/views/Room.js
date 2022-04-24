import React from "react";
import styled, { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers";
import FriendsSidebar from "../components/FriendsSidebar";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi";
import MusicPlayer from "../components/MusicPlayer";
import RoomPlaylist from "../components/Room/RoomPlaylist";

const temporaryPlaylist = [
  {
    title: "I See You",
    artist: "MISSIO",
    coverUrl:
      "https://plusmusic.pl/presenter/track/7565599.gif?pid=7565599&type=www&no=1",
    length: "3:45",
  },
  {
    title: "Strangers By Nature",
    artist: "Adele",
    coverUrl:
      "https://www.cgm.pl/wp-content/uploads/2021/11/adele-30-cover.jpeg",
    length: "3:45",
  },
];

const Room = () => {
  const theme = useTheme();
  return (
    <>
      <FriendsSidebar />
      <CenteredContainer bg={theme.gradients.slava}>
        <MusicPlayer />
        <RoomContainer>
          <RoomNameWrap>
            <p>RoomName</p>
            <HiOutlineLockClosed />
          </RoomNameWrap>
          <RoomContent>
            <RoomPlaylist playlist={temporaryPlaylist} />
          </RoomContent>
        </RoomContainer>
      </CenteredContainer>
    </>
  );
};

export default Room;

const RoomContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
`;
const RoomContent = styled.div`
  width: calc(100% - 275px);
  margin-top: 2rem;
`;
const RoomNameWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  p {
    margin-right: 1rem;
  }
  svg {
    font-size: 2rem;
  }
`;
