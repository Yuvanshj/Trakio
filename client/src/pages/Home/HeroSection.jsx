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


      {/* Bus and Floating Cards Section */}
      <div className="relative -mt-64 w-full max-w-[1400px] mx-auto flex justify-center items-center px-4 min-h-[500px] z-20">
        
        {/* Dashed line and dots */}
        <div className="absolute bottom-20 w-[80%] h-[120px] rounded-[100%] border-2 border-dashed border-black/10 z-0"></div>
        <div className="absolute left-[15%] bottom-24 w-4 h-4 rounded-full bg-[#f6bd60] border-4 border-white shadow-md z-0"></div>
        <div className="absolute right-[15%] bottom-20 w-4 h-4 rounded-full bg-[#f6bd60] border-4 border-white shadow-md z-0"></div>

        {/* Bus Image */}
        <img 
          src={heroBusImage} 
          alt="School Bus" 
          className="relative z-10 w-[95%] md:w-[75%] lg:w-[65%] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]" 
        />

        {/* Floating Card 1: Left */}
        <div className="hidden md:block absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md border border-white/50 p-5 rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] w-60 transform transition-transform hover:scale-105">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-bold text-gray-400 tracking-wide">Live Location</span>
            <div className="w-2 h-2 rounded-full bg-[#f6bd60] animate-pulse"></div>
          </div>
          <div className="text-sm font-black text-gray-800">Route 12</div>
          <div className="text-xs font-semibold text-gray-500 mb-4">St Mary's School</div>
          <div className="flex items-baseline gap-1">
            <div className="text-[40px] font-black text-black leading-none tracking-tight">2.4</div>
            <div className="text-sm font-bold text-gray-600">km</div>
          </div>
          <div className="text-[10px] font-bold text-gray-400 mb-5 mt-1 tracking-wide">Away from School</div>
          <button className="text-xs font-black text-black flex items-center gap-1 hover:text-gray-600 transition-colors">View on Map &rarr;</button>
        </div>

        {/* Floating Card 2: Top Right */}
        <div className="hidden md:block absolute right-4 lg:right-16 top-[15%] z-20 bg-white/90 backdrop-blur-md border border-white/50 p-5 rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] w-48 transform transition-transform hover:scale-105">
          <div className="text-[11px] font-bold text-gray-400 mb-1 tracking-wide">Next Stop</div>
          <div className="text-sm font-black text-gray-800 mb-2">Green Park</div>
          <div className="text-2xl font-black text-black tracking-tight">10:24 AM</div>
          <div className="text-[11px] font-bold text-gray-400 mt-1 tracking-wide">ETA</div>
        </div>

        {/* Floating Card 3: Bottom Right */}
        <div className="hidden md:block absolute right-4 lg:right-16 bottom-[15%] z-20 bg-white/90 backdrop-blur-md border border-white/50 p-5 rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] w-52 transform transition-transform hover:scale-105">
          <div className="text-[11px] font-bold text-gray-400 mb-3 tracking-wide">Students Onboard</div>
          <div className="flex items-end gap-1 mb-4">
            <span className="text-4xl font-black text-black leading-none tracking-tight">28</span>
            <span className="text-sm font-bold text-gray-400 mb-1">/35</span>
          </div>
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm"></div>
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white shadow-sm"></div>
            <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white shadow-sm"></div>
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-black border-2 border-white shadow-sm">+23</div>
          </div>
        </div>
      </div>

      {/* Bottom Notification Pill */}
      <div className="relative flex justify-center -mt-8 z-30 pb-20">
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