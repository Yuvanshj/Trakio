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
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-6xl">
        <div className="border-b border-gray-200 px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              {imageError ? (
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-gray-950 text-xl font-semibold text-white">
                  {initials}
                </div>
              ) : (
                <img
                  src={profileImage}
                  alt={displayName}
                  onError={() => setImageError(true)}
                  className="h-20 w-20 rounded-lg object-cover"
                />
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-950">{displayName}</h1>
                <p className="text-sm text-gray-600">{displayRole}</p>
                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <p>{user?.email || "No email"}</p>
                  <p>{displayPhone}</p>
                  <p>{displayAddress}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50">
                <Edit3 size={16} />
                Edit
              </button>
              <Link
                to="/track"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                <BusFront size={16} />
                Track
              </Link>
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Children</h2>
              <button className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                + Add
              </button>
            </div>
            <ChildrenCards />
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="text-xs font-semibold uppercase text-gray-500">Status</p>
              <p className="mt-3 text-2xl font-bold text-gray-900">2 Children</p>
              <p className="mt-2 text-sm text-emerald-600">All tracking active</p>
            </div>

            <div className="rounded-lg bg-red-50 p-5">
              <div className="flex items-center gap-2">
                <ShieldAlert size={18} className="text-red-600" />
                <h3 className="font-semibold text-red-900">Emergency SOS</h3>
              </div>
              <p className="mt-3 text-sm text-red-800">Instant alert to school and driver</p>
              <button className="mt-4 w-full rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
                Activate SOS
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Support</h3>
              {supportItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-gray-200 p-3 text-sm">
                  <p className="text-xs text-gray-600">{item.label}</p>
                  <p className="mt-1 font-medium text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-8 sm:px-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Recent Activity</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {activityLogs.map((log) => (
              <div key={log.time} className="rounded-lg border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-600">{log.time}</p>
                <p className="mt-2 text-sm text-gray-900">{log.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;