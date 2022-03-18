import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Login from "./views/Login";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./views/Register";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
