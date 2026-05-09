import { Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../lib/supabase";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
const handleGoogleLogin = async () => {
  const { error } =
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });

  if (error) {
    alert(error.message);
  }
};
  const handleSubmit = async (e) => {
  e.preventDefault();

  setEmailError("");
  setPasswordError("");

  let isValid = true;

  const normalizedEmail = email.trim().toLowerCase();
  const allowedDomains = ["@nst.rishihood.edu.in", "@gmail.com"];
  if (!allowedDomains.some((d) => normalizedEmail.endsWith(d))) {
    setEmailError("Only official college emails or Gmail allowed");
    isValid = false;
  }

  if (password.length < 8) {
    setPasswordError(
      "Password must be at least 8 characters"
    );
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Login successful!");

  console.log(data);

  navigate("/track");
};
  return (
    <div className="flex min-h-screen items-start sm:items-center justify-center bg-black text-white font-sans relative overflow-hidden">      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-[30%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/3 -right-[35%] w-[60vw] h-[60vw] bg-blue-600/15 rounded-full mix-blend-screen filter blur-[150px] opacity-25 animate-pulse pointer-events-none" style={{ animationDuration: '7s' }} />
      <div className="absolute -bottom-[30%] left-1/2 w-[70vw] h-[70vw] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse pointer-events-none" style={{ animationDuration: '5s' }} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex flex-col items-center justify-center select-none opacity-80">
        <h1 className="whitespace-nowrap font-bold leading-[0.85] tracking-[-8px] text-white/5 text-[100px] sm:text-[160px] md:text-[240px] lg:text-[320px] text-center">TRAKIO</h1>
      </div>

      <div className="relative z-10 w-full h-screen sm:h-auto max-w-lg sm:max-w-lg px-4 sm:px-0 rounded-none sm:rounded-2xl bg-white/10 p-6 sm:p-10 shadow-2xl border border-white/20 backdrop-blur-xl flex flex-col">
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-all duration-300 mb-4 group sm:px-6"
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

        <form onSubmit={handleSubmit} className="flex flex-col mt-7 sm:px-6">
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
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
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
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
          />
          {passwordError && <p className="text-red-400 text-xs mt-1">{passwordError}</p>}

          <button
            type="submit"
            className="w-full mt-9 h-12 rounded-xl border border-white/10 
            bg-white text-black font-bold shadow-md hover:shadow-lg
            hover:bg-gray-100 
            active:scale-95 transition-all duration-200 ease-out"
          >
            Login
          </button>
        </form>

        <div className="relative flex items-center mt-6">
          <div className="grow border-t border-white/10" />
          <span className="mx-3 text-xs text-white/30">Or continue with</span>
          <div className="grow border-t border-white/10" />
        </div>
<div className="mt-4 sm:px-6">
  <button
    onClick={handleGoogleLogin}
    className="w-full flex items-center justify-center gap-3 h-12 rounded-xl border border-white/10 
    bg-white/5 text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
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
