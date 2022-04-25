import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { joinTheRoom } from "../../helpers/callApi.js";
import { updateRoomData } from "../../redux/roomSlice.js";
import { updateAccessCode } from "../../redux/roomSlice.js";
import CreateButton from "./CreateButton.js";
import { SectionWrapper } from "./styledElements.js";

const Rooms = ({ setIsNewRoomModal, rooms }) => {
  const navigate = useNavigate();
  console.log(rooms);
  const dispatch = useDispatch();

  const navigateToRoom = (code) => {
    joinTheRoom(code);
    dispatch(updateRoomData(code));
    dispatch(updateAccessCode(code));
    navigate("/room");
  };

  return (
    <SectionWrapper>
      <CreateButton onClick={() => setIsNewRoomModal(true)} />
      {rooms &&
        rooms.map((room, index) => (
          <RoomButton
            key={room._id}
            onClick={() => navigateToRoom(room.accessCode)}
          >
            <p>{room.name}</p>
          </RoomButton>
        ))}
    </SectionWrapper>
  );
};

export default Rooms;

const RoomButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  width: 140px;
  height: 140px;
  background-color: #ffffff83;
  border-radius: 29px;
  padding: 2rem 2rem;
  color: ${({ theme }) => theme.colors.textGraphite};
  outline: none;
  transition: all 0.1s ease-in-out;
  :hover {
    transition: all 0.1s ease-in-out;
    box-shadow: 0 0 2px 2px #ffffff90;
    cursor: pointer;
  }
`;
