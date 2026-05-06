export default function TeamMemberCard({
  member,
  index,
}) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[30px]
        cursor-pointer
        transition-all
        duration-500

        w-[320px]
        h-[500px]

        ${
          index === 1
            ? "md:-translate-y-10"
            : "md:translate-y-10"
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
          bg-gradient-to-t
          from-black/80
          via-black/20
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

      </div>

    </div>
  );
}