import heroBusImage from "../../Assets/bus ki photu/Bus Extraction Request May 8 2026.png";

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

          pt-12
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

              leading-[1.05]

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

          <div className="relative z-30 mt-10 mb-[-4rem] flex flex-wrap justify-center gap-4 px-4">
            <button
              className="rounded-2xl bg-black px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              For Parents
            </button>

            <button
              className="rounded-2xl border border-black/10 bg-white px-8 py-4 font-medium text-black shadow-lg transition-all duration-300 hover:scale-105"
            >
              For Schools
            </button>
          </div>

     
        </div>

      </div>


      {/* Bus and Floating Cards Section */}
      <div className="relative -mt-44 w-full max-w-[1400px] mx-auto flex justify-center items-center px-4 min-h-[500px] z-20">
        {/* Bus Image */}
        <img 
          src={heroBusImage} 
          alt="School Bus" 
          className="relative z-10 w-[95%] md:w-[75%] lg:w-[65%] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]" 
        />
      </div>

    </section>
  );
}