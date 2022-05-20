import React from "react";
import styled from "styled-components";

const Popup = () => {
  return <PopupContainer>popup</PopupContainer>;
};

export default Popup;

const PopupContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.blue};
`;
