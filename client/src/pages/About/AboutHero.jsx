import TeamMemberCard from "./TeamMemberCard";
import Yuvi from "../../Assets/team/Yuvi.png";
import Yash from "../../Assets/team/Yash.jpeg";
import Alien from "../../Assets/team/alien.png";

import { useState } from "react";
import RollingText from "../../Components/RollingText";

export default function AboutHero() {

  const [activeCard, setActiveCard] = useState(null);

  const members = [
    {
      id: 1,
      name: "Yashaswi Gusain",
      role: ".",
      image: Yash,
      about: "Passionate about crafting immersive frontend experiences and modern UI systems.",
    },
    {
      id: 2,
      name: "Shresth Juyal",
      role: ".",
      image: Alien,
      about: "Focused on scalable backend architecture, APIs, and performance optimization.",
    },
    {
      id: 3,
      name: "Yuvansh Juneja",
      role: ".",
      image: Yuvi,
      about:"Designs elegant user experiences with strong attention to detail and storytelling.",
    }
  ]
  return (



    <section className="hero relative flex flex-col items-center justify-center overflow-x-hidden bg-[#f5f5f5] py-40 pb-80">

      <h1 className="bg-text absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold leading-[0.85] tracking-[-10px] text-black/5 select-none z-0 text-[70px] sm:text-[140px] md:text-[270px] scale-x-120 text-center">THE TRAKIO</h1>

      <h1 className="bg-text absolute top-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold leading-[0.85] tracking-[-10px] text-black/5 select-none z-0 text-[70px] sm:text-[140px] md:text-[210px] scale-x-120 text-center">TRACKING APP</h1>

      <div className="hero-content relative z-10 text-center">

        <h2 className="main-heading select-none font-extrabold uppercase text-[#111] leading-[0.9] tracking-[-4px] text-[70px] sm:text-[90px] md:text-[120px] flex flex-col items-center">
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
          gap-8
          px-3
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