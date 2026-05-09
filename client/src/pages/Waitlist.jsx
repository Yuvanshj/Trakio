import { useState } from 'react';
import trakioLogo from '../Assets/Images/icons/TrakioLogo.png';
import { SiSupabase, SiReact, SiNodedotjs, SiExpress } from 'react-icons/si';
import mobileViewImg from '../Assets/Images/Mobile View Request.png';
import ShinyText from '../Components/ShinyText/ShinyText';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();

    if (email) {
      setJoined(true);
      setEmail('');

      setTimeout(() => {
        setJoined(false);
      }, 3000);
    }
  };

  return (
    <div className="relative w-full h-[calc(100dvh-4.25rem)] overflow-hidden bg-linear-to-br from-[#0b0b0b] via-black to-[#040404] text-white font-sans selection:bg-white/20 flex flex-col justify-start pt-8 lg:pt-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex flex-col items-center justify-center select-none opacity-80">
        <h1 className="whitespace-nowrap font-bold leading-[0.85] tracking-[-8px] text-white/5 text-[100px] sm:text-[160px] md:text-[240px] lg:text-[320px] text-center">
          THE TRAKIO
        </h1>

        <h1 className="whitespace-nowrap font-bold leading-[0.85] tracking-[-8px] text-white/5 text-[100px] sm:text-[160px] md:text-[240px] lg:text-[320px] text-center">
          MOBILE APP
        </h1>
      </div>

      <div className="h-full w-full max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-16 flex flex-col justify-start relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full pt-4 sm:pt-6 md:pt-8 lg:pt-10 lg:pt-12">
          
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-2xl">
            <div className="mb-3 relative group inline-block">
              <img
                src={trakioLogo}
                alt="Trakio Logo"
                className="h-28 sm:h-32 lg:h-36 w-auto relative z-10 transition-transform duration-500 group-hover:scale-105 brightness-0 invert"
              />
            </div>

            <div className="mb-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-gray-200">
                Early Access Available
              </p>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 tracking-tight leading-[1.1]">
              <ShinyText 
                text="Join the waitlist" 
                disabled={false} 
                speed={3} 
                className="" 
                color="#b5b5b5" 
                shineColor="#ffffff" 
              />
            </h1>

            <p className="text-gray-300 text-lg sm:text-2xl max-w-lg mb-8 font-medium leading-relaxed sm:leading-[1.8] md:leading-[2.0]">
              Receive all the latest news and updates, as well as early access
              to the Trakio beta.
            </p>

            <form
              onSubmit={handleJoin}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mb-10"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full h-full bg-[#0a0a0a]/80 backdrop-blur-md border border-[#444] rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/80 focus:bg-white/10 focus:ring-2 focus:ring-white/30 transition-all duration-300 text-lg"
                />
              </div>

              <button
                type="submit"
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 whitespace-nowrap flex items-center justify-center text-lg ${
                  joined
                    ? 'bg-[#111827]/80 text-green-300 border border-green-400/20backdrop-blur-md shadow-[0_0_20px_rgba(74,222,128,0.08)] hover:border-green-400/40 transition-all duration-300'
                    : 'bg-white text-black hover:bg-gray-200 active:scale-95'
                }`}
              >
                {joined ? "Joined the Waitlist!" : 'Join waitlist'}
              </button>
            </form>

            <div className="w-full max-w-lg flex flex-col items-center lg:items-start pt-6 border-t border-white/10">
              <p className="text-xs text-gray-400 mb-6 uppercase tracking-[0.2em] font-semibold">
                Powered by
              </p>

              <div className="flex gap-4 sm:gap-8 items-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex-wrap justify-center lg:justify-start">
                <div className="flex items-center gap-1 sm:gap-2 group/tech cursor-pointer">
                  <SiSupabase className="text-lg sm:text-2xl group-hover/tech:text-emerald-500 transition-colors" />
                  <span className="font-bold tracking-tight text-xs sm:text-lg">
                    Supabase
                  </span>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 group/tech cursor-pointer">
                  <SiReact className="text-lg sm:text-2xl group-hover/tech:text-blue-400 transition-colors" />
                  <span className="font-bold tracking-tight text-xs sm:text-lg">
                    React
                  </span>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 group/tech cursor-pointer">
                  <SiNodedotjs className="text-lg sm:text-2xl group-hover/tech:text-green-500 transition-colors" />
                  <span className="font-bold tracking-tight text-xs sm:text-lg">
                    Node
                  </span>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 group/tech cursor-pointer">
                  <SiExpress className="text-lg sm:text-2xl transition-colors" />
                  <span className="font-bold tracking-tight text-xs sm:text-lg">
                    Express
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="hidden md:flex flex-1 justify-end lg:pr-10 w-full lg:w-auto perspective-[2000px] h-[50vh] md:h-[60vh] lg:h-[80vh]"
            style={{ maxHeight: '800px' }}
          >
            <div
              className="relative h-full group hover:-translate-y-4 transition-transform duration-700 ease-out"
              style={{ aspectRatio: '9 / 19' }}
            >
              <div
                className="relative w-full h-full bg-[#050505] rounded-[2.2rem] sm:rounded-[2.8rem] border border-white/10 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_90px_rgba(0,0,0,0.65),0_0_40px_rgba(255,255,255,0.08)] z-10 flex flex-col"
              >
                <div className="flex-1 bg-black w-full h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#0a0a0a] animate-pulse -z-10" />

                  <img
                    src={mobileViewImg}
                    alt="Trakio Mobile App Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Waitlist;