import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-white border-b border-gray-200 px-6 flex items-center gap-6">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-xl font-bold text-black">Trakio</span>
      </Link>

      <div className="flex flex-1 items-center justify-center">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-black transition-colors">
            Home
          </Link>
          <Link to="/track" className="text-gray-700 hover:text-black transition-colors">
            Track
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-black transition-colors">
            About
          </Link>
        </div>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            to="/login"
            className="text-gray-700 hover:text-black transition-colors"
          >
            Login
          </Link>
          <Link 
            to="/signup"
            className="px-4 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Sign Up
          </Link>
        </div>
    </nav>
  );
};

export default Navbar