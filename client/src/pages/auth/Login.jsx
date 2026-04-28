import { Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    
    let isValid = true;
    
    if (!email.includes("@") || !email.includes(".com")) {
      setEmailError("Enter correct email");
      isValid = false;
    }
    
    if (password.length < 8) {
      setPasswordError("Enter correct password length");
      isValid = false;
    }
      if (isValid) {
      navigate("/");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full 
          bg-linear-to-r from-gray-500/10 via-gray-400/10 to-gray-300/10 
          blur-3xl opacity-40"></div>

        <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full 
          bg-linear-to-r from-gray-500/10 via-gray-400/10 to-gray-300/10 
          blur-3xl opacity-40"></div>
      </div>

      <div className="relative w-full max-w-md rounded-xl bg-zinc-900 p-8 shadow-2xl border border-zinc-800 backdrop-blur-md">
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-all duration-300 mb-4 group"
        >
          <Home
            size={18}
            className="group-hover:scale-110 transition-transform duration-300 text-gray-400"
          />
          <span className="text-sm font-medium group-hover:text-gray-200 transition-all duration-300">
            Back to Home
          </span>
        </Link>

        <div className="flex items-center justify-center flex-col mt-3">
          <p className="text-4xl font-bold bg-text-gray-200
">
            Welcome Back
          </p>
          <p className="text-sm mt-3 text-gray-400">
            Login to your <span className="text-gray-200 font-semibold">Trackio</span> account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col mt-7">
          <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-3 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {emailError && <p className="text-red-400 text-xs mt-1">{emailError}</p>}

          <div className="flex items-center justify-between mt-9 mb-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-300">
              Password
            </label>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Forgot your password?
            </a>
          </div>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-3 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {passwordError && <p className="text-red-400 text-xs mt-1">{passwordError}</p>}

          <button
            type="submit"
            className="w-full mt-9 h-11 rounded-lg border border-[#3F3F46]/30 
            bg-linear-to-b from-[#FAFAFA] to-[#E4E4E7] 
            text-[#18181B] font-semibold shadow-sm hover:shadow-md
            hover:from-[#EDEDED] hover:to-[#D4D4D8] 
            active:scale-95 transition-all duration-200 ease-out"
          >
            Login
          </button>
        </form>

        <div className="relative flex items-center mt-5">
          <div className="grow border-t border-[#3F3F46]" />
          <span className="mx-3 text-xs text-[#A1A1AA]">Or continue with</span>
          <div className="grow border-t border-[#3F3F46]" />
        </div>
<div className="mt-4">
  <button
    // onClick={handleGoogleLogin}
    className="w-full flex items-center justify-center gap-3 h-11 rounded-lg border border-zinc-700 
    bg-zinc-900 text-gray-200 hover:bg-zinc-800 transition-all duration-200"
  >
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="google"
      className="w-5 h-5"
    />
    Continue with Google
  </button>
</div>
        <div className="relative flex items-center justify-center mt-6 gap-1 text-sm text-gray-400">
          <p>Don’t have an account?</p>
          <Link
            to="/signup"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
