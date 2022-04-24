import React from "react";

import styled from "styled-components";
import CreateButton from "./CreateButton.js";
import { SectionWrapper } from "./styledElements.js";

const Playlists = ({ setIsNewPlaylistModal }) => {
  return (
    <SectionWrapper>
      <CreateButton onClick={() => setIsNewPlaylistModal(true)} />
    </SectionWrapper>
  );
};

export default Playlists;
