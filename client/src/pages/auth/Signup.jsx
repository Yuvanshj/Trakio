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

  if (
    !email.endsWith("@nst.rishihood.edu.in")
  ) {
    setEmailError(
      "Only official college emails allowed"
    );
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
    <div className="flex min-h-screen items-center justify-center bg-white-950 text-white font-sans relative overflow-hidden">
    
      <div className="relative w-full max-w-md rounded-xl bg-zinc-900 p-5 shadow-2xl border border-zinc-800 backdrop-blur-md">
        
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
<p className="text-4xl font-bold text-gray-200">Create Account</p>
          <p className="text-sm mt-2 text-gray-400">
            Join <span className="text-gray-200 font-semibold">Trackio</span> today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col mt-5">
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
            className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-2 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
            className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-2 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
            className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-2 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
            className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-2 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
            className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-2 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {addressError && <p className="text-red-400 text-xs mt-1">{addressError}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-5 h-10 rounded-lg border border-[#3F3F46]/30 
            bg-linear-to-b from-[#FAFAFA] to-[#E4E4E7] 
            text-[#18181B] font-semibold text-sm shadow-sm hover:shadow-md
            hover:from-[#EDEDED] hover:to-[#D4D4D8] 
            active:scale-95 transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
        
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="relative flex items-center mt-4">
          <div className="grow border-t border-[#3F3F46]" />
          <span className="mx-2 text-xs text-[#A1A1AA]">Or continue with</span>
          <div className="grow border-t border-[#3F3F46]" />
        </div>
  <div className="mt-3">
  <button
    onClick={handleGoogleLogin}
    className="w-full flex items-center justify-center gap-2 h-10 rounded-lg border border-zinc-700 
    bg-zinc-900 text-gray-200 hover:bg-zinc-800 transition-all duration-200 text-sm"
  >
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="google"
      className="w-4 h-4"
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
