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
      Productivity Reimagined
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
    Time Tracking
    <br />
    And Efficient Habits
    <br />
    Lead To Success
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

    </section>


  );
}
