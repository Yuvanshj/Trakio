export default function HeroSection() {
  return (

    <section
      className="
        min-h-screen

        bg-white

        overflow-hidden
      "
    >


      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          md:px-10

          pt-32
          pb-20
        "
      >

     
        <div
          className="
            flex
            flex-col

            items-center
            text-center
          "
        >

          <h1
            className="
              max-w-5xl

              font-black

              leading-[0.9]

              tracking-[-5px]

              text-[#111]

              text-[60px]
              sm:text-[80px]
              md:text-[110px]
            "
          >
            Track Every Ride.
            <br />
            Ensure Every Arrival.
          </h1>

          <p
            className="
              mt-8

              max-w-2xl

              text-black/60

              leading-8

              text-lg
              md:text-xl
            "
          >
            Real-time school bus tracking for parents.
            Complete transport management for schools.
          </p>

     
          <div
            className="
              mt-10

              flex
              flex-wrap

              justify-center

              gap-4
            "
          >

            <button
              className="
                rounded-2xl

                bg-black

                px-8
                py-4

                font-medium

                text-white

                transition-all
                duration-300

                hover:scale-105
              "
            >
              For Parents
            </button>

            <button
              className="
                rounded-2xl

                border
                border-black/10

                bg-white

                px-8
                py-4

                font-medium

                text-black

                transition-all
                duration-300

                hover:scale-105
              "
            >
              For Schools
            </button>

          </div>

        </div>

      </div>


<div
  className="
    relative

    mt-24

    w-full

    flex
    justify-center
    items-center
  "
>


  <div
    className="
      absolute

      bottom-10

      w-[90%]
      max-w-5xl

      h-[180px]

      rounded-full

      border-2
      border-dashed
      border-black/10
    "
  />


  <div
    className="
      absolute

      left-[10%]
      bottom-28

      w-5
      h-5

      rounded-full

      bg-orange-400

      border-4
      border-white
    "
  />


  <div
    className="
      absolute

      right-[10%]
      bottom-24

      w-5
      h-5

      rounded-full

      bg-orange-400

      border-4
      border-white
    "
  />

  <img
    src="/bus.png"
    alt="School Bus"

    className="
      relative
      z-10

      w-full
      max-w-5xl

      object-contain
    "
  />

</div>

    </section>
  );
}