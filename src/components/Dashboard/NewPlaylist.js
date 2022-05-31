import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import StyledInput from "../Inputs/StyledInput.js";
import RoundedButton from "../Inputs/RoundedButton.js";
import { callPostApi } from "../../service/callApi.js";
import { getApiHeader } from "../../service/auth.js";

const NewPlaylist = ({ setIsNewPlaylistModal }) => {
  const nameRef = useRef();

  const handleCreatePlaylist = async () => {
    const res = await callPostApi(
      "api/test/createplaylist",
      { name: nameRef.current.value },
      { headers: getApiHeader() }
    );
    if (res.status === 200) {
      console.log(res.data.message);
    }
  };

  return (
    <Backdrop onClick={() => setIsNewPlaylistModal(false)}>
      <ModalWrap onClick={(e) => e.stopPropagation()}>
        <NewRoomIcon>
          <AiOutlineAppstoreAdd />
        </NewRoomIcon>
        <StyledInput label="Playlist name" ref={nameRef} />
        <ConfirmWrap>
          <p>Continue</p>
          <RoundedButton onClick={handleCreatePlaylist} />
        </ConfirmWrap>
      </ModalWrap>
    </Backdrop>
  );
};

export default NewPlaylist;

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
