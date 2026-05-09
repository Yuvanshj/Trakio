import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Track from "../pages/Track";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Waitlist from "../pages/Waitlist";
import { ProtectedRoute } from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<Home />} />
      <Route path="/track" element={<ProtectedRoute><Track /></ProtectedRoute>} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/waitlist" element={<ProtectedRoute><Waitlist /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;
