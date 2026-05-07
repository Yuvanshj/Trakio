import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Track from "../pages/Track";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Waitlist from "../pages/Waitlist";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track" element={<Track />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/waitlist" element={<Waitlist />} />

    </Routes>
  );
};

export default AppRoutes;
