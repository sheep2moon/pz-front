import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import RoundedButton from "../components/Inputs/RoundedButton.js";
import { getApiHeader } from "../service/auth.js";
import { callPostApi, changeAvatar, url } from "../service/callApi.js";
import { fetchUserData } from "../redux/userSlice.js";

const Profile = () => {
  const [chosenOption, setChosenOption] = useState(0);
  const [avatarImg, setAvatarImg] = useState();
  const [nickname, setNickname] = useState();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setAvatarImg(file);
  };

  const confirmAvatarUpload = async () => {
    const formData = new FormData();
    formData.append("avatar", avatarImg);
    const res = await changeAvatar("api/test/changeavatar", formData, {
      headers: getApiHeader(),
    });
    console.log(res);
    if (res.status === 200) {
      dispatch(fetchUserData());
      console.log("avatar changed");
    }
  };

  const onNickChange = (e) => {
    setNickname(e.target.value);
  };
  const confirmNickChange = async () => {
    const res = await callPostApi(
      "api/test/changenick",
      { newusername: nickname },
      { headers: getApiHeader() }
    );
    if (res.status === 200) {
      dispatch(fetchUserData());
    }
  };
  return (
    <ProfileContainer>
      <h2>Your Account</h2>
      <AvatarWrap>
        <AvatarImg src={url + user.picture} />
        <p>{user.username}</p>
      </AvatarWrap>
      <OptionsWrap>
        <Option onClick={() => setChosenOption(1)}>Change the photo</Option>
        {chosenOption === 1 && (
          <InputWrap>
            <FileInput type="file" onChange={onFileChange} />
            <RoundedButton onClick={confirmAvatarUpload} />
          </InputWrap>
        )}
        <Option onClick={() => setChosenOption(2)}>Change the nick</Option>
        {chosenOption === 2 && (
          <InputWrap>
            <NickInput
              placeholder="new nickname"
              type="text"
              onChange={onNickChange}
            />
            <RoundedButton onClick={confirmNickChange} />
          </InputWrap>
        )}
      </OptionsWrap>
    </ProfileContainer>
  );
};

export default Profile;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const FileInput = styled.input``;
const NickInput = styled.input`
  flex: 1;
  margin: 0 0.5rem;
  border: none;
  padding: 0.75rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  outline: none;
`;
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
  width: 100px;
  height: 100px;
  max-width: 195px;
  object-fit: cover;
  border-radius: 4px;
`;
const OptionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  width: 100%;
  max-width: 320px;
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
