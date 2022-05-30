import React from "react";
import styled from "styled-components";
import { FiUsers } from "react-icons/fi";
import { RiUserAddLine } from "react-icons/ri";
import { url } from "../../service/callApi.js";
import { useSelector } from "react-redux";

const MembersSidebar = () => {
  const { members } = useSelector((state) => state.room);
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
                <img src={url + member.avatar} alt="awatar uzytkownika" />
                <p>{member.username}</p>
              </Member>
            ))}
        </MembersWrap>
      </SectionWrap>
      <SectionWrap>
        <TitleBar>
          <RiUserAddLine />
          <p>add your friends</p>
        </TitleBar>
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
`;
const Member = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 0.5rem;
  }
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem;
  svg {
    font-size: 1.4rem;
    margin-right: 1rem;
  }
  p {
    font-weight: 400;
  }
`;
