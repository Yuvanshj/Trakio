export default function HeroSection() {
  return (

    <section
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-black

        flex
        flex-col
        items-center
      "
    >

      <div
        className="
          absolute
          top-[-200px]
          left-[-100px]

          w-[500px]
          h-[500px]

          bg-white/10

          blur-[140px]

          rounded-full
        "
      />

      <div
        className="
          absolute
          top-[-100px]
          right-[-100px]

          w-[400px]
          h-[400px]

          bg-orange-500/20

          blur-[140px]

          rounded-full
        "
      />

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-black/30
          via-black
          to-black
        "
      />

      <div
  className="
    relative
    z-10

    w-full
    max-w-7xl

    px-6
    pt-40

    flex
    flex-col
    items-center
    text-center
  "
>

  <div
    className="
      mb-8

      rounded-full

      border
      border-white/10

      bg-white/5

      px-5
      py-2

      backdrop-blur-xl
    "
  >

    <p
      className="
        text-sm
        tracking-[3px]
        uppercase
        text-white/70
      "
    >
        We Welcome You To
    </p>

  </div>
  <h1
    className="
      max-w-5xl

      font-black

      leading-[0.9]

      tracking-[-5px]

      text-white

      text-[60px]
      sm:text-[80px]
      md:text-[110px]
      lg:text-[130px]
    "
  >
    India's 1st
    <br />
    Live Traking
    <br />
    Kuch Tho
  </h1>

  <p
    className="
      mt-10

      max-w-3xl

      text-white/50

      leading-8

      text-lg
      md:text-xl
    "
  >
    Overcoming common pitfalls in adopting
    time tracking and efficient work habits
    to build lasting success.
  </p>

</div>

<div
  className="
    mt-14

    w-full
    max-w-3xl
  "
>

  <div
    className="
      flex
      flex-col
      sm:flex-row

      items-center

      gap-4

      rounded-full

      border
      border-white/10

      bg-white/[0.05]

      p-3

      backdrop-blur-xl
    "
  >

    <input
      type="email"
      placeholder="Enter Your Email Here"
      className="
        flex-1

        bg-transparent

        px-6
        py-4

        text-white

        outline-none

        placeholder:text-white/30
      "
    />

    <button
      className="
        rounded-full

        bg-orange-500

        px-10
        py-4

        font-semibold

        text-white

        transition-all
        duration-300

        hover:scale-105
        hover:bg-orange-400
      "
    >
      Sign Up
    </button>

  </div>

</div>


{/* Dashboard Preview */}
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

  {/* Main Wrapper */}
  <div
    className="
      relative

      w-full
      max-w-6xl

      h-[700px]
    "
  >

    {/* Card 1 */}
    <div
      className="
        absolute

        left-0
        top-20

        w-[370px]
        h-[220px]

        rounded-[30px]

        border
        border-white/10

        bg-white/[0.05]

        backdrop-blur-xl

        p-6
      "
    >

      <div className="flex items-center justify-between">

        <p className="text-white/60 text-sm">
          Weekly Progress
        </p>

        <div className="w-3 h-3 rounded-full bg-green-400" />

      </div>

      <h3
        className="
          mt-6

          text-5xl

          font-black

          text-white
        "
      >
        78%
      </h3>

      <div
        className="
          mt-8

          h-3

          rounded-full

          bg-white/10
        "
      >

        <div
          className="
            h-full
            w-[78%]

            rounded-full

            bg-orange-500
          "
        />

      </div>

    </div>

    {/* Card 2 */}
    <div
      className="
        absolute

        left-1/2
        top-0

        -translate-x-1/2

        w-[370px]
        h-[280px]

        rounded-[35px]

        border
        border-white/10

        bg-white/[0.06]

        backdrop-blur-xl

        p-8
      "
    >

      <div className="flex justify-between items-center">

        <div>

          <p className="text-white/50 text-sm">
            Active Tasks
          </p>

          <h3
            className="
              mt-3

              text-6xl

              font-black

              text-white
            "
          >
            24
          </h3>

        </div>

        <div
          className="
            w-16
            h-16

            rounded-2xl

            bg-orange-500/20

            flex
            items-center
            justify-center
          "
        >

          <span className="text-3xl">
            ⚡
          </span>

        </div>

      </div>

      <div className="mt-10 flex gap-3">

        <div className="flex-1 h-24 rounded-2xl bg-white/5" />

        <div className="flex-1 h-24 rounded-2xl bg-orange-500/20" />

      </div>

    </div>

    {/* Card 3 */}
    <div
      className="
        absolute

        right-0
        top-10

        w-[370px]
        h-[240px]

        rounded-[30px]

        border
        border-white/10

        bg-white/[0.05]

        backdrop-blur-xl

        p-6
      "
    >

      <p className="text-white/60 text-sm">
        Productivity
      </p>

      <h3
        className="
          mt-4

          text-5xl

          font-black

          text-white
        "
      >
        +32%
      </h3>

      <div className="mt-10 space-y-3">

        <div className="h-3 rounded-full bg-white/10" />
        <div className="h-3 rounded-full bg-white/10 w-[80%]" />
        <div className="h-3 rounded-full bg-orange-500 w-[60%]" />

      </div>

    </div>

  </div>

</div>

    </section>


  );
}
