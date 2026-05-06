import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Track from "../pages/Track";
import About from "../pages/About";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track" element={<Track />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
