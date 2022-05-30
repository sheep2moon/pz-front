import React, { useRef } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { joinTheRoom } from "../../service/callApi.js";
import RoundedButton from "../Inputs/RoundedButton.js";
import StyledInput from "../Inputs/StyledInput.js";
import { useDispatch } from "react-redux";
import { updateAccessCode, updateRoomData } from "../../redux/roomSlice.js";
import { fetchUserData } from "../../redux/userSlice.js";
import { socket } from "../../service/socket.js";

const JoinRoom = ({ setJoiningRoom }) => {
  const accesCodeRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleJoinRoom = async () => {
    const code = accesCodeRef.current.value;
    const res = await joinTheRoom(code, socket.id);
    if (res.status === 200) {
      dispatch(updateRoomData(code));
      dispatch(fetchUserData());
      dispatch(updateAccessCode(code));
      navigate(`/room/${code}`);
    }
    setJoiningRoom(false);
  };
  return (
    <Backdrop onClick={() => setJoiningRoom(false)}>
      <ModalWrap onClick={(e) => e.stopPropagation()}>
        <h2>Join the room</h2>
        <StyledInput variant="light" label="Enter code" ref={accesCodeRef} />
        <ConfirmWrap>
          <p>Continue</p>
          <RoundedButton onClick={() => handleJoinRoom()} />
        </ConfirmWrap>
      </ModalWrap>
    </Backdrop>
  );
};

export default JoinRoom;

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background-color: #00000025;
`;
const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => `2px solid ${theme.colors.darkBlue}`};
  border-radius: 2rem;
  z-index: 0;
  padding: 4rem;
  h2 {
    margin-bottom: 4rem;
  }
`;

const ConfirmWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4rem;
`;
