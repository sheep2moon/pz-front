import React from "react";
import { useTheme } from "styled-components";
import { CenteredContainer } from "../components/containers.js";

const Settings = () => {
  const theme = useTheme();
  return (
    <CenteredContainer bg={theme.gradients.slava}>Settings</CenteredContainer>
  );
};

export default Settings;
