import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers.js";
import StyledInput from "../components/Inputs/StyledInput.js";
import tempAvatar from "../assets/player/tempCover.jpeg";
import { searchUsers } from "../helpers/callApi.js";

const tempFriends = [
  {
    username: "Friend1",
    avatar: tempAvatar,
  },
  {
    username: "Friend2",
    avatar: tempAvatar,
  },
];

const Friends = () => {
  const theme = useTheme();
  const searchRef = useRef();
  const allFriends = tempFriends;
  const [friendList, setFriendsList] = useState(tempFriends);

  const handleSearch = async (e) => {
    const res = searchUsers(e.target.value);
    console.log(res);
  };

  return (
    <CenteredContainer bg={theme.gradients.slava}>
      <MainContainer>
        <UsersContainer>
          <SearchWrap>
            <StyledInput
              label="Search for friends"
              ref={searchRef}
              onChange={(e) => handleSearch(e)}
            />
          </SearchWrap>
        </UsersContainer>
        <FriendsContainer>
          <h2>Your Friends</h2>
          <FriendsWrap>
            {friendList.map((friend) => (
              <Friend key={friend.username}>
                <img src={friend.avatar} alt="user avatar" />
                <p>{friend.username}</p>
              </Friend>
            ))}
          </FriendsWrap>
        </FriendsContainer>
      </MainContainer>
    </CenteredContainer>
  );
};

export default Friends;

const SearchWrap = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
`;
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 80vh;
  width: 100%;
  margin-top: 2rem;
`;
const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 2rem 0;
  }
`;
const FriendsWrap = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const Friend = styled.div`
  width: 100%;
  margin: 0.25rem 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: ${({ theme }) => theme.colors.white80};
  align-items: center;
  border-radius: 0.25rem;
  img {
    width: 60px;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;
