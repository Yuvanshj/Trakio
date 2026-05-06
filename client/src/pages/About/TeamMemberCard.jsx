export default function TeamMemberCard({
  member,
  index,
  activeCard,
  setActiveCard,
}) {

  const isActive = activeCard === member.id;

  return (
    <div
      onClick={() =>
        setActiveCard(isActive ? null : member.id)
      }

      className={`
        group
        relative
        overflow-hidden
        rounded-[30px]
        cursor-pointer

        transition-all
        duration-700

        w-110
        

        ${
          isActive
            ? "h-155 scale-105"
            : "h-125"
        }

        ${
          index === 1
            ? "md:translate-y-30"
            : "md:translate-y-50"
        }

        ${
          activeCard && !isActive
            ? "opacity-40 scale-95"
            : "opacity-100"
        }
      `}
    >

  
      <img
        src={member.image}
        alt={member.name}
        className="
          w-full
          h-full
          object-cover

          transition-transform
          duration-700

          group-hover:scale-110
        "
      />

     
      <div
        className="
          absolute
          inset-0
          bg-linear-to-t
          from-black/90
          via-black/30
          to-transparent
        "
      />

   
      <div
        className="
          absolute
          bottom-0
          left-0
          p-8
          text-white
          w-full
        "
      >


        <h3 className="text-4xl font-black tracking-tight">
          {member.name}
        </h3>


        <p
          className="
            text-sm
            uppercase
            tracking-[3px]
            text-white/70
            mt-2
          "
        >
          {member.role}
        </p>


        <div
          className={`
            overflow-hidden
            transition-all
            duration-700

            ${
              isActive
                ? "max-h-50 opacity-100 mt-6"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <p className="text-sm leading-7 text-white/80">
            {member.about}
          </p>

        </div>

      </div>

    </div>
  );
}