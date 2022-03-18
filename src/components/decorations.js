import styled from "styled-components";

export const Divider = styled.div`
  height: 2px;
  width: 50%;
  margin: 0.25rem auto;
  background: ${({ theme, color }) =>
    color === "yellow"
      ? theme.colors.yellow
      : color === "green"
      ? theme.colors.green
      : theme.colors.pink};
`;
