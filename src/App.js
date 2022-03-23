import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Login from "./views/Login";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./views/Register";
import Profile from "./views/Profile.js";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
