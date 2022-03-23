import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = ({ to, text }) => {
  return <StyledLink to={to}>{text}</StyledLink>;
};

export default NavLink;

const StyledLink = styled(Link)``;
