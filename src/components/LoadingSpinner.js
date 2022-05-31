import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { setConnection, setLoading } from "../redux/serviceSlice.js";
import { registerSocket, socket } from "../service/socket.js";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = () => {
  const { connection } = useSelector((store) => store.service);
  const dispatch = useDispatch();

  useEffect(() => {
    const connectionChecker = setInterval(() => {
      if (socket.connected) {
        dispatch(setConnection(true));
        if (socket.id) registerSocket();
        clearInterval(connectionChecker);
      }
    }, 1000);
  }, []);

  return (
    <LoadingWrap>
      {!connection && <p>No internet connection</p>}
      <StyledSpinner />
    </LoadingWrap>
  );
};

export default LoadingSpinner;

const LoadingWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white80};
  > p {
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }
`;
const StyledSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 4px solid #2e5663;
  border-right: 4px solid rgba(162, 217, 199, 0.79);
  border-bottom: 4px solid #2e5663;
  border-left: 6px solid rgba(162, 217, 199, 0.79);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
