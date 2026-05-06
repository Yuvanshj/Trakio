import TeamMemberCard from "./TeamMemberCard";

export default function AboutHero() {

  const members = [
    {
      id: 1,
      name: "Yashaswi Gusain",
      role: "Talwinder God",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
      id: 2,
      name: "Shresth Juyal",
      role: "Auth God",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      id: 3,
      name: "Yuvansh Juneja",
      role: "Map God",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    }
  ]
  return (



    <section className="hero relative flex flex-col items-center justify-center overflow-hidden bg-[#f5f5f5] py-40">

      <h1 className="bg-text absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold leading-[0.85] tracking-[-10px] text-black/5 select-none z-0 text-[70px] sm:text-[140px] md:text-[270px] scale-x-120 text-center">THE TRAKIO</h1>

      <h1 className="bg-text absolute top-100 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold leading-[0.85] tracking-[-10px] text-black/5 select-none z-0 text-[70px] sm:text-[140px] md:text-[210px] scale-x-120 text-center">TRACKING APP</h1>

      <div className="hero-content relative z-10 text-center">

        <h2 className="main-heading select-none font-extrabold uppercase text-[#111] leading-[0.9] tracking-[-4px] text-[70px] sm:text-[90px] md:text-[120px]">
          CONNECT WITH <br />
          OUR TEAM
        </h2>

      </div>

      <div
        className="
          relative
          z-10
          flex
          flex-col
          md:flex-row
          justify-center
          items-center
          gap-8
          px-6
        "
      >
        {members.map((member, index) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            index={index}
          />
        ))}
      </div>

    </section>
  );
}