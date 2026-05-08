import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import trakioLogo from "../../Assets/Images/icons/TrakioLogo.png";
import trakioLogoWhite from "../../Assets/Images/icons/TrakioLogoWhite.png";
import profileIcon from "../../Assets/Images/icons/profileIcon.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session ? session.user : null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <nav
      className={`w-full h-17 px-6 flex items-center border-b z-50 ${
        isAboutPage 
          ? "bg-[#f5f5f5]/70 backdrop-blur-md border-gray-300/50 text-black" 
          : "bg-[#020202]/98 backdrop-blur-md border-white/5 text-white"
      }`}
    >

      <div className="flex items-center mt-3">
        <Link to="/" className="flex items-center">
          <img
            src={isAboutPage ? trakioLogo : trakioLogoWhite}
            alt="Trakio Logo"
            className="h-14 md:h-16 w-auto"
          />
        </Link>
        <p className={`text-xl font-bold tracking-tight mb-2 ${isAboutPage ? "text-black" : "text-white"}`}>
          Trakio
        </p>
      </div>

      <div className="flex-3 flex items-center justify-center">
        <div className="bg-zinc-900 rounded-full px-6 py-1.5 flex items-center gap-4 shadow-md backdrop-blur-lg border border-white/20">
          <Link to="/" className="px-4 md:px-5 py-1.5 rounded-full text-white hover:bg-white/15 transition-colors text-sm">
            Home
          </Link>

          <Link to="/track" className="px-4 md:px-5 py-1.5 rounded-full text-white hover:bg-white/15 transition-colors text-sm">
            Track
          </Link>

          <Link to="/about" className="px-4 md:px-5 py-1.5 rounded-full text-white hover:bg-white/15 transition-colors text-sm">
            About
          </Link>
          <Link to="/waitlist" className="px-4 md:px-5 py-1.5 rounded-full text-white hover:bg-white/15 transition-colors text-sm">
            Waitlist
          </Link>
        </div>
      </div>

      
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link to="/profile" className="inline-flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors ${isAboutPage ? "border-gray-300 bg-gray-100 hover:bg-gray-200" : "border-white/15 bg-white/5 hover:bg-white/10"}`}>
                <img src={profileIcon} alt="Profile" className="w-5 h-5" />
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/signup"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isAboutPage ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-black hover:bg-gray-200"}`}
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;