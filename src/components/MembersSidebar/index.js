import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiUsers } from "react-icons/fi";
import { RiUserAddLine } from "react-icons/ri";
import { HiOutlineUserAdd } from "react-icons/hi";
import { inviteFriend, showFriends, url } from "../../service/callApi.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/loadingSlice.js";

const MembersSidebar = ({ roomName, roomCode }) => {
  const { members } = useSelector((state) => state.room);
  const [friends, setFriends] = useState([]);
  const dispatch = useDispatch();

  const fetchFriends = async () => {
    dispatch(setLoading(true));
    const res = await showFriends();
    if (res.status === 200) {
      const filteredFriendsList = res.data.filter((friend) => {
        if (members.some((m) => m.username === friend.username)) return false;
        else return true;
      });
      console.log(filteredFriendsList);
      setFriends(filteredFriendsList);
    } else {
      console.log("fetch friends error status: ", res.status);
    }
    dispatch(setLoading(false));
  };

  const handleInvite = async (friendName) => {
    const res = await inviteFriend(friendName, roomName, roomCode);
    if (res.status === 200) {
      console.log("sucessfully invited", res);
    } else {
      console.log("invite error");
    }
  };

  useEffect(() => {
    fetchFriends();
  }, [members]);

  return (
    <SidebarContainer>
      <SectionWrap>
        <TitleBar>
          <FiUsers />
          <p>list of members</p>
        </TitleBar>
        <MembersWrap>
          {members &&
            members.map((member, index) => (
              <Member key={member.username}>
                <div>
                  <img src={url + member.avatar} alt="awatar uzytkownika" />
                  <p>{member.username}</p>
                </div>
              </Member>
            ))}
        </MembersWrap>
      </SectionWrap>
      <SectionWrap>
        <TitleBar>
          <RiUserAddLine />
          <p>add your friends</p>
        </TitleBar>
        <MembersWrap>
          {friends.length > 0 &&
            friends.map((friend, index) => (
              <Member key={friend.username}>
                <div>
                  <img src={url + friend.avatar} alt="awatar uzytkownika" />
                  <p>{friend.username}</p>
                </div>
                <InviteButton onClick={() => handleInvite(friend.username)}>
                  <HiOutlineUserAdd />
                </InviteButton>
              </Member>
            ))}
        </MembersWrap>
      </SectionWrap>
    </SidebarContainer>
  );
};

export default MembersSidebar;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 275px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue};
`;

const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const MembersWrap = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
`;
const Member = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  transition: all 0.2s ease-in-out;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 0.5rem;
  }
  > div {
    display: flex;
    align-items: center;
  }
`;

const InviteButton = styled.button`
  background: transparent;
  border: none;
  :hover {
    color: ${({ theme }) => theme.colors.darkBlue};
    cursor: pointer;
  }
  > svg {
    font-size: 1.4rem;
    margin-right: 1rem;
  }
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem;
  transition: all 0.2s ease-in-out;
  svg {
    font-size: 1.4rem;
    margin-right: 1rem;
  }
  p {
    font-weight: 400;
  }
`;
