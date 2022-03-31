import React from "react";
import { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers.js";

const Friends = () => {
  const theme = useTheme();
  return (
    <CenteredContainer bg={theme.gradients.slava}>
      <h1>friends list</h1>
    </CenteredContainer>
  );
};

export default Friends;
