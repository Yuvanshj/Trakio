import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import trakioLogo from "../../Assets/Images/icons/TrakioLogo.png";
import trakioLogoWhite from "../../Assets/Images/icons/TrakioLogoWhite.png";
import profileIcon from "../../Assets/Images/icons/profileIcon.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isWaitlistPage = location.pathname === "/waitlist";
  const isAboutPage = location.pathname === "/about";

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
    <>
    <nav
      className={`w-full h-20 px-6 lg:px-12 flex items-center justify-between border-b z-[60] relative ${
        isAboutPage 
          ? "bg-[#f5f5f5] border-gray-300/50 text-black" 
          : "bg-[#0a0a0a] border-white/5 text-white"
      }`}
    >

      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={isAboutPage ? trakioLogo : trakioLogoWhite}
            alt="Trakio Logo"
            className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
          />
          <span className={`text-2xl font-black tracking-tighter transition-colors ${isAboutPage ? "text-gray-900 group-hover:text-black" : "text-white group-hover:text-gray-200"}`}>
            Trakio
          </span>
        </Link>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-[70]">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`rounded-full px-6 py-2 flex items-center gap-2 border transition-all duration-300 hover:scale-105 ${
          isAboutPage ? "bg-gray-200/80 border-gray-300/50 text-gray-800 hover:bg-gray-100" : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        }`}>
          {isMenuOpen ? (
            <span className="text-sm font-black tracking-widest uppercase">✕ Menu</span>
          ) : (
            <>
              <div className="flex flex-col gap-[3px] items-center justify-center w-4 h-4">
                <span className={`w-full h-[2px] rounded-full ${isAboutPage ? "bg-gray-800" : "bg-white"}`}></span>
                <span className={`w-full h-[2px] rounded-full ${isAboutPage ? "bg-gray-800" : "bg-white"}`}></span>
              </div>
              <span className="text-sm font-black tracking-widest uppercase">Menu</span>
            </>
          )}
        </button>
      </div>

      
      <div className="flex items-center gap-4">
        {user ? (
          <Link to="/profile" className="inline-flex items-center group">
            <div className={`flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${isAboutPage ? "border-gray-300 bg-gray-100 group-hover:bg-gray-200 group-hover:border-gray-400" : "border-white/20 bg-white/10 group-hover:bg-white/20 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"}`}>
              <img src={profileIcon} alt="Profile" className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            </div>
          </Link>
        ) : (
          <Link
            to="/signup"
            className={`group relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-lg ${isAboutPage ? "bg-black text-white hover:shadow-[0_5px_20px_rgba(0,0,0,0.3)]" : "bg-white text-black hover:shadow-[0_5px_20px_rgba(255,255,255,0.3)]"}`}
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <div className={`absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isAboutPage ? "bg-gradient-to-r from-gray-800 to-black" : "bg-gradient-to-r from-gray-200 to-white"}`}></div>
          </Link>
        )}
      </div>

    </nav>

    {/* Dropdown Menu Panel — Cecilia-style centered panel */}
    {/* Backdrop overlay to catch clicks */}
    {isMenuOpen && (
      <div className="fixed inset-0 z-[55]" onClick={() => setIsMenuOpen(false)} />
    )}

    <div 
      className={`fixed left-1/2 -translate-x-1/2 z-[65] w-[90vw] max-w-[700px] rounded-3xl border overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isMenuOpen 
          ? "top-24 opacity-100 visible scale-100" 
          : "top-16 opacity-0 invisible scale-95 pointer-events-none"
      } bg-[#0a0a0a]/95 backdrop-blur-2xl border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]`}
    >
      {/* Inner gradient orbs */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute -top-[30%] -left-[20%] w-[50%] h-[80%] bg-purple-600/15 rounded-full filter blur-[80px] animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[80%] bg-blue-600/10 rounded-full filter blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* Links */}
      <div className="relative z-10 flex flex-col items-center justify-center py-16 gap-3">
        {["Home", "Track", "About", "Waitlist"].map((item, i) => (
          <Link 
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={() => setIsMenuOpen(false)}
            className="text-[10vw] md:text-[5vw] font-black tracking-tighter text-white/30 hover:text-white transition-all duration-400 hover:scale-105 leading-tight"
            style={{ 
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(30px)', 
              opacity: isMenuOpen ? 1 : 0, 
              transitionDelay: `${i * 80 + 100}ms`,
              transitionProperty: 'transform, opacity, color, scale'
            }}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default Navbar;