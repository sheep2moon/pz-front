import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Login from "./views/Login";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./views/Register";
import Profile from "./views/Profile.js";
import Sidebar from "./components/Sidebar";
import Dashboard from "./views/Dashboard.js";
import styled from "styled-components";
import Settings from "./views/Settings.js";
import { useEffect } from "react";
import { isUserLoggedIn } from "./helpers/auth.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./redux/userSlice.js";
import RequireAuth from "./router/RequireAuth";
import Friends from "./views/Friends.js";
import Room from "./views/Room";
import { io } from "socket.io-client";

function App() {
  const { username } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const socket = io("http://localhost:5050");
  useEffect(() => {
    if (isUserLoggedIn() && !username) dispatch(fetchUserData());
  }, [username, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Sidebar socket={socket} />
        <SidebarOffset>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route element={<RequireAuth />}>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route exact path="/settings" element={<Settings />} />
              <Route path="/room" element={<Room socket={socket} />} />
              <Route path="/friends" element={<Friends />} />
            </Route>
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
