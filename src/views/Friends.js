import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers.js";
import StyledInput from "../components/Inputs/StyledInput.js";
import {
  addToFriends,
  searchUsers,
  showFriends,
  url,
} from "../service/callApi.js";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/serviceSlice.js";

const Friends = () => {
  const theme = useTheme();
  const searchRef = useRef();
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const dispatch = useDispatch();

  const fetchFriends = async () => {
    dispatch(setLoading(true));
    try {
      const res = await showFriends();
      if (res.status === 200) {
        console.log("setting friends");
      }
      setFriends(res.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchFriends();
    handleSearch({ target: { value: "" } });
  }, []);

  const handleSearch = async (e) => {
    const res = await searchUsers(e.target.value);
    if (res.status === 200) {
      setFetchedUsers(res.data);
    } else {
      console.log("search users status error", res.status);
    }
  };

  const handleAddFriend = async (username) => {
    const res = await addToFriends(username);
    fetchFriends();
    setFetchedUsers(fetchedUsers.filter((user) => user.username !== username));
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
            {fetchedUsers.length > 0 &&
              fetchedUsers.map((user) => (
                <User key={user.username}>
                  <img src={url + user.avatar} alt="user avatar" />
                  <p>{user.username}</p>
                  <AddToFriendsBtn
                    onClick={() => handleAddFriend(user.username)}
                  >
                    <AiOutlineUserAdd />
                  </AddToFriendsBtn>
                </User>
              ))}
          </UsersWrap>
        </UsersContainer>
        <FriendsContainer>
          <h2>Your Friends</h2>
          <UsersWrap>
            {friends.length > 0 ? (
              friends.map((friend) => (
                <Friend key={friend.username}>
                  <img src={url + friend.avatar} alt="user avatar" />
                  <p>{friend.username}</p>
                </Friend>
              ))
            ) : (
              <p>you have no friends</p>
            )}
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
  align-items: center;
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
    height: 60px;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;

const AddToFriendsBtn = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 0.1rem;
  background: none;
  margin-right: 1rem;
  border: none;
  cursor: pointer;
  display: grid;
  place-items: center;
  padding: 0.25rem;
  border-radius: 50%;
  :hover {
    background: ${({ theme }) => theme.colors.backdrop};
  }
  svg {
    font-size: 1.8rem;
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
    height: 60px;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;
