import React from "react";
import { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers.js";

const NewRoom = () => {
  const theme = useTheme();
  return (
    <CenteredContainer bg={theme.gradients.slava}>NewRoom</CenteredContainer>
  );
};

export default NewRoom;
