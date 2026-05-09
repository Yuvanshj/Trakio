import childImage from "../../assets/Images/child.png";
export default function FinalCTASection() {

  return (

    <section className="bg-black">

      <div
        className="
          w-[95%]
          max-w-[1700px]
          mx-auto

          px-6
          md:px-10

          pt-24
          pb-48
        "
      >

        <div
          className="
            overflow-hidden

            rounded-[40px]

            border
            border-white/10

            bg-[#0a0a0a]
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
            "
          >

            <div
              className="
                flex
                flex-col
                justify-center

                p-10
                md:p-16
              "
            >

              <p
                className="
                  uppercase

                  tracking-[3px]

                  text-xs

                  text-white
                "
              >
                <b>The Trakio</b> is all you need to ensure your child’s safety on the bus.
              </p>

              <h2
                className="
                  mt-8

                  text-5xl
                  md:text-7xl

                  font-black

                  leading-[0.95]

                  tracking-[-4px]

                  text-white
                "
              >
                Because Every Child’s Journey Matters.
              </h2>

              <p
                className="
                  mt-8

                  max-w-xl

                  text-lg

                  leading-9

                  text-white
                "
              >
                Together, let’s build safer,
                smarter and better everyday journeys.
              </p>

              <div
                className="
                  mt-10

                  flex
                  flex-wrap

                  gap-4
                "
              >

                <button
                  className="
                    rounded-2xl

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
                  Start Tracking Today
                </button>

                <button
                  className="
                    rounded-2xl

                    border
                    border-white/10

                    bg-white/5

                    px-8
                    py-4

                    font-medium

                    text-white

                    transition-all
                    duration-300

                    hover:bg-white/10
                  "
                >
                  For Schools
                </button>

              </div>

            </div>

            <div
  className="
    relative
    min-h-[560px]

    overflow-hidden
  "
>

  <img
    src={childImage}
    alt="Child Looking Outside Bus"

    className="
      absolute
      inset-0

      w-full
      h-full

      object-cover

      grayscale
    "
  />

  <div
    className="
      absolute
      inset-0

      bg-black/40
    "
  />

  <div
    className="
      absolute
      inset-y-0
      left-0

      w-40

      bg-gradient-to-r
      from-[#0a0a0a]
      to-transparent
    "
  />

</div>

          </div>

        </div>

      </div>

    </section>

  );
}