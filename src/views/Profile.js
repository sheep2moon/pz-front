import React from "react";
import styled from "styled-components";
import defaultAvatar from "../assets/default-avatar.png";

const Profile = () => {
  return (
    <ProfileContainer>
      <h2>Your Account</h2>
      <AvatarWrap>
        <AvatarImg src={defaultAvatar} />
        <p>nick</p>
      </AvatarWrap>
      <OptionsWrap>
        <Option>Change the photo</Option>
        <Option>Change the nick</Option>
      </OptionsWrap>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

const AvatarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 1rem;
    font-size: 1.8rem;
  }
`;
const AvatarImg = styled.img`
  width: 100%;
  max-width: 195px;
`;
const OptionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;
const Option = styled.button`
  font-size: 1.2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 1rem 4rem;
  margin: 0.5rem 0;
  border-radius: 20px;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;
