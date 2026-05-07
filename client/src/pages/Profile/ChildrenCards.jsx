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

export default function ChildrenCards() {
  return (
    <div className="space-y-4">
      {children.map((child) => {
        const seed = child.name.replace(/\s+/g, "_").toLowerCase();
        const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seed)}&scale=80`;
        return (
        <article key={child.name} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors hover:border-white/20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-3">
              <img src={avatar} alt={child.name} className="h-14 w-14 rounded-2xl border border-white/10 bg-white/10 object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold text-white">{child.name}</h3>
                <p className="text-sm text-white/65">
                  {child.className} · {child.section}
                </p>
                <span className="mt-2 inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                  {child.status}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/45">ETA</p>
              <p className="mt-1 font-semibold text-white">{child.liveETA}</p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 grid-cols-2 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <p className="text-xs text-white/45">Bus</p>
              <p className="mt-1 text-sm font-medium text-white">{child.busNumber}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <p className="text-xs text-white/45">Route</p>
              <p className="mt-1 text-sm font-medium text-white">{child.route.split(" ")[0]}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <p className="text-xs text-white/45">Pickup</p>
              <p className="mt-1 text-sm font-medium text-white">{child.pickup}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <p className="text-xs text-white/45">Drop</p>
              <p className="mt-1 text-sm font-medium text-white">{child.drop.split(" ")[0]}</p>
            </div>
          </div>

          <div className="mt-3 flex gap-2 text-xs text-white/55">
            <p>{child.timings}</p>
          </div>
        </article>
      );
      })}
    </div>
  );
}
