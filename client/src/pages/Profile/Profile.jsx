import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  BusFront,
  Edit3,
  History,
  LifeBuoy,
  MapPin,
  Phone,
  ShieldAlert,
  UserCircle2,
} from "lucide-react";
import { supabase } from "../../lib/supabase";

const getDisplayName = (user) =>
  user?.user_metadata?.full_name ||
  user?.user_metadata?.name ||
  user?.user_metadata?.display_name ||
  user?.email?.split("@")[0] ||
  "Parent";

const getProfileImage = (user) => {
  // First check for stored metadata (Google OAuth or uploaded)
  const stored =
    user?.user_metadata?.avatar_url ||
    user?.user_metadata?.picture;

  if (stored) return stored;

  const displayName = getDisplayName(user);
  const seed = displayName.replace(/\s+/g, "_").toLowerCase();
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&scale=80`;
};

const children = [
  {
    name: "Ishaan Mehta",
    className: "Class 4",
    section: "Section B",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    busNumber: "BUS 12",
    route: "North Campus Route",
    pickup: "Palm Grove Stop",
    drop: "Sunrise International School",
    timings: "Pickup 7:10 AM · Drop 2:05 PM",
    status: "On Bus",
    lastUpdate: "Last scanned at Gate 2, 7:18 AM",
    liveETA: "ETA 6 min",
  },
  {
    name: "Anaya Mehta",
    className: "Class 1",
    section: "Section A",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    busNumber: "BUS 08",
    route: "South Loop Route",
    pickup: "Sector 21 Club Stop",
    drop: "Sunrise International School",
    timings: "Pickup 7:25 AM · Drop 2:20 PM",
    status: "At School",
    lastUpdate: "Reached school at 8:02 AM",
    liveETA: "ETA —",
  },
];

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
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <section className="overflow-hidden rounded-4xl border border-white/60 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl">
          <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                {imageError ? (
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-slate-950 text-2xl font-semibold text-white ring-4 ring-white shadow-lg -mt-4" style={{ borderRadius: '50%' }}>
                    {initials}
                  </div>
                ) : (
                  <img
                    src={profileImage}
                    alt={displayName}
                    onError={() => setImageError(true)}
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-white shadow-lg -mt-4"
                  />
                )}
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                    Parent Profile
                  </p>
                  <h1 className="mt-1 text-3xl font-bold text-slate-950 sm:text-4xl">
                    {displayName}
                  </h1>
                  <p className="mt-2 text-sm text-slate-600">{displayRole}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-700">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                      <UserCircle2 size={16} />
                      {user?.email || "No email available"}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                      <Phone size={16} />
                      {displayPhone}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                      <MapPin size={16} />
                      {displayAddress}
                    </span>
                 
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50">
                  <Edit3 size={16} />
                  Edit Profile
                </button>
                <Link
                  to="/track"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                >
                  <BusFront size={16} />
                  Live Bus Tracking
                </Link>
              </div>
            </div>

            <div className="grid gap-3 rounded-3xl bg-slate-950 p-5 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Quick Status</p>
                  <p className="mt-2 text-xl font-semibold">2 Children Linked</p>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-300">
                  All Alerts Active
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Next Pickup</p>
                  <p className="mt-2 text-lg font-semibold">7:10 AM</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Live ETA</p>
                  <p className="mt-2 text-lg font-semibold">6 min</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Bus Status</p>
                  <p className="mt-2 text-lg font-semibold">On Route</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6 rounded-4xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Linked Children</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-950">Children and transport details</h2>
              </div>
              <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Add Child
              </button>
            </div>

            <div className="space-y-4">
              {children.map((child) => (
                <article key={child.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-4">
                      <img src={child.photo} alt={child.name} className="h-16 w-16 rounded-2xl object-cover" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">{child.name}</h3>
                        <p className="text-sm text-slate-600">
                          {child.className} · {child.section}
                        </p>
                        <p className="mt-2 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                          {child.status}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white px-4 py-3 text-right shadow-sm">
                      <p className="text-xs uppercase tracking-wide text-slate-500">Live ETA</p>
                      <p className="text-lg font-semibold text-slate-950">{child.liveETA}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-500">Bus & Route</p>
                      <p className="mt-2 font-medium text-slate-950">{child.busNumber}</p>
                      <p className="text-sm text-slate-600">{child.route}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-500">Pickup / Drop</p>
                      <p className="mt-2 text-sm text-slate-700">Pickup: {child.pickup}</p>
                      <p className="text-sm text-slate-700">Drop: {child.drop}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-500">Timings</p>
                      <p className="mt-2 text-sm text-slate-700">{child.timings}</p>
                      <p className="text-sm text-slate-700">{child.lastUpdate}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-500">Actions</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button className="rounded-full bg-slate-950 px-4 py-2 text-xs font-medium text-white">
                          Track Bus
                        </button>
                        <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700">
                          View History
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <section className="rounded-4xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-amber-500" size={20} />
                <h2 className="text-2xl font-bold text-slate-950">Emergency & Contacts</h2>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <button className="rounded-2xl bg-red-600 px-5 py-4 text-left text-white shadow-lg shadow-red-600/20 transition-transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 font-semibold">
                    <ShieldAlert size={18} />
                    Emergency SOS
                  </div>
                  <p className="mt-2 text-sm text-red-100">Instant alert to school, driver, and guardians</p>
                </button>

                {supportItems.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                    <p className="mt-2 text-base font-medium text-slate-950">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Driver & Attendant</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="font-medium text-slate-950">Driver: Rajesh Kumar</p>
                    <p className="text-sm text-slate-600">+91 98100 11223 · Verified badge active</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-950">Attendant: Meena Sharma</p>
                    <p className="text-sm text-slate-600">+91 98100 33445 · Boarding support</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-4xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <History className="text-slate-600" size={20} />
                <h2 className="text-2xl font-bold text-slate-950">Boarding & Drop Activity</h2>
              </div>

              <div className="mt-5 space-y-3">
                {activityLogs.map((log) => (
                  <div key={log.time} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                    <div className="w-20 shrink-0 text-sm font-medium text-slate-500">{log.time}</div>
                    <p className="text-sm text-slate-700">{log.text}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </section>

          <section className="rounded-4xl border border-white/70 bg-slate-950 p-6 text-white shadow-[0_20px_80px_rgba(15,23,42,0.16)]">
          <article className="rounded-4xl border border-white/70 bg-slate-950 p-6 text-white shadow-[0_20px_80px_rgba(15,23,42,0.16)]">
            <div className="flex items-center gap-3">
              <LifeBuoy size={20} className="text-cyan-300" />
              <h2 className="text-2xl font-bold">Help & Support</h2>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl bg-white/5 p-4">
                App support, transport office, emergency contacts, and FAQ access.
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                Multiple child management, route updates, and account recovery tools.
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                Logout option available below for secure account switching.
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Logout
            </button>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Profile;