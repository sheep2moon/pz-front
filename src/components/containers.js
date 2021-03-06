import styled from "styled-components";

export const CenteredContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${({ bg }) => bg};
`;

export const GradientContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, color }) =>
    color === "primary" ? theme.gradients.lemon : theme.gradients.paradise};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
