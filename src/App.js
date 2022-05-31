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
import { isUserLoggedIn } from "./service/auth.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./redux/userSlice.js";
import RequireAuth from "./router/RequireAuth";
import Friends from "./views/Friends.js";
import Room from "./views/Room";
import LoadingSpinner from "./components/LoadingSpinner.js";
import InvitePopup from "./components/InvitePopup.js";

function App() {
  const { username } = useSelector((state) => state.user);
  const { loading, connection, invite } = useSelector((store) => store.service);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isUserLoggedIn() && !username) dispatch(fetchUserData());
  }, [username, dispatch]);

  useEffect(() => {
    console.log(invite);
    console.log(invite);
  }, [invite]);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Sidebar />
        {Object.keys(invite).length !== 0 && <InvitePopup invite={invite} />}
        {(loading || !connection) && <LoadingSpinner />}
        <SidebarOffset>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route element={<RequireAuth />}>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route exact path="/settings" element={<Settings />} />
              <Route path="/room/:id" element={<Room />} />
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
