import styled from "styled-components";

export const ErrorMessageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  p {
    padding: 0.25rem 0;
    color: ${({ theme }) => theme.colors.red};
  }
`;
