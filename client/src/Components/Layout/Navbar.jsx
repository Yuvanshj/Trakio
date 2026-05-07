import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import trakioLogo from "../../Assets/Images/icons/TrakioLogo.png";
import trakioLogoWhite from "../../Assets/Images/icons/TrakioLogoWhite.png";
import profileIcon from "../../Assets/Images/icons/profileIcon.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const isWaitlistPage = location.pathname === "/waitlist";

  useEffect(() => {
    //Here im getting the current User from the data
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
    //Here im creating Auth Listener
    //It continuously watches:
    // login
    // logout
    // session refresh
    const { data: listener } =
      supabase.auth.onAuthStateChange(
     //This function runs whenever auth changes.
        (_, session) => {
          // If session exists → get user
          // Else → undefined
          setUser(session ? session.user : null);
        }
      );
      //CLEANUP FUNCTION
      //Without cleanup:
      // Every time component mounts:
      // new listener gets added
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <nav
      className={`w-full h-17 px-6 flex items-center border-b ${
        isWaitlistPage ? "bg-[#020202]/98 backdrop-blur-md border-white/5 text-white" : "bg-white border-gray-200 text-black"
      }`}
    >

      <div className="flex items-center mt-3">
        <Link to="/" className="flex items-center">
          <img
            src={isWaitlistPage ? trakioLogoWhite : trakioLogo}
            alt="Trakio Logo"
            className="h-14 md:h-16 w-auto"
          />
        </Link>
<p className={`text-xl font-bold tracking-tight items-center justify-between mb-2 ${isWaitlistPage ? "text-white" : "text-black"}`}>
  Trakio
</p>      </div>

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
          <Link to="/" className="px-4 md:px-5 py-1.5 rounded-full text-white hover:bg-white/15 transition-colors text-sm">
            App
          </Link>
        </div>
      </div>

      
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link to="/profile" className="inline-flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors ${isWaitlistPage ? "border-white/15 bg-white/5 hover:bg-white/10" : "border-gray-200 bg-gray-50 hover:bg-gray-100"}`}>
                <img src={profileIcon} alt="Profile" className="w-5 h-5" />
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/signup"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isWaitlistPage ? "bg-white text-black hover:bg-gray-200" : "bg-gray-900 text-white hover:bg-gray-800"}`}
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