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
        "
      >

      </div>

    </section>
  );
}