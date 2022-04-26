import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers.js";
import StyledInput from "../components/Inputs/StyledInput.js";
import tempAvatar from "../assets/player/tempCover.jpeg";
import { addToFriends, searchUsers, showFriends } from "../helpers/callApi.js";
import { IoPersonAddOutline } from "react-icons/io";

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
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  const fetchFriends = async () => {
    const res = await showFriends();
    return res.data;
  };

  useEffect(() => {
    const friends = fetchFriends();
    setFriends(friends);
  }, []);

  const handleSearch = async (e) => {
    const res = searchUsers(e.target.value);
    setFetchedUsers(res.data);
  };

  const handleAddFriend = async (username) => {
    const res = await addToFriends(username);
    console.log("FRIENDS.js :", res);
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
          <UsersWrap>
            {fetchedUsers &&
              fetchedUsers.map((user) => (
                <User>
                  <img src={user.avatar} alt="user avatar" />
                  <p>{user.username}</p>
                  <AddToFriendsBtn
                    onClick={() => handleAddFriend(user.username)}
                  >
                    <IoPersonAddOutline />
                  </AddToFriendsBtn>
                </User>
              ))}
          </UsersWrap>
        </UsersContainer>
        <FriendsContainer>
          <h2>Your Friends</h2>
          <UsersWrap>
            {friends &&
              friends.map((friend) => (
                <Friend key={friend.username}>
                  <img src={friend.avatar} alt="user avatar" />
                  <p>{friend.username}</p>
                </Friend>
              ))}
          </UsersWrap>
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
const UsersWrap = styled.div`
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

const AddToFriendsBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 0.25rem;
  svg {
    font-size: 1.4rem;
  }
`;
const User = styled.div`
  width: 100%;
  margin: 0.25rem 0;
  display: grid;
  grid-template-columns: 1fr 3fr 0.5fr;
  background-color: ${({ theme }) => theme.colors.white80};
  align-items: center;
  border-radius: 0.25rem;
  img {
    width: 60px;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;
