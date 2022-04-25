import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import StyledInput from "../Inputs/StyledInput.js";
import RoundedButton from "../Inputs/RoundedButton.js";
import { callPostApi, joinTheRoom } from "../../helpers/callApi.js";
import { getApiHeader } from "../../helpers/auth.js";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../redux/userSlice.js";
import { updateAccessCode, updateRoomData } from "../../redux/roomSlice.js";
import { useNavigate } from "react-router";

const NewRoom = ({ setIsNewRoomModal }) => {
  const roomNameRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateRoom = async () => {
    const name = roomNameRef.current.value;
    const res = await callPostApi(
      "api/test/createroom",
      { name: name },
      { headers: getApiHeader() }
    );
    if (res.status === 200) {
      console.log("new-room res: ", res.data);
      setIsNewRoomModal(false);
      dispatch(fetchUserData());
      dispatch(updateRoomData(res.data.code));
      dispatch(updateAccessCode(res.data.code));
      joinTheRoom(res.data.code);
      navigate("/room");
    }
  };

  return (
    <Backdrop onClick={() => setIsNewRoomModal(false)}>
      <ModalWrap onClick={(e) => e.stopPropagation()}>
        <NewRoomIcon>
          <AiOutlineAppstoreAdd />
        </NewRoomIcon>
        <StyledInput label="Room name" ref={roomNameRef} />
        <ConfirmWrap>
          <p>Continue</p>
          <RoundedButton onClick={() => handleCreateRoom()} />
        </ConfirmWrap>
      </ModalWrap>
    </Backdrop>
  );
};

export default NewRoom;

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.backdrop};
  z-index: 1;
`;
const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  padding: 2rem;
`;
const NewRoomIcon = styled.div`
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  max-width: 250px;
  padding: 4rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2rem;
  svg {
    font-size: 8rem;
  }
`;
const ConfirmWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4rem;
`;
