import { Link } from "react-router-dom";
import { UserCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get current user
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    // Listen for login/logout
    const { data: listener } =
      supabase.auth.onAuthStateChange(
        (_, session) => {
          setUser(session?.user || null);
        }
      );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="w-full h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-black">
        Trakio
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-700 hover:text-black">
          Home
        </Link>

        <Link to="/track" className="text-gray-700 hover:text-black">
          Track
        </Link>

        <Link to="/about" className="text-gray-700 hover:text-black">
          About
        </Link>
      </div>

      {/* Auth Section */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <UserCircle
              size={32}
              className="text-gray-700"
            />

            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-lg bg-black text-white text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-700 hover:text-black"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-black text-white"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;