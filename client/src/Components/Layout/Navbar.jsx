import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import trakioLogo from "../../Assets/Images/icons/TrakioLogo.png";
import trakioLogoWhite from "../../Assets/Images/icons/TrakioLogoWhite.png";
import profileIcon from "../../Assets/Images/icons/profileIcon.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
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
      className={`w-full h-17 px-6 flex items-center justify-between border-b z-50 relative ${
        isAboutPage 
          ? "bg-[#f5f5f5]/70 backdrop-blur-md border-gray-300/50 text-black" 
          : "bg-[#020202]/98 backdrop-blur-md border-white/5 text-white"
      }`}
    >

      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src={isAboutPage ? trakioLogo : trakioLogoWhite}
            alt="Trakio Logo"
            className="h-14 md:h-16 w-auto"
          />
        </Link>
        <p className={`text-xl font-bold tracking-tight ${isAboutPage ? "text-black" : "text-white"}`}>
          Trakio
        </p>
      </div>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 hidden md:flex items-center justify-center">
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

      
      {/* Mobile hamburger */}
      <div className="md:hidden mr-2">
        <button
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="menu"
          className="p-2 rounded-md bg-white/5 text-white"
        >
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white" />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-16 right-4 z-50 w-52 max-w-[80vw] rounded-lg bg-black/90 text-white p-3 shadow-2xl border border-white/10 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-2">
            <Link to="/" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded hover:bg-white/5">Home</Link>
            <Link to="/track" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded hover:bg-white/5">Track</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded hover:bg-white/5">About</Link>
            <Link to="/waitlist" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded hover:bg-white/5">Waitlist</Link>
            <div className="border-t border-white/10 my-2" />
            {user ? (
              <>
                <Link to="/profile" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded hover:bg-white/5">Profile</Link>
                <button
                  onClick={async () => { await supabase.auth.signOut(); setUser(null); window.location = '/login'; }}
                  className="text-left w-full px-3 py-2 rounded hover:bg-white/5"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signup" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded bg-white text-black text-center">Get Started</Link>
                <Link to="/login" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded hover:bg-white/5">Login</Link>
              </>
            )}
          </nav>
        </div>
      )}

      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <>
            <Link to="/profile" className="inline-flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border transition-colors ${isAboutPage ? "border-gray-300 bg-gray-100 hover:bg-gray-200" : "border-white/15 bg-white/5 hover:bg-white/10"}`}>
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