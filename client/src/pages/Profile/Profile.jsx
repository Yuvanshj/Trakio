import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BusFront,
  Edit3,
  ShieldAlert,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import ChildrenCards from "./ChildrenCards";

const getDisplayName = (user) =>
  user?.user_metadata?.full_name ||
  user?.user_metadata?.name ||
  user?.user_metadata?.display_name ||
  user?.email?.split("@")[0] ||
  "Parent";

const getProfileImage = (user) => {
// (Google OAuth or uploaded)
//   const stored =
//     user?.user_metadata?.avatar_url ||
//     user?.user_metadata?.picture;

//   if (stored) return stored;

  const displayName = getDisplayName(user);
  const seed = displayName.replace(/\s+/g, "_").toLowerCase();
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&scale=80`;
};

const activityLogs = [
  { time: "07:18 AM", text: "Ishaan boarded BUS 12 at Gate 2." },
  { time: "07:25 AM", text: "Route update sent for North Campus Route." },
  { time: "08:02 AM", text: "Anaya reached school safely." },
  { time: "02:08 PM", text: "Drop alert prepared for BUS 08." },
];

const supportItems = [
  { label: "App Support", value: "help@trakio.app" },
  { label: "School Transport Office", value: "+91 98111 22334" },
  { label: "Emergency SOS", value: "+91 99999 00000" },
];


const Profile = () => {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Get authenticated user
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      
      // Fetch profile data from profiles table
      if (data.user?.id) {
        supabase
          .from("profiles")
          .select("*")
          .eq("id", data.user.id)
          .single()
          .then(({ data: profile, error }) => {
            if (!error && profile) {
              setProfileData(profile);
            }
          });
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
      
      // Fetch profile data when auth state changes
      if (session?.user?.id) {
        supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single()
          .then(({ data: profile, error }) => {
            if (!error && profile) {
              setProfileData(profile);
            }
          });
      } else {
        setProfileData(null);
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const displayName = getDisplayName(user);
  const profileImage = getProfileImage(user);
  const displayPhone = profileData?.phone || user?.phone || "Add phone number";
  const displayAddress = profileData?.address || "Add home address";
  const displayRole = user?.user_metadata?.role || "Parent / Guardian";
  const initials = displayName
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#0b0b0b] via-black to-[#040404] text-white">
      <div className="absolute inset-0 pointer-events-none opacity-70">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              {imageError ? (
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-xl font-semibold text-white">
                  {initials}
                </div>
              ) : (
                <img
                  src={profileImage}
                  alt={displayName}
                  onError={() => setImageError(true)}
                  className="h-20 w-20 rounded-2xl border border-white/10 object-cover shadow-lg"
                />
              )}
              <div>
                <h1 className="text-2xl font-bold text-white">{displayName}</h1>
                <p className="text-sm text-white/70">{displayRole}</p>
                <div className="mt-3 space-y-1 text-sm text-white/70">
                  <p>{user?.email || "No email"}</p>
                  <p>{displayPhone}</p>
                  <p>{displayAddress}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10">
                <Edit3 size={16} />
                Edit
              </button>
              <Link
                to="/track"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/85"
              >
                <BusFront size={16} />
                Track
              </Link>
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500/90 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Children</h2>
              <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/80 hover:bg-white/10">
                + Add
              </button>
            </div>
            <ChildrenCards />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Status</p>
              <p className="mt-3 text-2xl font-bold text-white">2 Children</p>
              <p className="mt-2 text-sm text-emerald-300">All tracking active</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <ShieldAlert size={18} className="text-red-400" />
                <h3 className="font-semibold text-white">Emergency SOS</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">Instant alert to school and driver</p>
              <button className="mt-4 w-full rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-400">
                Activate SOS
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-white">Support</h3>
              {supportItems.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm backdrop-blur-xl">
                  <p className="text-xs text-white/45">{item.label}</p>
                  <p className="mt-1 font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-8 sm:px-8">
          <h2 className="mb-4 text-xl font-semibold text-white">Recent Activity</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {activityLogs.map((log) => (
              <div key={log.time} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-sm font-medium text-white/55">{log.time}</p>
                <p className="mt-2 text-sm text-white">{log.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;