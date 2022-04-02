import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Signup from "./components/Signup/Signup";
import ErrNotFound from "./pages/ErrNotFound/ErrNotFound";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<ErrNotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
