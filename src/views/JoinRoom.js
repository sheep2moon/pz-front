import React from "react";
import { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers.js";

const JoinRoom = () => {
  const theme = useTheme();
  return (
    <CenteredContainer bg={theme.gradients.slava}>JoinRoom</CenteredContainer>
  );
};

export default JoinRoom;
