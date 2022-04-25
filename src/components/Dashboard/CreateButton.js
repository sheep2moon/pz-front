import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

const CreateButton = ({ ...rest }) => {
  return (
    <AddNewButton {...rest}>
      <p>Create</p>
      <AiOutlinePlus />
    </AddNewButton>
  );
};

export default CreateButton;

const AddNewButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  background-color: #ffffff83;
  border-radius: 29px;
  padding: 2rem 2rem;
  width: 140px;
  height: 140px;
  color: ${({ theme }) => theme.colors.textGraphite};
  outline: none;
  transition: all 0.1s ease-in-out;
  :hover {
    transition: all 0.1s ease-in-out;
    box-shadow: 0 0 2px 2px #ffffff90;
    cursor: pointer;
  }
`;
