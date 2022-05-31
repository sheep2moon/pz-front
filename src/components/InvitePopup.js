import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setInvite } from "../redux/serviceSlice.js";
import { joinTheRoom } from "../service/callApi.js";
import RoundedButton from "./Inputs/RoundedButton.js";
import StyledButton from "./Inputs/StyledButton.js";

const InvitePopup = ({ invite }) => {
  const dispatch = useDispatch();

  const handleAccept = () => {
    joinTheRoom(invite.code);
    dispatch(setInvite({}));
  };
  const handleCancel = () => {
    dispatch(setInvite({}));
  };

  if (Object.keys(invite).length === 2)
    return (
      <PopupWrap>
        <p>You have been invited to {invite.name}</p>
        <StyledButton onClick={handleAccept}>Accept</StyledButton>
        <StyledButton onClick={handleCancel}>Cancel</StyledButton>
      </PopupWrap>
    );
  else return <></>;
};

export default InvitePopup;

const PopupWrap = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem 1rem;
`;
