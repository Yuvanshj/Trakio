import TeamMemberCard from "./TeamMemberCard";
import Yuvi from "../../Assets/team/Yuvi.png";
import Yash from "../../Assets/team/Yash.png";
import Alien from "../../Assets/team/alien.png";

import { useState } from "react";
import RollingText from "../../Components/RollingText";

export default function AboutHero() {

  const [activeCard, setActiveCard] = useState(null);

  const members = [
    {
      id: 1,
      name: "Yashaswi Gusain",
      role: "UI/UX Lead",
      image: Yash,
      about: "Passionate about crafting immersive frontend experiences and modern UI systems.",
    },
    {
      id: 2,
      name: "Shresth Juyal",
      role: "Backend Architect",
      image: Alien,
      about: "Focused on scalable backend architecture, APIs, and performance optimization.",
    },
    {
      id: 3,
      name: "Yuvansh Juneja",
      role: "Full Stack Developer",
      image: Yuvi,
      about:"Designs elegant user experiences with strong attention to detail and storytelling.",
    }
  ]
  return (



    <section className="hero relative flex flex-col items-center justify-center overflow-x-hidden bg-[#f5f5f5] pt-28 pb-32 md:pt-40 md:pb-80">

      <h1 className="hidden sm:block bg-text absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold leading-[0.85] tracking-[-10px] text-black/5 select-none z-0 text-[42px] sm:text-[90px] md:text-[180px] lg:text-[270px] scale-x-120 text-center">THE TRAKIO</h1>

      <h1 className="hidden sm:block bg-text absolute top-[250px] sm:top-[320px] md:top-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold leading-[0.85] tracking-[-10px] text-black/5 select-none z-0 text-[38px] sm:text-[80px] md:text-[150px] lg:text-[210px] scale-x-120 text-center">TRACKING APP</h1>

      <div className="hero-content relative z-10 text-center">

        <h2 className="main-heading select-none font-extrabold uppercase text-[#111] leading-[0.9] tracking-[-4px] text-[42px] sm:text-[70px] md:text-[95px] lg:text-[120px] flex flex-col items-center">
          <RollingText text="CONNECT WITH" delayOffset={0} />
          <RollingText text="OUR TEAM" delayOffset={12} />
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
          gap-6 md:gap-8
px-4 
md:px-6
mt-16
        "
      >
      {members.map((member, index) => (
    <TeamMemberCard
      key={member.id}
      member={member}
      index={index}
      activeCard={activeCard}
      setActiveCard={setActiveCard}
    />
  ))}
      </div>

    </section>
  );
}