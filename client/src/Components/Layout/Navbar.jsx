import { Link } from "react-router-dom";
import { UserCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import trakioLogo from "../../Assets/Images/TrakioLogo.png";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

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
    <nav className="w-full h-15 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      
      <Link to="/" className="flex items-center justify-center">
        <img src={trakioLogo} alt="Trakio Logo" className="h-20 w-auto mt-4 ml-0" />
      </Link>

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