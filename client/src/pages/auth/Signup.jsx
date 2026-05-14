import { Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../lib/supabase";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  setNameError("");
  setEmailError("");
  setPasswordError("");
  setPhoneError("");
  setAddressError("");

  let isValid = true;

  if (name.trim().length < 2) {
    setNameError("Enter a valid name");
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    setEmailError("Enter a valid email address");
    isValid = false;
  }

  if (password.length < 8) {
    setPasswordError(
      "Password must be at least 8 characters"
    );
    isValid = false;
  }

  if (phone.trim().length < 10) {
    setPhoneError("Enter a valid phone number");
    isValid = false;
  }

  if (address.trim().length < 5) {
    setAddressError("Enter a valid address");
    isValid = false;
  }

  if (!isValid) {
    setLoading(false);
    return;
  }

  try {
    // Supabase signup
    const { data, error } =
      await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name.trim(),
          },
        },
      });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    // Create profile in profiles table
    if (data?.user?.id) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: data.user.id,
            full_name: name.trim(),
            phone: phone.trim(),
            address: address.trim(),
            email: email.trim(),
          },
        ]);

      if (profileError) {
        console.error('Error creating profile:', profileError);
        alert('Signup successful but profile creation failed. Please update your profile later.');
      } else {
        alert("Signup successful! Please check your email to verify your account.");
      }
    }

    navigate("/login");
  } catch (error) {
    alert("An unexpected error occurred. Please try again.");
    console.error("Signup error:", error);
  } finally {
    setLoading(false);
  }
};
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (error) {
      alert(error.message);
    }
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

      <div className="relative z-10 w-full h-screen sm:h-auto max-w-full sm:max-w-lg px-4 sm:px-0 rounded-none sm:rounded-2xl bg-white/10 p-6 sm:p-8 shadow-2xl border border-white/20 backdrop-blur-xl flex flex-col">
        
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
<p className="text-4xl font-bold text-gray-200">Create Account</p>
          <p className="text-sm mt-2 text-gray-400">
            Join <span className="text-gray-200 font-semibold">Trackio</span> today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col mt-5 sm:px-6">
          <label htmlFor="name" className="mb-1.5 text-sm font-medium text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Shresth Juyal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
          />
          {nameError && <p className="text-red-400 text-xs mt-1">{nameError}</p>}

          <label htmlFor="email" className="mt-3 mb-1.5 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
          />
          {emailError && <p className="text-red-400 text-xs mt-1">{emailError}</p>}

          <label htmlFor="password" className="mt-3 mb-1.5 text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
          />
          {passwordError && <p className="text-red-400 text-xs mt-1">{passwordError}</p>}

          <label htmlFor="phone" className="mt-3 mb-1.5 text-sm font-medium text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="9876543210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
          />
          {phoneError && <p className="text-red-400 text-xs mt-1">{phoneError}</p>}

          <label htmlFor="address" className="mt-3 mb-1.5 text-sm font-medium text-gray-300">
            Home Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="123 Main Street, City"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
          />
          {addressError && <p className="text-red-400 text-xs mt-1">{addressError}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 h-12 rounded-xl border border-white/10 
            bg-white text-black font-bold shadow-md hover:shadow-lg
            hover:bg-gray-100 
            active:scale-95 transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="relative flex items-center mt-5">
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
        <div className="relative flex items-center justify-center mt-4 gap-1 text-xs text-gray-400">
          <p>Already have an account?</p>
          <Link
            to="/login"
            className="text-gray-300 hover:text-white transition-colors duration-200"

          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
