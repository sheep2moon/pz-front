import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { url } from "../../service/callApi.js";

const ProfileInfo = () => {
  const { username, picture } = useSelector((state) => state.user);

  return (
    <Wrapper>
      <Avatar src={url + picture} />
      <Text>{username}</Text>
    </Wrapper>
  );
};

export default ProfileInfo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;
const Text = styled.p`
  margin-top: 0.25rem;
`;
