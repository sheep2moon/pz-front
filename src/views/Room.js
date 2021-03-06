import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers";
import MembersSidebar from "../components/MembersSidebar";
import { HiOutlineLockClosed } from "react-icons/hi";
import MusicPlayer from "../components/MusicPlayer";
import RoomPlaylist from "../components/Room/RoomPlaylist";

import { useDispatch, useSelector } from "react-redux";
import { updateAccessCode, updateRoomData } from "../redux/roomSlice.js";
import { joinTheRoom, leaveTheRoom } from "../service/callApi.js";
import { useParams } from "react-router";
import { socket } from "../service/socket.js";

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
  const room = useSelector((state) => state.room);

  const theme = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams(); // AccessCode

  useEffect(() => {
    dispatch(updateAccessCode(id));
    const updater = () => {
      dispatch(updateRoomData(id));
    };
    updater();
    joinTheRoom(id);
    socket.on("updateroom", updater);
    return async () => {
      socket.off("updateroom", updater);
      console.log("Leaving room");
      await leaveTheRoom(id);
    };
  }, []);

  return (
    <>
      <MembersSidebar roomName={room.name} roomCode={id} />
      <CenteredContainer bg={theme.gradients.slava}>
        <MusicPlayer />
        <RoomContainer>
          <RoomNameWrap>
            <p>{room && room.name}</p>
            <HiOutlineLockClosed />
          </RoomNameWrap>
          <AccessCode
            onClick={() => {
              navigator.clipboard.writeText(id);
            }}
          >
            <p>{id}</p>
          </AccessCode>
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

const AccessCode = styled.div`
  display: flex;
  justify-content: center;
  width: min-content;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.white80};
  }
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
