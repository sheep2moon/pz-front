import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Login from "./views/Login";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./views/Register";
import Profile from "./views/Profile.js";
import Sidebar from "./components/Sidebar";
import Dashboard from "./views/Dashboard.js";
import styled from "styled-components";
import NewRoom from "./views/NewRoom.js";
import JoinRoom from "./views/JoinRoom.js";
import Settings from "./views/Settings.js";
import { useEffect } from "react";
import { isUserLoggedIn } from "./helpers/auth.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./redux/userSlice.js";

function App() {
  const { username } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUserLoggedIn() && !username) dispatch(fetchUserData());
  }, [username, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Sidebar />
        <SidebarOffset>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/new-room" element={<NewRoom />} />
            <Route exact path="/join-the-room" element={<JoinRoom />} />
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </SidebarOffset>
      </Router>
    </ThemeProvider>
  );
}

export default App;

//
const SidebarOffset = styled.div`
  width: calc(100% - 60px);
  margin-left: 60px;
  height: 100vh;
`;
