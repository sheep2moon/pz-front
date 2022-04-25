import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers";
import NewPlaylist from "../components/Dashboard/NewPlaylist";
import NewRoom from "../components/Dashboard/NewRoom.js";
import Playlists from "../components/Dashboard/Playlists.js";
import Rooms from "../components/Dashboard/Rooms.js";

const Dashboard = () => {
  const theme = useTheme();
  const [isNewRoomModal, setIsNewRoomModal] = useState(false);
  const [isNewPlaylistModal, setIsNewPlaylistModal] = useState(false);
  const user = useSelector((state) => state.user);

  return (
    <>
      {isNewRoomModal && <NewRoom setIsNewRoomModal={setIsNewRoomModal} />}
      {isNewPlaylistModal && (
        <NewPlaylist setIsNewPlaylistModal={setIsNewPlaylistModal} />
      )}
      <CenteredContainer bg={theme.gradients.slava}>
        <DashboardWrapper>
          <Section>
            <h2>playlists</h2>
            <Playlists setIsNewPlaylistModal={setIsNewPlaylistModal} />
          </Section>
          <Section>
            <h2>rooms</h2>
            <Rooms setIsNewRoomModal={setIsNewRoomModal} rooms={user.rooms} />
          </Section>
        </DashboardWrapper>
      </CenteredContainer>
    </>
  );
};

export default Dashboard;

const DashboardWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 4rem;
  padding-top: 8rem;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  h2 {
    font-weight: 400;
    font-size: 2.4rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`;
