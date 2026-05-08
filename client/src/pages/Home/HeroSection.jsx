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

     
        </div>

      </div>


      {/* Bus and Floating Cards Section */}
      <div className="relative -mt-64 w-full max-w-[1400px] mx-auto flex justify-center items-center px-4 min-h-[500px] z-20">
        {/* Bus Image */}
        <img 
          src={heroBusImage} 
          alt="School Bus" 
          className="relative z-10 w-[95%] md:w-[75%] lg:w-[65%] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]" 
        />
      </div>

      <div className="relative z-30 -mt-12 pb-10 flex justify-center px-4">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="rounded-2xl bg-black px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105"
          >
            For Parents
          </button>

          <button
            className="rounded-2xl border border-black/10 bg-white px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105"
          >
            For Schools
          </button>
        </div>
      </div>

      {/* Bottom Notification Pill */}
      <div className="relative flex justify-center z-30 pb-20">
        <div className="bg-white/90 backdrop-blur-md shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-full py-3 px-6 flex items-center gap-4 border border-gray-100 transform transition-transform hover:-translate-y-1">
          <div className="w-8 h-8 rounded-full bg-[#f6bd60] flex items-center justify-center text-white shadow-inner">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
          </div>
          <span className="text-sm font-bold text-gray-800 tracking-tight">Get instant alerts when your child boards and reaches.</span>
        </div>
      </div>

    </section>
  );
}