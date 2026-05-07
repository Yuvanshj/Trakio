export default function ConnectBanner() {

  const items = [
    "Instagram",
    "LinkedIn",
    "GitHub",
    "Mail",
    "The Trakio",
    "Connect",
    "Collaborate",
  ];

  return (
    <section
      className="
        group
        relative
        overflow-hidden

        bg-gradient-to-b
        from-white/20
        to-black

        py-8

        transition-all
        duration-700

        hover:scale-[1.01]
      "
    >

      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black" />
      <div className="connect-marquee">

        <div
          className="
            connect-marquee-content
            transition-all
            duration-700

            group-hover:invert
          "
        >

          {[...items, ...items].map((item, index) => (

            <div
              key={index}
              className="
                flex
                items-center
                gap-6
              "
            >

              <span
                className="
                  uppercase
                  tracking-[4px]

                  text-sm
                  md:text-base

                  font-semibold

                  text-black/30
                "
              >
                {item}
              </span>


              <span
                className="
                  text-black/30
                  text-xl

                  transition-all
                  duration-500

                  group-hover:text-black
                  group-hover:scale-150
                "
              >
                •
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}