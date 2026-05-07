export default function HeroSection() {
  return (

    <section
      className="
        min-h-screen

        bg-[#f5f3ee]

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

    </section>
  );
}