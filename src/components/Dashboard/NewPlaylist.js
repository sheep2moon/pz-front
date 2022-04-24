import React from "react";
import styled from "styled-components";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import StyledInput from "../Inputs/StyledInput.js";
import RoundedButton from "../Inputs/RoundedButton.js";

const NewPlaylist = ({ setIsNewPlaylistModal }) => {
  return (
    <Backdrop onClick={() => setIsNewPlaylistModal(false)}>
      <ModalWrap onClick={(e) => e.stopPropagation()}>
        <NewRoomIcon>
          <AiOutlineAppstoreAdd />
        </NewRoomIcon>
        <StyledInput label="Playlist name" />
        {/* TODO: SAVE OPTION  */}
        <ConfirmWrap>
          <p>Continue</p>
          <RoundedButton />
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
