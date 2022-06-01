import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { updateRoomData } from "../redux/roomSlice.js";
import { setInvite } from "../redux/serviceSlice.js";
import { fetchUserData } from "../redux/userSlice.js";
import { joinTheRoom } from "../service/callApi.js";
import StyledButton from "./Inputs/StyledButton.js";

const InvitePopup = ({ invite }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();

  const handleAccept = () => {
    joinTheRoom(invite.code);
    dispatch(fetchUserData());
    dispatch(updateRoomData(invite.code));
    navigate(`/room/${invite.code}`);
    dispatch(setInvite({}));
  };
  const handleCancel = () => {
    dispatch(setInvite({}));
  };

  if (invite instanceof Object && Object.keys(invite).length === 2)
    return (
      <PopupWrap>
        <p>You have been invited to {invite.name}</p>
        <ButtonsWrap>
          <StyledButton bgColor={theme.colors.green} onClick={handleAccept}>
            Accept
          </StyledButton>
          <StyledButton
            textColor={theme.colors.white}
            bgColor={theme.colors.red}
            onClick={handleCancel}
          >
            Cancel
          </StyledButton>
        </ButtonsWrap>
      </PopupWrap>
    );
  else return <></>;
};

export default InvitePopup;

const PopupWrap = styled.div`
  z-index: 99;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem 1rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.deep};
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const ButtonsWrap = styled.div`
  display: flex;
  gap: 1rem;
`;
