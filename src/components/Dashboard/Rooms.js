import React from "react";
import styled from "styled-components";
import CreateButton from "./CreateButton.js";
import { SectionWrapper } from "./styledElements.js";

const Rooms = ({ setIsNewRoomModal }) => {
  return (
    <SectionWrapper>
      <CreateButton onClick={() => setIsNewRoomModal(true)} />
    </SectionWrapper>
  );
};

export default Rooms;
