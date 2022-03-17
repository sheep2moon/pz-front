import styled, { ThemeProvider } from "styled-components";
import { CenteredContainer } from "./components/Containers";
import { theme } from "./theme";
import Login from "./views/Login";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./views/Register";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </Router>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.gradients.lemon};
`;
