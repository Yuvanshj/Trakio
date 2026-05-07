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
    <nav className="w-full h-17 bg-white border-b border-gray-200 px-6 flex items-center">

      <div className="flex items-center mt-3">
        <Link to="/" className="flex items-center">
          <img src={trakioLogo} alt="Trakio Logo" className="h-14 md:h-16 w-auto" />
        </Link>
<p className="text-black text-xl font-bold tracking-tight items-center justify-between mb-2">
  Trakio
</p>      </div>

      <div className="flex-3 flex items-center justify-center">
        <div className="bg-gray-100 rounded-full px-6 py-1 flex items-center gap-4 shadow-sm">
          <Link to="/" className="px-3 md:px-4 py-2 rounded-full text-gray-700 hover:text-black transition-colors">
            Home
          </Link>

          <Link to="/track" className="px-3 md:px-4 py-2 rounded-full text-gray-700 hover:text-black transition-colors">
            Track
          </Link>

          <Link to="/about" className="px-3 md:px-4 py-2 rounded-full text-gray-700 hover:text-black transition-colors">
            About
          </Link>
          <Link to="/" className="px-3 md:px-4 py-2 rounded-full text-gray-700 hover:text-black transition-colors">
            App
          </Link>
        </div>
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