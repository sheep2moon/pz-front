import React from "react";
import { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <CenteredContainer bg={theme.gradients.slava}>
      <h2>playlists</h2>
      <h2>rooms</h2>
    </CenteredContainer>
  );
};

export default Dashboard;
