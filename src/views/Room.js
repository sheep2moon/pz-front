import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers";
import MembersSidebar from "../components/MembersSidebar";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi";
import MusicPlayer from "../components/MusicPlayer";
import RoomPlaylist from "../components/Room/RoomPlaylist";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner.js";
import { updateRoomData } from "../redux/roomSlice.js";
import { leaveTheRoom } from "../helpers/callApi.js";

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
  const [isLoading, setIsLoading] = useState(true);
  const room = useSelector((state) => state.room);
  const user = useSelector((state) => state.user);
  const theme = useTheme();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (room.name) {
  //     setIsLoading(false);
  //   }
  // }, [room]);

  useEffect(() => {
    const socket = io("http://localhost:5050");
    socket.on("connect", () => {
      socket.on("updateroom", () => {
        dispatch(updateRoomData(room.accessCode));
      });
      socket.emit("join-room", room.accessCode);
    });
    return async () => {
      console.log("leaving");
      await leaveTheRoom(room.accessCode);
      socket.emit("leave-room", room.accessCode);
    };
  }, []);

  // if (isLoading) {
  //   return (
  //     <>
  //       <CenteredContainer bg={theme.gradients.slava}>
  //         <LoadingSpinner />
  //       </CenteredContainer>
  //     </>
  //   );
  // }

  return (
    <>
      <MembersSidebar members={room.members} />
      <CenteredContainer bg={theme.gradients.slava}>
        <MusicPlayer />
        <RoomContainer>
          <RoomNameWrap>
            <p>{room && room.name}</p>
            <HiOutlineLockClosed />
          </RoomNameWrap>
          <AccessCode
            onClick={() => {
              navigator.clipboard.writeText(room.accessCode);
            }}
          >
            <p>{room.accessCode}</p>
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
